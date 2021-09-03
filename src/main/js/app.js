const React = require('react');
const ReactDOM = require('react-dom');
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {Container} from "react-bootstrap"
// request
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const client = rest.wrap(mime);
//components
import PlayerList from "./components/player"
import Property from "./components/property";
import Header from "./components/header";
import News from "./components/news";
import Home from "./components/home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { players: [] };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/players' }).then(response => {
            this.setState({ players: response.entity._embedded.players });
        });
    }

    render() {
        return (
            <div id="body">
                <Header />
                <main><Container>
                    <Switch>
                        <Route path="/player">
                            <PlayerList players={this.state.players} />
                        </Route>
                        <Route path="/actualite">
                            <News />
                        </Route>
                        <Route path="/help">
                            <Property />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Container></main>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('react')
)