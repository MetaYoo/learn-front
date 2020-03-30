import React from 'react';
import './App.css';
import Child from "./Child";

class App extends React.Component {
    componentDidMount() {
        console.log(this._child);
    }

    render() {
        return (
            <div className="App">
                <Child ref={(child) => this._child = child}/>
            </div>
        );
    }
}

export default App;
