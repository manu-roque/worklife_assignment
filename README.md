# Worklife Assignment

## Setup

```bash
npm install
npm run dev
```

**NOTE: ** There are no extra dependencies, this should be all that's needed for the project to run correctly.

## Presentation

Project was developed using Vue3 + Typescript, for fetching the data I use axios and the only icon I use is from fontawesome.

I woud like to start by saying that my Vue experience is that of a beginner compared to React, I wanted to show by doing the project with Vue that I can get up to speed fast when it comes to learning a new framework or programming language. It's not something that I'm opposed to and I'd be willing to fully immerse myself into Vue in the future if that is what will be the most helpful and needed. I'm completely open to criticism and advice and I would love to know what I could have done better.

Project took a bit longer than expected due to the learning process needed to understand Vue. The first thing I started with was with the top navigation bar component which I called **NavComponent.vue**. First step was to make sure it had a fixed position and for it to be responsive. I also added worklife's logos for desktop and mobile. I then left a placeholder space on the right for the favourites counter.

Next up came to take care of the main and only view, **HomeView.vue**. In here I set the main structure of the page and how I would like it to be displayed. It's also here where I do the api call to the rijksmuseum api. After that came time to create the cards that are going be shown on screen.

The **DataCard.vue** component will take the data taken from the request and render it on screen in the form of a card. I took some liberties in changing the design of the card so it shows the whole artwork instead of a square, as the aspect ratio of the artworks varies from image to image. I didn't want to cut or zoom into the images. Once that part was done I made sure to add a css hover event to have a nice, smooth animation to show the art's title. These cards are then rendered on the HomeView. 







