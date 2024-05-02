# Worklife Assignment

## Setup

```bash
cd worklife_assignment
npm install
npm run dev
```

**NOTE:** There are no extra dependencies, this should be all that's needed for the project to run correctly.

## Presentation

Project was developed using Vue3 + Typescript, for fetching the data I use axios and the only icon I use is from fontawesome.

I woud like to start by saying that my Vue experience is that of a beginner compared to React, I wanted to show by doing the project with Vue that I can get up to speed fast when it comes to learning a new framework or programming language. It's not something that I'm opposed to and I'd be willing to fully immerse myself into Vue in the future if that is what will be the most helpful and needed. I'm completely open to criticism and advice and I would love to know what I could have done better.

Project took a bit longer than expected due to the learning process needed to understand Vue. The first thing I started with was with the top navigation bar component which I called **NavComponent.vue**. First step was to make sure it had a fixed position and for it to be responsive. I also added worklife's logos for desktop and mobile. I then left a placeholder space on the right for the favourites counter.

Next up came to take care of the main and only view, **HomeView.vue**. In here I set the main structure of the page and how I would like it to be displayed. It's also here where I do the api call to the rijksmuseum api. After that came time to create the cards that are going be shown on screen as well as the search bar.

The **DataCard.vue** component will take the data taken from the request and render it on screen in the form of a card. I took some liberties in changing the design of the card so it shows the whole artwork instead of a square, as the aspect ratio of the artworks varies from image to image. I didn't want to cut or zoom into the images. Once that part was done I made sure to add a css hover event to have a nice, smooth animation to show the art's title. These cards are then rendered on the HomeView. 

The next step was to make sure only 12 of these cards will be displayed, for that I created a couple of methods that will slice the array to show only 12 results, and then add +12 every time the load more button is clicked. As the time of writing this, I've set the request to show up to 40 items total. Which lets us use the load more button a couple of times.

From there I created the **ModalWindow.vue** component. The very first thing that had to be done was to make a window appear in the middle of the screen that would do two things:

1. close when clicking outside of it
2. close when clicking a button

After that was done I could start with the general layout of the modal. I started by replacing the close button by an "X" close button. Followed by the Image, title and description and buttons.

Finally, I worked on making it responsive for tablets and mobiles.

The next step was to work on the favourites, while it was a bonus, I felt like it was something I could implement alongside the modal "add to favourites" button.

For that I set up a store, **useFavs.ts** in order to properly manage the states and all the logic for saving them on localstorage, two functions: one for incrementing and one for synchronizing the localstorage values. These functions are used mainly on the modal and details page. They are triggered on the **@click** events on the Add to Favourites button.

The last part to be done was the details page, **DetailsComponent.vue**. I wanted the details page to slide from the right side of the screen. Since this is a SPA I didn't want to create new routes or anything of that sort so I window that slides from the side seemed like the best way to go about it. This will trigger upon clicking on the details button. Here is where I ran into one of my first issues and it was that I couldn't seem to find the tags on any of the api calls I was doing, nor any info that could be used as a substitute for tags such as colors used. I opted to connect the buttons and make sure the page was fully responsive.

Once all the main parts were done I added the fontawesome heart icon alongside the counter on the nav far.

To finish up, I cleaned up the code, moved the CSS from the .vue files into their own .css files and improved readability.

# Troubles Encountered

1. The main big one that is noticeable right away is the lack of a functioning search bar. Due to my unfamiliarity with vue and the way states are handled, I was having a very difficult time in implementing this. with a bit more time I could dedicate proper time to doing this

2. Properly using TS alongside vue, it's not very straightforward and I ran into a lot of warnings and errors because of typing issues.

3. States and how they work as well as vue syntax, there were times where I found myself coding in a "react" style despite it not being the good way to do it. This caused a lot of bugs and delays with some of the components.

4. General way the vue code is supposed to be structured. This is more of a code readibility issue but I always had a feeling the code was messy until I restructured everything.

# Conclusion

I would like to start to thank you all for giving me the opportunity to take this test as well for the swiftness in responses between interviews.

This was a learning experience for me but also a way to demonstrate that in a short period of time I can independantly learn to a point where I can understand and be productive. With a bit more time I can greatly improve my vue code. 

I know this delivery has quite some mistakes but I hope that won't be eliminatory and I'm more than motivated to bring my react experience but also to quickly level up in vue.

Thank you!:)













