# part1

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
but it is array! 

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

1. `<Child-Component naming={state-name}>`

2. `const Modal(props) => { return ({props.title})}`

3. state function that change state is same 
`props.setTitle`

🚨 trasmiting is only parents -> child
not child -> parents not sibling -> sibling 🚨

<h1>onChange</h1>
### How to use eventHandler(onChange)

1. `onChange={(e)=>{console.log(e.target.value)}}`


# part2
<h1>React Bootstrap</h1>

### How to use Bootstrap with React

1. `import 'bootstrap/dist/css/bootstrap.min.css';`
2. `import { Button , Container, Navbar, Nav } from 'react-bootstrap';`
3. `<Navbar bg="dark" data-bs-theme="dark">`


<h1>image</h1>
Put image files in public folder
and input
{process.env.PUBLIC_URL + 'img-route'}

<h1>import export</h1>

if code is long we must divide code!
so we use import and export

### How to use import and export

#### import
input the file that we want to show page 
`import data from './data';`

#### export
1. make the file (ex. data.js )
2. `let data =[...]`
3. and export!
`export default data`
4. if you want to add second variable you must make export
`export {val1, val2}`


<h1>React Router</h1>
모달창을 url 만들 수 잇다.

#### set
npm install react-router-dom@6

```
<Routes>
    <Route path="/" element={<div>메인페이지임</div>} ></Route>
    <Route path="/detail" element={<div>상세페이지임</div>} ></Route>
    <Route path="/about" element={<div>어바웃페이지임</div>}></Route>
</Routes>
```

### navigate, nested routes, outlet

1. navigate

2. nested routes
nested's mean is tag in tag
```
<Route path="/about" element={ <About/> } > 
    <Route path="member" element={<div>member</div>} />
    <Route path="location" element={<div>location</div>} />
</Route>
```
3. outlet
outlet is path position
```
<div>
    <h4>inc</h4>
    <Outlet></Outlet> <- this is <Route path="location" element={<div>location</div>} />
</div>
```


if you want to make 404 page
`<Route path="*" element={ <div>404</div> } />`
* <- every routes

### parameter

0. `<Route path="/detail/:id" element={<Detail shoes={shoes} />} ></Route>`

1. `import { useParams } from 'react-router-dom'`

2. `let { id } = useParams()`

