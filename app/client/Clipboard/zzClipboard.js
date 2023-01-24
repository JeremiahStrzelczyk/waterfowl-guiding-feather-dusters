@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&family=Nunito&display=swap");

/*******************************************************************
* RESET 
*******************************************************************/
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /*calculatiotns include border */
}

img {
  display: block; /* removes gap since imgs are inline by default */

  /* Img responsiveness */
  max-width: 100%; /* of parent */
  height: auto;
}

/* Do not inherit font styles by default */
input,
body,
textarea {
  font: inherit;
}

/*******************************************************************
* VARIABLES
*******************************************************************/
:root {
  /* FONTS */
  --ff: "Nunito", sans-serif;
  --ff-headings: "Fugaz One";

  /* Grows and shrinks font size with a min and max */
  --fs: clamp(1rem, 2.2vh, 1.5rem); /* <smallest> <growth> <largest> */

  /* COLORS */
  --bgcolor: white;
  --bgcolor-secondary: black;
  --color-primary: black;

  --cta-bgcolor: orange;
  --cta-color-primary: black;

  --nav-bg-color: black;
  --nav-color: white;
  --border-color: #333;
  --link-color: white;
  --link-hover: hsla(0, 0%, 100%, 0.774);
  --link-active: orange;

  /* BORDERS */
  --borders: 1px solid var(--border-color);

  /* STANDARD PADDING */
  --padding-tb: 0.25em;
  --padding-side: 2.5%;

  /* STANDARD MARGIN */
  --margin: clamp(1em, 2.5vw, 5rem) 0;
  /* --margin-article: clamp(1em, 2.5vh, 5rem) 0; */
}

/*******************************************************************
* UTILITY CLASSES
*******************************************************************/
.offscreen {
  position: absolute;
  left: -10000px;
}

.nowrap {
  white-space: nowrap;
}

.center {
  text-align: center;
}

/* Creates a black background that spans the entire view width. */
/* Centers the content that is with it */
/* For example, the collage uses this BG */
.black-section {
  background-color: var(--bgcolor-secondary);
  width: 100vw;
  display: flex;
  justify-content: center;
}

/*******************************************************************
* GENERAL STYLES
*******************************************************************/
body {
  font-size: var(--fs);
  font-family: var(--ff);
  min-height: 100vh;
  background-color: var(--bgcolor);
  color: var(--color-primary);
  margin: 0 auto; /* centers left and right */
}

/* React root div */
#root {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

h1,
h2,
h3 {
  font-family: var(--ff-headings);
  letter-spacing: 0.1em;
}

p {
  line-height: 1.5;
}

a:any-link {
  color: var(--link-color);
}

a:hover,
a:focus-visible {
  color: var(--link-hover);
}

a:active {
  color: var(--link-active);
}

/*******************************************************************
* || MAIN
*******************************************************************/
.main {
  padding: var(--padding-tb) var(--padding-side);
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main__article {
  border: 3px solid red;
  margin: var(--margin);
}

/*****************************
 * Nav
 ****************************/
.nav {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--nav-bg-color);
  border-bottom: var(--borders);
  font-weight: bold;
  box-shadow: 0 6px 5px -5px var(--border-color);
}

.nav__ul {
  padding: var(--padding-tb) var(--padding-side);
  margin: 1rem;
  list-style-type: none; /* Removes bullets */
  display: flex; /* Render as row instead of list */
  justify-content: space-evenly;
  gap: 1rem;
}

/*****************************
 * || Collage
 ****************************/

.collage__container {
  /* display: flex;
  width: 100vw;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem; */

  /* width: 100vw;

  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around; */

  /* Attempting GRID solution */

  /* Chosen to match the side margins of the rest of the page */
  width: 94%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem 0;
  gap: 1rem;
}
.collage__container > figure {
  /* margin: 5px;
  width: calc(100% * (1 / 3) - 10px - 1px);
  height: auto; */
}

.collage__row {
  /* display: flex; */
}

/* figure {
  margin: clamp(1em, 2.7vh, 5rem);
} */

/**************************
 * || Footer
 *************************/
.footer {
  background-color: var(--nav-bg-color);
  color: var(--nav-color);
  bottom: 0;

  /* Center horizontally and vertically */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Center-align text */
  text-align: center;
  box-shadow: #333;
  border-top: var(--borders);
  min-height: 200px;

  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 6px 0 5px var(--border-color);
}

.footer__copyright {
  font-size: 1rem;
}

/***********************
 * || Call to Action
 **********************/
/* justify-content: center; */
.main__article--cta {
}

.cta {
  margin: var(--margin);
  background-color: var(--cta-bgcolor);
  color: var(--cta-color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw * 0.75);
  height: calc(100vw / 5);
}

/*******************
 * || Button
 *****************/
.button {
  background-color: var(--bgcolor-secondary);
  color: white;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  border-radius: 100vmax;

  line-height: 1;
  padding: 1.1em 2.5em;
  font-weight: bold;
  font-size: 14px;
  color: --bgcolor;
  box-shadow: 0 1.25em 1em -1em var(--bgcolor-secondary);
}

.button:hover,
.button:focus-visible {
  background-color: #333;
}
