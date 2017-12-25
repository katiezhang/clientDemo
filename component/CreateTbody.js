import React from 'react';
let userData = require('./../data/Users.json');
import {Button} from 'react-bootstrap';
import ModalBox from './ModalBox'

export default class CreateTr extends React.Component {
    render() {
        return (
            <tbody>
                {userData.map((userData, index) =>
                    <tr key={userData.id}>
                        <td>{userData.id}</td>
                        <td>{userData.name}</td>
                        <td>{userData.token}</td>
                        <td>{userData.password}</td>
                        <td>{userData.description}</td>
                        <td><ModalBox name='edit'/></td>
                        <td><ModalBox name='delete'/></td>
                    </tr>
                )}
            </tbody>
        )
    }
}