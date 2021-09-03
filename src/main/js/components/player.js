const React = require('react');
import { Table } from 'react-bootstrap';


export default class PlayerList extends React.Component {
    render() {
        const players = this.props.players.map(player =>
            <Player key={player._links.self.href} player={player} />
        );
        return (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>first name</th>
                            <th>last name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players}
                    </tbody>
                </Table>
        );
    }
}

class Player extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.player.firstName}</td>
                <td>{this.props.player.lastName}</td>
            </tr>
        );
    }
}