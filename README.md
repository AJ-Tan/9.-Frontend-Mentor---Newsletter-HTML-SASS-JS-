# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-  Add their email and submit the form
-  See a success message with their email after successfully submitting the form
-  See form validation messages if:
   -  The field is left empty
   -  The email address is not formatted correctly
-  View the optimal layout for the interface depending on their device's screen size
-  See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Design](<screenshot/AJ - Desktop Design.png>)
![Desktop Active](<screenshot/AJ - Active State.png>)
![Desktop Error](<screenshot/AJ - Error State.png>)
![Desktop Success](<screenshot/AJ - Desktop - Success.png>)
![Desktop Success Active](<screenshot/AJ - Desktop - Success - Active.png>)
![Mobile Design](<screenshot/AJ - Mobile Design.png>)
![Mobile Active](<screenshot/AJ - Mobile - Success.png>)

### Links

-  Solution URL: [GitHub Repository](https://github.com/AJ-Tan/9.-Frontend-Mentor---Newsletter-HTML-SASS-JS-.git)
-  Live Site URL: [Add live site URL here](https://aj-tan.github.io/9.-Frontend-Mentor---Newsletter-HTML-SASS-JS-/)

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Javascript

### What I learned

1. I have learned to import and use 3rd party script to implement data validation.

```html
<script src="https://cdn.jsdelivr.net/npm/validator@13.9.0/validator.min.js"></script>
```

```js
if (dataType === "email" && validator.isEmail(data)) {
   return true;
}
```

### Useful resources

-  [Data Validator](https://github.com/validatorjs/validator.js) - Third party service that allows us to check if data type is the same type of data we are expecting.

## Author

-  GitHub - [AJ-Tan](https://github.com/AJ-Tan)
-  Frontend Mentor - [@AJ-Tan](https://www.frontendmentor.io/profile/AJ-Tan)
