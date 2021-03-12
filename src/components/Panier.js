import React, {Fragment } from 'react';
import { Button } from 'react-bootstrap';
import './panier.css'

class Panier extends React.Component {
    render() {
        return (
            <Fragment>
            <div className="col-md-3">
                
                <div className="box border border-bottom-dark ">
                    <img src={this.props.article.img} className ="w-100" alt=""/>
                    <div className="caption">
                        <span> {this.props.article.nom}  </span> <br/>
                        <span> {this.props.article.prix} € </span> 
                    </div>
                    <Button variant="danger" onClick={this.props.revendre}>Supprimer</Button>
                </div>

            </div>                
            </Fragment>
        );
    }
}

export default Panier;