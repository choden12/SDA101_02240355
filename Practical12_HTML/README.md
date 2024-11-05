## Custom Card Component

## overview of project
This is a custom card component implemented by using Web Components. It has slots available for header, image, content, and footer - thus being very versatile in use for your web applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Acknowledgments](#acknowledgments)

## Installation

The following are steps to install this custom card component in your project:

Download the `component.js` file and add it to your project's directory.
2. In your HTML file, add a reference to `component.js`, something like this:

```html
<script src="component.js"></script>
```
And you are good to go with your own custom card component.

## Usage

Following is an example using `<custom-card>` component:

```html
<custom-card style="--card-bg-color: #f9f9f9">
  <span slot="header">Poem</span>
  <img slot="image" src="pic.jpeg" alt="Sample Image" />
  <span slot="content">
"If my heart could speak, 
    it would say to you,
    I will not let you go, I will hold you 
    in my arms forever."
  </span>
  <span slot="footer">Learn More</span>
</custom-card>
```

## Features
Shadow DOM: Styles and markup are encapsulated which prevents the card's styles from bleeding out into the rest of the page.
Customizable slots for header, image, content, and footer. CSS Variables: So that it is easy to theme and style, the properties are customizable through custom properties like --card-bg-color, --header-bg-color, and --footer-bg-color. 

## Technologies
 - Used HTML : Provides the structure with slotting for customization. CSS: Styles the card with custom colors, padding, and layout.
-  JAVASCRIPT (ES6): A JavaScript class defines a custom Web Component with the Shadow DOM.

## Acknowledgments
I created this component, wanting to understand more about Web Components and the Shadow DOM. Thanks again to community resources on Web Components, which made it possible for me to complete.