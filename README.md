Emanuel's notes (actions after I have read the README.md):
1) Immediately upon looking at the property-details/index.js file, I see that things could be written in a more friendly way by using a functional component. An array can be built with the data and then mapped over to create the list of items. This would also allow for the data to be passed in as props, which would be more flexible and allow for the component to be reused. I started doing this by separating things into the array, so that I can easily just add my details into an object instead of manually adding to the whole page content. This makes the code cleaner and ensures the design is respected. To be noted, the hidden prop is used for the mortgage and potentially any other element that may need to be dynamically hidden.
2) I look carefully on the way that the new component looks and I add the details inside the code to calculate the variables needed, console.log-ing them to make sure that they are correct. I also add the new component to the page and I make sure that it looks as it should.
3) Since I have already reached 2h of work, and the required specification is met, I have decided to stop here and continue writing what the next steps would be.
I consider this:
- in order to do the optional of getting the data from the API, I would use the API call using the /api route of the Next JS app. I would then use the data to populate the page. I would also add a loading state to the page, so that the user knows that the data is being fetched.
- I would use React State to store the data and then pass it to the component as props. This would allow for the data to be used in other components as well, if needed.
- All of the calculations would be automatically updated inside a React useEffect hook. This would allow for the data to be updated without the need of refreshing the page. The actual calculation would happen inside separate functions.



# Moneyhub Tech Test - Property Details

This is a prototype of a new feature in Moneyhub
Customers will now be able to receive automatic value updates on their properties
and we would like to enhance the experience by summarizing their changes

Please read this whole document before starting

This prototype is built using NextJS and makes use of styled components

## Requirements

We would like you to:

----

**Required**: Add a "Valuation changes" section to the page. `design-mock-up.png` has been provided as a design reference for the page and `detail-design-mock-up.png` shows the specific feature to be added, including how it is styled responsively. Make use of existing fonts and styles to match the look and feel of the existing app rather than trying to match the mock up exactly.

 ```
  sincePurchase = `recentValuation - originalPurchasePrice`
  sincePurchasePercentage = `sincePurchase / originalPurchasePrice * 100`
  annualAppreciation =`sincePurchasePercentage / number of years since purchase`
  colours used for the positive change in the image are #c2f7e1 and #006b57
 ```

Consider what other data this component could take and how that might affect your theming and solution

Consider opportunities to reduce repetition in the code and increase legibility
- This could be creating new components, simplifying existing ones, extracting helper function to simplify code or styling
- Show us what you can do and implement a few of these if you have time

We also ask that you update the readme with answers to the following questions 

1. Given more time, what other changes you would have liked to make?
- I have added this in the beginning of this file.
2. What UX or design improvements or alterations might you suggest? These can be to existing components or completely new ideas.
- The mortgage area seems that it needs more information. I would add a section that shows the monthly payment, the total amount paid and the total interest paid. I would also add a section that shows the total amount paid for the property, including the mortgage and the original price.

----

**Optional**: If you have time, show us some more by fetching the data from the api
  - Currently the property data is hardcoded in the component, but it is also avaible via a Next.js api route
  - Details of a property are located in the API at `/api/account`, use this endpoint to populate the app with data
  - Use whichever method or library you are comfortable with to fetch the data

----

Try to:

- Ensure markup is semantic and accessible
- Make use of a centralised theme
- Make effective use of Git

We prefer:

- Functional React components
- `styled-components` for styling
- `prop-types` for typechecking

----

**IMPORTANT**

Most of your work should take place inside the `components/` and `modules/` directory. There are some example components and styles available and the theme is defined in `theme/`. This task has been mocked up in Next.js to provide a full working environment and as such shouldn't be taken as a _complete_ application. We are interested in assessing your React frontend skills and are not testing your knowledge of Next.js, you should not need to make any changes in the `pages/` directory.

### Notes

We recommend working through the list of requirements above but don't expect you to finish all of them. We're more interested in seeing how you approach the problem than seeing a perfect example, please only spend a few hours working on it. 

On completion, email a link to your repository to your contact at Moneyhub, and ensure it is publicly accessible.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

You can start by looking at `modules/property-details/index`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
