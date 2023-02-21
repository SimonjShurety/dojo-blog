#1 - Intro

#2 - CRA

#3 - Overview

- type '.content' and it wil create '<div className="content"></div>'
- Differences in class names class in JS vs className in JSX.
- No need to import React from ^React 17.
- Setup emmet for JSX.

#4. Dynamic Values in Templates

- To open link in new tab <a href={link} target="_blank" rel="noreferrer">
- Set the rel prop to noreferrer for security purposes. It prevents the opened page from gaining any information about the page that it was opened from.
- You cannot directly output Booleans and Objects in JSX.

#5 - Multiple Components

- Use sfc - tab snippet to create a functional component boilerplate.
  const = () => {return ()}

#6 - Adding Styles

- Why put the CSS in index.js instead of app.js

#7 - Click Events

- In JSX don't invoke the click handler just reference it otherwise it will fire when you load/refresh the page.
- Wrap the click handler in an anonymous function when you want to add a parameter to avoid invoking the function. <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
- Q: What is the btn click event target?
  A: .target is a property of an event which is a reference to the element upon which the event was fired. Just as 'target' means 'aiming at something', it's used to 'aim' at that particular element. This property gives us access to the properties of that element.

#8 - Using State (useState hook)

- UseState() is a function.
- Uses array destructuring to grab two values that the hook returns.
- First value = initial value.
- Second value is a setter function = new value.

#9 - Intro to React Dev Tools

- Component tree.
- Props
- Select component and click on the eye icon to jump to the related element.
- Click on the bug looking icon to log data to the console.

#10 - Outputting Lists

- When you output a list using the map method each root element in the template that is returned must contain a unique key property.

#11 - Props

- Pass props object to keep components reusable.
- Destructure props to access directly.

#12 - Reusing Components

- Use .filter to sort content.
  <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" />

#13 - Functions as Props

- when the "delete blog" button is clicked, the handleDelete function is invoked;
- then inside the handleDelete function, the setBlogs function is invoked, thus changing the value of blogs;
- because blogs as a state variable has changed, React re-renders the Home component;
- When React re-renders the Home component, it also re-renders the BlogList component.

#14 - useEffect Hook (the basics)

- Runs code on every render.
- Runs initially on first load and then any time data changes.
- Often used to fetch data or some type of authentication service(side-effects).

#15 - useEffect Dependencies

- A second argument for useEffect passed into the hook.
- Empty array = Runs once on initial render only. State changes won't trigger the function a second time.
- Add states to the dependency array to track changes and trigger a re-render.

#16 - Using JSON Server

- Setup mock data on port 8000 with JSON file db.json in app root directory folder called data.
  npx json-server --watch data/db.json --port 8000
  \src\images\endpoints.png

#17 - Fetching Data with useEffect

- Use a conditional template && while waiting for data to return.

#18 - Conditional Loading Message
