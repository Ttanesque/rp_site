const React = require('react');

export default class PlayerList extends React.Component {
    render() {
        const players = this.props.players.map(player =>
            <Player key={player._links.self.href} player={player} />
        );
        return (
            <table>
                <tbody>
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                    </tr>
                    {players}
                </tbody>
            </table>
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