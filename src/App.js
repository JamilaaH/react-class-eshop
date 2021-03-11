import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './components/Article.js';
import Panier from './components/Panier.js';
import coca from './img/coca.jpg'
import eau from './img/eau.jpg'
import icetea from './img/icetea.jpg'



class App extends React.Component {
  state = {
      argent : 20, 
      panier :[], 
      article : [    
        {nom: "Coca", prix: 2, stock: 5, img: coca},
        {nom: "Eau", prix: 1.50, stock: 5, img: eau},
        {nom: "Ice Tea", prix: 2, stock: 5, img: icetea}
      ]
    }

  achat = (a) => {
    let {article, panier, argent}  = this.state
    argent = argent - article[a].prix
    article[a].stock--
    panier.push([article[a]])
    this.setState({
      article, panier, argent
    })

  }


  render() {
    let tab = this.state.article 
    
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Bonjour et bienvenue</h1>
              <p>Voici votre portefeuille : {this.state.argent} euros </p>
            </div>
            {tab.map( (art, i) => {
              return(
                <Article key={i} titre = {art.nom} prix = {art.prix} stock = {art.stock} image = {art.img} clique = {()=> this.achat(i)} monnaie = {this.state.argent} />
              )
            })}

            { this.state.panier.map ((el,j) => {
              return (
                <Panier key = {j} article = {el} />
              )
            } )}
          </div>
        </div>
      </div>
    )}
}

export default App;