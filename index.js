import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import CreateTable from './component/CreateTable'
// import { Button, Table } from 'react-bootstrap';
// import { setInterval, Date } from 'core-js/library/web/timers';
// import { element } from './C:/Users/katiezhang/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/prop-types';

class CreatePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <CreateTable/>
            </div>
        )
    }
}

ReactDOM.render(
    <CreatePage />, document.getElementById('app')
)


