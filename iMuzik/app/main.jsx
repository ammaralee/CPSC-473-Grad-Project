import React from 'react';
import ReactDOM from 'react-dom';
import RecentTracks from './components/RecentTracks/component.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (

            <div>
                <RecentTracks/>
            </div>
        );
    }
}


function run() {
    ReactDOM.render(
        <App/>, document.getElementById('root'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
