# NamasteReact001
# NamasteReact

#What is JSX? 
- It is not necessary to use it with React instead we can use React and React dom APIs.

# React 
- it is  JavaScript Library.
- We can use React just in small piece of page.

# Episode 02
- Adding npm to our project.
- It will add package.json

What is a bundler?
A bundler is a tool in web development that takes multiple files (like JavaScript, CSS, images, etc.) and packages them together into a single file (or smaller number of files) that can be efficiently loaded by the browser. It helps optimize the delivery of your code by combining all your project's assets into bundles, reducing the number of requests the browser needs to make and improving page load performance.

create-react-app uses bundler(webpack)

- what is package-lock.json? it keeps the tracks of exact version which is on the project.
- what is node_modules? The node_modules folder is a directory in a Node.js project where all the project's dependencies (packages or modules) are stored after running npm install. These dependencies are defined in the project's package.json file, and the node_modules folder houses the actual code for those dependencies.

- what is transitive dependency? a dependency which is dependent on many other dependencies
every dependency has its own package.json.

# Parcel
- npx parcel index.html 
- npx: executing a package
- builds local server
- automatically refreshing (hot module replacement)HMR
- File Watching algorithtm (C++)
- Cache (binary files)
- Image Optimization
- production build- bundle our files -> minimize
- files are compressed (remove spaces)
- consistent hashing
- Code spliting
- Differential bundling ( any browser can open our appp)
- HTTPS
- Tree shaking removed unused code
- different bundle dev and prod

# BowswerList
- Compatible with older version of browsers
- npm package

# Scripts
- to add scripts add a section in package.json
- give title to the script

# JSX
- JS engine doesnt understand JSX. how it is understood then? Parcel is doing this
- using transpiled JSX before JS engine process it
- Parcel is like a manager
- Babel does the transplilation JSX to(convert) JS understable by its engine
- what is transpiling
- Babel is a JS compiler
- JSX -> Babel -> React.createElement -> React JS ->Js Object ->HTML element
- React is readable coz of JSX

# Episode 02

# React Components
- Class based
- Functional

# Functional Component
- A JS function that returns a JSX code is Functional component

# Cross site scripting
- through api if there is any malacious data then JSX will escape it. 
- JSX sanitizes the data. and does not run anything blindly.


# Export import Types
- Named - when we want to export multiple objects use export and { add the names that is imported }
- Default - export default "name"; 

Can I use named with default;

# Always write only 100 lines in each file - best practice

# React Hooks
- Utility function
- Normal JS functions
# useState 
- maintain the state of the compnent
- local to the compnent
- const [list, setList] = useState([]);
- whenever state changes the react will re render the component
- Whenever you chnage the local statment variable react re - render's the component
- it is used for creating local state variables
- best practices:   1. never declare use outside inside the body 
-                   2. always call on top (JS will run line by line)
-                   3. never create hooks in if else condition, for loops, fucntion
-                   4. 

# useEffelct

# how does react work?
- it works of Reconcilation Algo - React Fiber

# Episode 6

# Consume API in React

# 2 approaches
- 1. Load page -> call API -> Render
- 2. Load Page -> Render UI -> call API -> Render UI
- 2nd approach is better in React - >*Render cycles of React is very fast*. Therefor, 2 render in okay!

# UseEffect hook
- what is hook?(nomarl JS function), it has own use case
- it will take 2 arguments (arrow function/call back function, dependency array)
- body component will render and then the call back function will be called.
- use effect will be helpful when caling the api and using 2nd approach
- when is use effect is called -  everytime my component is rendered
- [] is not mandantory(dependency array)
- if no dependency array is provided , use effect is called on every componenet render
- if empty dependency array  is provided [], it called only once
- if we put something in the dependecy array, then on change of that dependcy everytime the use effect is called

# fetch
- given to us by browsers
- it is included in JS engine
- Async the fucntion and then await for the data to come.
#Error
- calling api of swiggy.com from our app has been blocked.
- our browsers block us from calling api from one origin to another
-

# Optional Chaining

#  Conditional Rendering

# Episode 7

# React-Router-dom
- Router Configuration
- Create browser router: 1. tells if "x" is the path then what needs to be done!
                         2. Takes list of configuration (path, element)

- RouterProvider:    

- errorElement:  if any error we can show this page
- gives access to "useRouterError" (hook- whenever something starts with "use" its a hook") 
    - it gives info about the error
- children routes

- discuss about header and footer should remain constant


- Outlet - will be used to display nested route 
         - will render the child components based on the current route.
- Never use a anchor tag in React coz it refreshes the entire page

- Link works exactly as anchor tag
- i.e it is known as SPA

there are two types of routing in web apps:
1. client side: to handle the navigation between pages directly in the browser without requiring a full page reload from the server. This is common in Single Page Applications (SPAs),
2. server side routing:

# Dynamic routing

# useParams

# Lets Get Classy!
- functional component return a piece of JSX
- Class component has render function which returns a piece of JSX
- super(props) in the constructor of a React component that extends React.Component, you are essentially initializing the parent class (React.Component) with the props that were passed to the component.
- Never update state variables directly
- you can batch variables to update for state

# React Life Cycle  for class
- React scans and sees a class, instantiates the class 
- calls the constructor
- calls the render
- u can use import { Component } from "react"
- Parent constructor - Parent render - Child constructor - child render - child component did mount - parent component did mount (imp interview question)
- Component did mount - 
- constructor - render- component did mount

# component did mount
- used to make api calls why? - coz constructor - render -component did mount
-   Parent Constructor
    Parent render
     - A Child constructor
     - A  child render
     
     - B Child constructor
     - B child render

     - A child component did mount
     - B child component did mount

    parent component did mount

# React has 2 phases
- Render (contructor, render)
- commit  (DOM update, component did mount)

- first constructor then render is called, then react updates the DOM then calls component did mount
that is why api call is best to be made in compoennt did mount
- Commit phase is batched
- why does react does so? 
- render phase is really fast
but DOM update takes time so it is done in batch
-  react is batching for children - 

# ComponentDidUpdate

# ComponentWillUmount
- when the component will disapear from the html


-  mounting -updating - unmounting


# custom hooks
- what is hooks? - it is utility function, normal JS function
- start with "use" the React understands its a hook
- when designing a hook first check what is the contract of that hook? i.e input and output?

- single responsibility

# episode 09
- how to start with a custom hook?
    - start with the contract - input/output
    - use hooks
    - single responsibilty

# Bundling

# code spliting - chunking - lazy loading - dynamic bundling - on demand loading - dynamic import
- you have to split the app
- you need to chunk it dowm
- chunk your codes
- 

# lazy() 
- named export
- lazyload takes a call back function
- import function will take the path
- on demand loading
- named export
- creates separte new js file
- a component suspended

# suspense
- when lazy loading the react tries to load the component and it doesnt find it so gives error
- hence suspense - fallback - > what should react render until it renders
- fallback -> JSX (can do shimmer UI)

# episode 10
- styled component - used in uber
- ways of writing css 
    - material UI - very popular
    - bootstrap
    - ant ui
    - chakra UI
    - u get pre built
    -
- Tailwind CSS
    - postcss is behinf tailwind
    









