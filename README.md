## React 

<h1> Set React</h1>

1. npx create-react-app project-name || . <- dot's mean is current path installing

2. npm start

3. Update App.js react's flow(App.js -> index.js -> public/index.html)


<h1>React JSX syntax for layout</h1>

1. className 
Don't input class! Why? JSX is javascript . 
class is js syntax. so we must input className.

2. {variable} 

3. style tag style = {{fontSize:'30px'}} 
if i change font-size i must input fontSize 


<h1>useState</h1>

### How to make useState
1. `import {useState} from 'react'`
2. Destructuring Syntax 
`let [title, setTitle] = useState('recommend man's coat')`

### How to change useState
1. event handler 
onClick( function )
onChange( function )

2. let [title, setTitle] = useState('Hello useState')
first is variable! and second is function that change state
so how to change useState ? 
`onClick(()=>{ return setTitle(title = 'How to change useState?' )})`

3. How to change array state
If state is array or object we must make shallow copy and change!
To change array, we use spread operator.
Spread operator is ... and remove bracket!

<h1>Component</h1>

### How to make Component
1. Make function
2. Put html in return()
3. <Function></Function> <- first text is must write Uppercase
4. Can make <Function/>


<h1> Dynamic UI creation steps </h1>

1. Create HTML & CSS 
2. Save the current state of the UI as state
3. Write what the ui will look like depending on the state

<h1>Map function</h1>

### How to use map
`array.map((data, i) => {}`
map have two parameter.
first is array's data (ex. let array = [1,2] data is 1, 2)  
second is index 
### warning
key={i}

<h1>Props</h1>
### How to transmit parents 

1. <Child-Component naming={state-name}>

2. `const Modal(props) => { return ({props.title})}`

3. state function that change state is same 
`props.setTitle`

🚨 trasmiting is only parents -> child
not child -> parents not sibling -> sibling 🚨




