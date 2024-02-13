# Harry Potter App
Pair project completed in 2 days. We created a simple web app using information from an API (application programming interface). Our chosen API was from https://hp-api.onrender.com/ which is a Harry Potter related API with information on characters and spells. We displayed these details in this web app for Harry Potter fans. I worked with https://github.com/jamesbraid11.
## Deployment Link
[Live Deployment](https://hpwebapp.netlify.app)
## Technologies Used
- HTML
- CSS
- Saas
- React
## Brief
This project is to build an application using a public API. The app must:
- Consume a public API.
- Have several components.
- Include wireframes - that you designed before building the app.
- Be deployed online and accessible to the public.
  
Necessary deliverables:
- A working application hosted on the internet.
- A git repository hosted on Github with frequent commits from the beginning of the project.
- A readme file.

## Planning
Me and James started out with a wireframe of how our web app will look like and what pages it will have. The wireframe below is the basic layout of the app we will build. 

<img width="570" alt="Screenshot 2023-11-26 at 20 31 42" src="https://github.com/ttamanna1/harry-potter-app/assets/138875274/4d5d7798-b72b-4d00-99f9-704480a701b3">

We then started to plan how we will code our React app by listing the components we will have and how we will load the data from the API.

<img width="550" alt="Screenshot 2023-11-26 at 20 35 58" src="https://github.com/ttamanna1/harry-potter-app/assets/138875274/f01c74fa-e359-42d6-a8ac-8d164699d3f7">

## Build Process
The first step was to create our React files and download the necessary packages. We decided to use Saas and Bootstrap to style our app, therefore those packages were downloaded.

The main components for our app were created and imported into our main file. We used a router in our app to make the multi-page component of the app.

We loaded  the information on characters from the Harry Potter API using an async function.

![Screenshot 2023-11-26 at 20 55 48](https://github.com/ttamanna1/harry-potter-app/assets/138875274/77bb4e9a-8e8a-4ddd-bc4d-322f911fc792)

The CharIndex page is a Characters list page where the image and name of each character is displayed. I added a dropdown filter by Hogwarts house and a search filter by character name. The API we used had a lot of characters without images and we decided that displaying those characters without images would not be visually pleasing. Therefore, I implemented a line of code which would ensure that only characters with images will be displayed in our Characters page. So if the API is updated with images for the characters with no images, it will be reflected in our app.

![Screenshot 2023-11-26 at 20 57 02](https://github.com/ttamanna1/harry-potter-app/assets/138875274/6b26b568-9617-4658-a9bc-d48ed9579451)

The images of each character is a link to the CharCard page where a card with the image and details of the specific character selected is displayed. We used another async function to import the characters by id.

![Screenshot 2023-11-26 at 21 00 46](https://github.com/ttamanna1/harry-potter-app/assets/138875274/92fa4ab8-a3d8-40a6-a96e-2c620b87f60f)

For the CharCard (individual character) page, we used React Bootstrap kitchen sink card layout to create our character card. For each character id, we also targeted the ‘house’ of each character so that their individual character page will display their Hogwarts house crest. We proceeded to add some styling to our web app.

<img width="745" alt="Screenshot 2024-02-13 at 09 35 23" src="https://github.com/ttamanna1/harry-potter-app/assets/138875274/108bcc2c-442c-4c0b-a44d-b1e4d5a48999">

For the details for each character on the card, the API did not always have all the details. For example, some characters did not have information about their patronus. Therefore, we added some conditional logic to display the details if present, or display an alternative message.

![Screenshot 2023-11-27 at 09 29 17](https://github.com/ttamanna1/harry-potter-app/assets/138875274/fca52e26-05cd-43d9-9d67-81d2054be3fc)

We also used a Bootstrap modal to act as our navigation page. 

![Screenshot 2023-11-27 at 09 25 04](https://github.com/ttamanna1/harry-potter-app/assets/138875274/4d0eaf14-ac07-49ef-b49c-73a3cf704af8)

We decided to add an extra page that is not in our wireframe. The Harry Potter API has an endpoint for spells and we thought it would be a great feature to add to our web app. We set this page up similarly to our Characters page and we styled our Spells page.

<img width="745" alt="Screenshot 2024-02-13 at 09 38 05" src="https://github.com/ttamanna1/harry-potter-app/assets/138875274/f4ab757d-3a95-480d-ac1e-05181caf9f43">

This project was mostly pair coded, however,  I specifically spent more time working on the Characters page and James spent more time working on the spells page.

## Challenges
We had issues with styling and it took some adjustment to get used to using Bootstrap. In particular, we had trouble getting accustomed to the layout structure and styling using Bootstrap.

## Wins
Me and my teammate, James, are Harry Potter fans and we found creating this web app more fun and meaningful because of it. We were proud of the finished styling for the timeframe we had for this project. Creating the spells page, which wasn’t in our original plans, was fun and added that extra magic to our app.

## Key Learnings
- Learning how to use React.
- Learning to add a filter dropdown bar and search bar for better user experience.
- Learning bootstrap for basic styling.

## Bugs
We did have a bug with our images as we did not import them into our React app and we wrote them as JavaScript img tags which would not display when deployed. It has since been corrected and the images are now imported into our app.

## Improvements
In general, improving the styling would be great for our app. An idea is to implement a theme provider in the React app where the user can choose the theme of the app depending on each Hogwarts house.


