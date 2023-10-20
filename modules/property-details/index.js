/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
  BoldInfoText,
  Inset,
  Label,
} from "./style";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

const Detail = ({}) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }
  const purchaseDate = new Date(account.originalPurchasePriceDate);
  const todayDate = new Date();
  const yearsSincePurchase =
    todayDate.getFullYear() - purchaseDate.getFullYear();
  const sincePurchase =
    account.recentValuation.amount - account.originalPurchasePrice;
  const sincePurchasePercentage =
    (sincePurchase / account.originalPurchasePrice) * 100;
  const annualAppreciation = sincePurchasePercentage / yearsSincePurchase;

  const originalPurchasePriceString = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(account.originalPurchasePrice);

  const purchasedString = (
    <InfoText>
      Purchased for
      <BoldInfoText>{originalPurchasePriceString}</BoldInfoText>
      in {monthNames[purchaseDate.getMonth()]} {purchaseDate.getUTCFullYear()}
    </InfoText>
  );
  const sincePurchaseString = `£${sincePurchase.toLocaleString()} (${sincePurchasePercentage}%)`;
  const annualAppreciationString = `${annualAppreciation.toFixed(1)}%`;

  const sections = [
    {
      label: "Estimated Value",
      hidden: false,
      content: (
        <>
          <AccountHeadline>
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(account.recentValuation.amount)}
          </AccountHeadline>
          <AccountList>
            <AccountListItem>
              <InfoText>
                {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>
                {`Next update ${format(
                  add(lastUpdate, { days: account.updateAfterDays }),
                  "do MMM yyyy"
                )}`}
              </InfoText>
            </AccountListItem>
          </AccountList>
        </>
      ),
    },
    {
      label: "Property details",
      hidden: false,
      content: (
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>{account.name}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.bankName}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.postcode}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      ),
    },
    {
      label: "Mortgage",
      hidden: !mortgage,
      content: (
        <RowContainer
          // This is a dummy action
          onClick={() => alert("You have navigated to the mortgage page")}
        >
          <AccountList>
            <AccountListItem>
              <InfoText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  Math.abs(account.associatedMortgages[0].currentBalance)
                )}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.associatedMortgages[0].name}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      ),
    },
    {
      label: "Valuation change",
      hidden: false,
      content: (
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>{purchasedString}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>Since purchase</InfoText>
              <Label>{sincePurchaseString}</Label>
            </AccountListItem>
            <AccountListItem>
              <InfoText>Annual appreciation</InfoText>
              <Label>{annualAppreciationString}</Label>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      ),
    },
  ];

  return (
    <Inset>
      {sections.map((section) => {
        return (
          <AccountSection key={section.label} hidden={section.hidden}>
            <AccountLabel>{section.label}</AccountLabel>
            {section.content}
          </AccountSection>
        );
      })}

      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
