import React from 'react';
import ReactDom from 'react-dom';


const App = () => {
    return (
        <div>
            <h1>Hello  there</h1>
        </div>
    );
}


Meteor.startup(() => {
    
    console.log(document.querySelector('.container'));
    ReactDom.render(<App />, document.querySelector('.container'));
})