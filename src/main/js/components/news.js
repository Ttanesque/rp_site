import { Card, Button, Row } from 'react-bootstrap';

const React = require('react');
// request
const rest = require('rest');
const mime = require('rest/interceptor/mime');
const client = rest.wrap(mime);

export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = { news: [] };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/news' }).then(response => {
            this.setState({ news: response.entity._embedded.news });
        });
    }

    render() {
        return (<CardsList news={this.state.news} />)
    }
}

class CardsList extends React.Component {
    render() {
        return (
                <Row>
                    {this.props.news.map((i, idx) => {
                        let img = i.previewImage
                        if (typeof(img) === "undefined" || img === null || img === "")
                            img = "/image/logo.png"
                        return (<Card key={idx} style={{ width: '12rem'}}>
                            <Card.Img variant="top" src={img}/>
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text>{i.htmlText.substring(0, 24)}</Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>)
                    })}
                </Row>
        )
    }
}