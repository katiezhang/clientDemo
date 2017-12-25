import React from 'react';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap'

export default class Header extends React.Component{
    render(){
        return(
            <div id='header'>
                <form action="">
                    <FormControl id='header-search' type="text" placeholder='search'/>
                    <Button className='btn btn-header-search'>search</Button>
                </form>
                <Button className='btn btn-header-add' bsStyle="default" bsSize="sm">add</Button>
            </div>
        )
    }
}