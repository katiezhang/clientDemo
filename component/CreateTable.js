import React from 'react';
import CreateTbody from './CreateTbody';
import {Table} from 'react-bootstrap'

export default class CreateTable extends React.Component {
    render() {
        return (
            <Table striped condensed hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>token</th>
                        <th>password</th>
                        <th>description</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <CreateTbody />
            </Table>
        )
    }
}
