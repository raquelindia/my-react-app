import React from 'react';
import ReactDOM from 'react-dom/client';
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



const container = document.getElementById('root');
// changed this:
// const root = ReactDOM.createRoot(document.getElementById('root'));

// to this:
const root = ReactDOM.createRoot(container);

root.render(myFirstElement);
root.render(myList);
root.render(element1);
root.render(element2);
root.render(element3);
root.render(element4);
root.render(element5);
root.render(element6);
root.render(<Car />);
root.render(<Car1 color="red"/>);
root.render(<Garage />);
root.render(<Car2 />);
root.render(<Car3 />);
root.render(<Car4 color="red" />);
root.render(<Car5 model="Mustang" />);
root.render(<Garage2  />);
root.render(<Car6 />);
root.render(<Car7 />);
root.render(<Header favcol="yellow" />);
root.render(<Header2 />);
root.render(<Header3 />);
root.render(<Header4 />);
root.render(<Container />);
root.render(<Garage3 />);