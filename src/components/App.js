import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
    // images un tableau vide et pourvoir utiliser le map
    state = { images: [] }

    onSearchSubmit = async (term) => {
        // Connexion à l'api
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        })
        
        this.setState({ images: response.data.results })
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"25px"}}>
                <SearchBar 
                    runOnSubmit={this.onSearchSubmit}
                />
                <ImageList 
                    images={this.state.images}
                />
            </div>
        )
    }
}

export default App