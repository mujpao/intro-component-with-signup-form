# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Desktop:

![desktop solution](./solution-images/solution-desktop.png)

Mobile:

<img src="./solution-images/solution-mobile.png" alt="mobile solution" width="500">

### Links

- Solution URL: [GitHub repo](https://github.com/mujpao/intro-component-with-signup-form)
- Live Site URL: [GitHub Pages](https://mujpao.github.io/intro-component-with-signup-form/)

## My process

### Built with

- CSS custom properties
- Flexbox

### What I learned

Through this project, I learned how to add custom form validation using JavaScript.

I used the `novalidate` attribute on the `<form>` element to prevent the built-in HTML form validation and used the constraint validation API to check the validity of each input element when the element's value is modified or if the user tries to submit the form. If the element doesn't pass the validity check, then an error message is displayed, and the form is not submitted.

Using the technique suggested by [this article](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html), I hid the label whenever the form input is not empty, while still allowing the label to be read by screen readers.

To ensure that the error message is read whenever an invalid input is focused, I set `aria-invalid="true"` on the input element and set `aria-errormessage` to link to the `id` of the corresponding error element.

### Continued development

I want to continue learning about JavaScript and how best to organize code. I also want to learn more about accessibility.

### Useful resources

- [MDN article about form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This article helped me implement the custom error messages.
- [MDN article about aria-errormessage](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage) - Another helpful MDN article.
- [Article about hiding things using CSS.](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html) - This was useful for implementing the labels.
- [Article about prototypal inheritance in JS](https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9) - Contains a useful example of a factory function.
- [Article suggesting not to use placeholders](https://www.smashingmagazine.com/2018/06/placeholder-attribute/) - Article about how using placeholders and similar designs can result in some issues.
- [The Odin Project](https://www.theodinproject.com/) - This is a useful resource for learning about full-stack development.

## Author

- Website - [mujpao](https://github.com/mujpao)
- Frontend Mentor - [@mujpao](https://www.frontendmentor.io/profile/mujpao)
