import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './my-sass.scss';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { useState } from 'react';
import Car2 from './Car2.js';
import Car6 from './Car6.js';





const myFirstElement = <h1>Hello React!</h1>;


/* React Array Methods */

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>);

const element1 = (
<table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>John</td>
  </tr>

  <tr>
    <td>Elsa</td>
  </tr>
</table>
);


const element2 = <h1>React is {5 * 20} times better with JSX</h1>;

//html code must be wrapped in ONE top level element
const element3 = (
    <div>
        <p>I am a paragraph</p>
        <p>I am a paragraph too</p>
    </div>
);

//you can add a fragment 
const element4 = (
    <>
    <p className='class1'>a paragraph</p>
    <p className='class2'>another paragraph</p>
    </>
);

const b = 10;
let text = "Goodbye";
if (b < 10) {
    text = "hellooo";
}

const element5 = <h1>{text}</h1>;


const a = 10;
const element6 = <h1>{(a) < 10 ? "Helloo:3" : "GoodByee>:D"}</h1>


/*

This:

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>
    }
}

 Is the same as this: 


function Car() {
    return <h2>Hi, I am a Car!</h2>;
}

*/

function Car() {
    return <h2>Hi, I am a Car!</h2>
}

//Component with props

function Car1(props) {
    return <h2>I am a {props.color} Car!</h2>;
}


// you can refer to components inside other components

function Garage () {
    return (
<>
<h1>Who lives in my Garage?</h1>
<Car />
</>
    );
}


class Car3 extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <h2>I am {this.state.color} a Car ;;p </h2>;
    }
}

//use an attribute to pass a color to the car 
// component and use it in render() function

class Car4 extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!!!</h2>
    }
}


//props in constructor

class Car5 extends React.Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return <h2>I am a {this.props.model}!</h2>;
    }
}

//use Car5 component inside Garage2 component

class Garage2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car5 model="corvette"/>
            </div>
        );
    }
}

//creating & using state object 
class Car7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    //changing the state object 
    changeColor = () => {
        this.setState({color: "blue"});
    }

    render() {
        return (
        <div>
            <h1>My {this.state.brand}</h1>
            <p>
                It is a {this.state.color + " "} 
                 {this.state.model + " "}
                 from {this.state.year}.
            </p>
            

            <button type="button"
            onClick={this.changeColor}
            >
                Change Color!
            </button>
        </div>
        );
    }
}

//getDerivedStateFromProps

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }

    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
    }
    render() {
        return (
            <h1>My favorite color is {this.state.favoritecolor}</h1>
        )
    }
}

//componentDidMount

class Header2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
            <h1>My favorite color is {this.state.favoritecolor}</h1>
        );
    }

}

//shouldComponentUpdate
class Header3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        return false;
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
}

//getSnapshotBeforeUpdate and 
// componentDidUpdate have to be used together

class Header4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before the update, the favorite was " +
        prevState.favoritecolor;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}


// componentWillUnmount

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h1>Hello0 World!!</h1>
        );
    }
}

//passing a variable into props

function Car8(props) {
    return <h2>I am a {props.brand.model} </h2>;
}

function Garage3() {
    const carInfo = {   name: "Ford", model: "Mustang" };
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <Car8 brand={ carInfo } />
        </>
    );
}

//PROPS ARE READ-ONLY!

//React events are written in camelCase


function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }

    return (
      <button onClick={shoot}>Take the shot!! xD</button>
    );
  }

  // Passing arguments

  function Football1() {
    const shoot = (a) => {
        alert(a);
    }
    return (
    <button onClick={() => shoot("Goal")}>Take the shot!!!</button>
    );
  }


  // React event handlers object

  function Football2() {
    const shoot = (a, b) => {
        alert(b.type);
    }
        /*

        'b' represents React event that triggered the 
        function, in this case the 'click' event

        */

        return (
            <button onClick={(event) => shoot("Goal", event)}>take the shot!</button>
        );
    }


    // React Conditional Rendering

    function MissedGoal() {
        return <h1>MISSED!</h1>;
    }

    function MadeGoal() {
        return <h1>Goaal!</h1>;
    }

    function Goal(props) {
        const isGoal = props.isGoal;
        if(isGoal) {
            return <MadeGoal/>;
        }
        return <MissedGoal/>
    }


    // Logical && Operator

    function Garage4(props) {
        const cars = props.cars;
        return (
            <>
            <h1>Garage</h1>
            {cars.length > 0 &&
            <h2>
                You have {cars.length} cars in your garage.
            </h2>
            }
            </>
        );
    }

    const cars = ['Ford', 'BMW', 'Audi'];


    // Ternary Operator

    function Goal1(props) {
        const isGoal = props.isGoal;

        return (
            <>
            {   isGoal ? <MadeGoal/> : <MissedGoal/>    }
            </>
        );
    }

    // React Lists

    // Javascript map() array us generally preferred method
    function Car9(props) {
        return <li>I am a { props.brand }</li>;
    }

    function Garage5() {
        const cars = ['Ford', 'BMW', 'Audi'];
        return (
            <>
                <h1>Who lives in my garage?</h1>
                <ul>
                    {cars.map((car) => <Car9 brand={car} />)}
                </ul>
            </>
        );
    }

    // Keys: unique ID assigned to each item.
    // as a last resort you can use array index as a key

    function Car10(props) {
        return <li>I am a { props.brand }</li>;
    }

    function Garage6() {
        const cars = [
            {id: 1, brand: 'Ford'},
            {id: 2, brand: 'BMW'},
            {id: 3, brand: 'Audi'}
        ];
        return (
            <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car10 key={car.id} brand={car.brand} />)}
            </ul>
            </>
        );
    }

    // React Forms

    function MyForm() {
        return (
            <form>
                <label>Enter your name:
                    <input type="text"  />
                </label>
            </form>
        )
    }


    // Handling Forms: how you handle the data when
    // it changes value or gets submitted

    // Use the useState Hook to manage the input

    function MyForm2() {
        const [name, setName] = useState("");

        return (
            <>
            <form>
                <label>
                    Enter your name: 
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
            </form>

            <h1>Name: {name}</h1>
          </>
        )
    }

    //Submitting Forms 

    function MyForm3() {
        const [name, setName] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault();
            alert(`The name you entered was: ${name}`)
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        )
    }


    // Multiple Input Fields

    function MyForm4() {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(inputs);
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Enter your age:
                    <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                    />
                </label>
                <input type="submit" />

                <h3>name {inputs.username}</h3>
                <h3>age {inputs.age}</h3>
            </form>
        )
    }

    // Textarea: in React the value of textarea
    //  is placed in a value attribute

    function MyForm5() {
        const [textarea, setTextarea] = useState(
            "The content of a textarea goes in the value attribute"
        );

        const handleChange = (event) => {
            setTextarea(event.target.value)
        }

        return (
            <form>
                <textarea value={textarea} onChange={handleChange} />
            </form>
        )
    }
    

    // Select: in React the selected value is 
    // defined with a value attribute on the select tag

    function MyForm6() {
        const [myCar, setMyCar] = useState("Volvo");

        const handleChange = (event) => {
            setMyCar(event.target.value)
        }

        return (
            <form>
                <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
                </select>
            </form>
        )
    }

    // React Router
    // Create React App doesn't include page routing

    // Add React Router:
    // npm i -D react-router-dom

    // for upgrade:
    // npm i -D react-router-dom@latest


    // Folder Structure
    /*
    
        src/pages:
        - Layout.js
        - Home.js
        - Blogs.js
        - Contact.js
        - NoPage.js
    
    */
    

        // Use React Router to route pages based on URL:

        export default function App() {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            );
        }


        // React Memo
// use memo to skip rendering a component if its props
//have not changed

//example: 

/*

            import { memo } from "react";

            ********************************

            ~ Todos Component Code ~

            ********************************

            export default memo(Todos);


*/


//React Inline Styling

// JavaScript Object
// You can also create an object with styling information 
const Header5 = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
        <>
            <h1 style={myStyle}>Hello Style!</h1>
            <h2 style={{color: "gray"}}>// camelCased Property Names</h2>
            <p style={{backgroundColor: "lightblue"}}>Add a little style</p>
        </>
    )
}



// Styling React using SASS 
// install SASS by running this command

// npm i sass


// React Hooks
// You must import Hooks from react

function FavoriteColor() {
    const [color, setColor] = useState("red");
    
    return (
        <>
            <h1>My favorite color is {color}</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue
            </button>

            <button 
            type="button"
            onClick={() => setColor("red")}
            >Red
            </button>

            <button
            type="button"
            onClick={() => setColor("pink")}
            >Pink
            </button>

            <button
            type="button"
            onClick={() => setColor("green")}
            >Green
            </button>
        </>
    );
}

const container = document.getElementById('root');
// changed this:
// const root = ReactDOM.createRoot(document.getElementById('root'));

// to this:
const root = ReactDOM.createRoot(container);


root.render(<Goal isGoal={false} />);
root.render(<App />);
root.render(<Header5 />);
root.render(<Car2 />);
root.render(<FavoriteColor />);
