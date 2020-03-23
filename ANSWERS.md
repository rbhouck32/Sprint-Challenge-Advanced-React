- [ ] Why would you use class component over function components (removing hooks from the question)?

You may prefer to use class components over function components when your component needs more functionality, like keeping state. (this was mostly true until the introduction or React Hooks).

Function components are seen to be more so used for rendering only.

- [ ] Name three lifecycle methods and their purposes.

Constructor - to create components with inciting state data for the inital render. Any other props that the component receives on state can be done through the constructor function

Render - used to tell React, to return some piece of the DOM. The React virtual DOM will then handle the steps to ount those DOM pieces. render() is required for a class component, and without it, the component will not work.

ComponentDidUpdate() - invoked immediately after updating occurs. this method is not called for the initial render.

purpose is to provide the opportunity to operate on the DOM when the component has been updated. ie. A good placce to do network requests as long as you compare the current props to previous props

- [ ] What is the purpose of a custom hook?

Custom Hooks allow us to skip writing out all of the stateful logic for our non-visual behavior. Custom hooks help us produce "DRY" code that is easy to read and use. This allows us to import a piece of reusable code anywhere in our application and build out stateful logic in any of our components.

- [ ] Why is it important to test our apps?

We write tests to be confident that our application will work when the user uses them.
Automated testing minimizes the risk of bugs finding their way into production code. Testing can help us find bugs quicker, trust the code, and acts as a safety net when making changes or refactoring.
