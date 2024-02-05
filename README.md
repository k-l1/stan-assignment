Live preview: https://willowy-malasada-ae70cf.netlify.app

## Getting started
```
npm install
npm run start
```


## Review
This was a relatively straightforward task which I took the opportunity to revisit some tools I have not touched in a while e.g Webpack/Babel. 
Setting up the application took an unexpectedly significant amount of time due to the nature of setting up webpack and its dependencies.
Overall a good chance to revisit some of the more fundamental React APIs that do not lean on libraries as many frameworks nowadays will probably obscure from developers.

### How did you decide on the technical and architectural choices used as part of your solution?
I usually opt for modern tooling for a better developer experience but the assignment requirements state the need for using only the tools listed. 
I leaned on React-Router and built in Suspense in order to deliver the lazy loading UI through the use of the loader pattern. 
The carousel contained the only algorithm of note which is the circular list traversal, which reduces the need to have too many if/else conditions if it was manually written instead. 
There is a fake delay on the `fetch` call to the JSON to simulate the loading elements of the carousel. 
I opted to just leave the app stateless instead of a global store in Redux to not overly complicate the task for myself.
I used CSS modules to keep the styling simple for readability (as it may be difficult for devs unfamiliar with styling components to familiarise themselves with the workflow)

### Are there any improvements you could make to your submission?
I did not have enough time to implement proper tests. In any ordinary circumstance I would have a predefined set of behavioural tests using a framework such as Cypress to emulate the end user's interactions.
Some of the UI could be more pixel perfect and resize in a more coherent manner if I had time to tie in CSS variables to viewport resolutions. 
I would ideally add more animations for a better user experience such as page transitions and shifting elements within the carousel to give the intuitive feel of momentum and movement.

### What would you do differently if you were allocated more time?
Write the test suite as I was coding instead of at the end.
Spend more time making generic components. Some of the skeleton elements I did not think through properly and ended up duplicating styles that could have been more abstract instead.
Add the data to localstorage and route/id params to cookies to keep the user session consistent throughout reloads.
