# Learnreact

<h1>Set React</h1>

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
1. import {useState} from 'react'
2. Destructuring Syntax 
let [title, setTitle] = useState('recommend man's coat')

### How to change useState
1. event handler 
onClick( function )
onChange( function )
2. let [title, setTitle] = useState('Hello useState')
first is variable! and second is function that change state
so how to change useState ? 
onClick(()=>{ return setTitle(title = 'How to change useState?' )})
3. How to change array state
If state is array or object we must make shallow copy and change!
To change array, we use spread operator.
Spread operator is ... and remove bracket!

