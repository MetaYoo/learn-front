import React from 'react';

import HelloMessage from './components/HelloMessage'
// function App() {
//   return (
//     <div className="App">
//       Hello world
//     </div>
//   );
// }
//
// export default App;


class App extends React.Component {
    obj = {
        name: 'aracwong',
        age: 29
    };

    constructor() {
        super();
    }


    render() {
        return (
            <div className="App">
                Hello world
                <HelloMessage {...this.obj}/>
            </div>
        );
    }
}

export default App;