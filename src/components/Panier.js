import React, {Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './panier.css'

class Panier extends React.Component {
    render() {
        console.log(this.props.article[0].nom)
        return (
            <Fragment>
                <div className="container">
                    <div className="box border border-bottom-dark ">
                        <div className="caption">
                            <span> nom : {this.props.article.nom}  </span> 
                        </div>
                        <Button variant="danger" onClick={this.props.clique}>Supprimer</Button>
                    </div>


                        
                </div>

                
            </Fragment>
        );
    }
}

export default Panier;