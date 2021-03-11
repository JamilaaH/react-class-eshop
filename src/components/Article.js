import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

class Article extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-4">
                    <Card >
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                    <Card.Title> {this.props.titre} </Card.Title>
                        <Card.Text>
                        <span>Prix : {this.props.prix}€</span> <br/>
                        <span> Stock :  {this.props.stock}</span>
                        </Card.Text>
                        {this.props.monnaie > 0 &&
                            <Button variant="primary" onClick={this.props.clique}>Acheter</Button>
                        }
                        {this.props.monnaie <= 0 &&
                            <p>vous n'avez plus d'argent</p>
                        }

                    </Card.Body>
                    </Card>
                </div>
            </Fragment>

        );
    }
}

export default Article;