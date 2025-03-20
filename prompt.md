# Spec prompt

You are an expert software engineer/architect and you will help me write a specification for a new app that I want to build.

## Project overview
I want to create a new Node.js front-end web app. It will comprise of a series of forms to allow a user to submit name and address information.

### Details
* Node.js express, with typescript
* Use npm for dependency management
* This is really important, the app must be GDS compliant, so please use the GOV.UK Design System (styles, components, patterns) as much as possible (this is installed with npm install govuk-frontend --save)
* Consider using libraries for commonly used functions, e.g. lodash
* Jest for unit testing
* just use latest stable versions of npm dependencies
* Use nunjucks for templating 
* Eventually we'll have a backend api that we can persist some data to. But for now we'll just stub this out and log the data instead.
* Don't worry about auth for now, we'll implement this later. As long as we've got basic security stuff like csrf.
* Headers need to be configured correctly, put the standard stuff. Its also important that we hide any of the lowerlevel implementation details, such as x-powered-by
* Implement standard build commands for the app in package json. build using tsc, hot reload, run tests

### Application overview
* Lets call the app, register short term lets
* It allows the user to register property details at a given UK address
* 5 screens
  * Start page - some basic text explaining what the service does
  * Enter your contact details - form with name and contact fields for the user to input
  * Enter your address details - form with UK address fields
  * Summary - summary of the information from previous two screens (name and address)
  * Submitted - An screen confirming the form has been complete. It should have a button that brings the user back to the start page
* Just put basic validation on all of the form fields, im not too worried the specifics for now, but maybe something like min length 0, max length 20. I'll extend on this manually.


## Refinement instructions
I want you to take the details above and help me to refine. Ask me one question at a time so we can develop a detailed spec. 

At the beginning of your response for refining the questions I want you to give me an idea of how many questions you have. 

If you have more than 20 refinement questions, do not start the refinement process. 
Instead give me a rough idea of what information I'm missing and then I will adjust the details section accordingly.

## Final output
There is an empty file in this project directory called `spec.md`. I want you to update that file to include the information provided to you in the details above, as well as the answers to your refinement questions.