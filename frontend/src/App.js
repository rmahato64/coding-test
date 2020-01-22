import React from "react";
import Api from "./Api";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            playerName: '',
            pointEarned: 0,
        };
    }

    componentDidMount() {
        Api.getPlayers()
            .then(players => this.setState({ players }));
        }

    addPlayer = () => {
        if (!this.state.playerName.trim()) return;

         Api.addPlayer(this.state.playerName.trim(), this.state.pointEarned)
             .then(player => {
                 const newPlayers = this.state.players.concat(player);
                 this.setState({ 
                   players: newPlayers,
                   playerName: '',
                   pointEarned: 0
                 });
             }).catch(err => console.log(err));
    };

    handlePlayerNameChange = e => {
        this.setState({ playerName: e.target.value });
    };

    handlePointChange = e => {
        this.setState({ pointEarned: e.target.value });
    };

    sortPlayers = () => {
        const order = this.state.order;
        const sortedPlayers = this.state.players.sort((p1, p2) => p1.point > p2.point ? -1 : 1);

        this.setState({ 
            players: order === 'asc' ? sortedPlayers : sortedPlayers.reverse(),
            order: order === 'asc' ? 'dsc' : 'asc'
        });
    };

    render() {
        return (
            <div className="player-container">
            <h2>SCORE BOARD</h2>
            <table>
                <thead>
                    <tr>
                        <th> NAME </th> 
                        <th className="clickable" onClick={this.sortPlayers}> POINT </th>
                    </tr>
                </thead>
            <tbody>
            {
                this.state.players.map((player, index) => (
                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>{player.point}</td>
                        </tr>
                ))
            }
            <tr key='add-new-row'>
                <td>
                    <input type="text"
                           placeholder="Player name"
                           value={this.state.playerName}
                           onChange={this.handlePlayerNameChange}/>
                </td>
                <td>
                    <input type="number"
                           placeholder="Score"
                           value={this.state.pointEarned}
                           onChange={this.handlePointChange}/>
                </td>
            </tr>
        </tbody>
        </table>
        <button onClick={() => this.addPlayer()}>Add new</button>
        </div>
    );
    }
}

export default App;