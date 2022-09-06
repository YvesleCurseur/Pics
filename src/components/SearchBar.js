// j'utilise le class base component ici pour utiliser les states gérer les valeurs entrées par l'utilisateur 
// onChange l'utilisateur change le text dans le champs
// onSubmit quand "" applique le form
// onClick quand "" clique sur quelque chose

import React from "react";

class SearchBar extends React.Component {
    state = {term: ''};

    // Fonction flêchée pour corriger l'erreur de cannot read the proprety
    onFormSubmit = (event) => {
        //Pour éviter que le form ne s'applique tout seul
        event.preventDefault();

        this.props.runOnSubmit(this.state.term);
    }

    render () {
        return (
        <div className="ui segment">
            <form onSubmit= {this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                        <input 
                            type="text"
                            // renvoie ce qui ce trouve dans le state term 
                            value={this.state.term}
                            // chaque fois qu'il y a un changement on prend la value pour update le state (Type de fonction flêchée)
                            onChange={e => this.setState({ term: e.target.value})}
                        />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;