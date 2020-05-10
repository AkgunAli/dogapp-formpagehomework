import React from 'react';
import dogs from "../dogsdata";
import {Button} from "reactstrap";
import FavoriteActions from "../components/FavoriteActions";
import Dog from "../components/Dog";
import axios from "axios";
import { Spinner } from 'reactstrap';
import {connect} from "react-redux";
import {

    addFavoriteDogs,
    deleteFavoriteDogs,
    getFavoriteDogs,
    loadingFavoriteDogs

} from "../redux/actions";


const apiHost = "https://5ea568b02d86f00016b45c16.mockapi.io";

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            favorites: [],
            buttonestatus : false,
            loadingFavorites: false
        }
    }
    componentDidMount() {
        // localstoragedan getirme
/*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/
        loadingFavoriteDogs();
        getFavoriteDogs({apiHost});

    }

    toggle = (dogId)=>{


        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if(foundDog){
                deleteFavoriteDogs({apiHost},foundDog.id);

        }else{
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
                addFavoriteDogs({apiHost},{dogId})
        }
    }

    getStatus= (dogId) =>{
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render(){
        if(this.state.loadingFavorites){
            return <div>
                <h1 style={{  textAlign:"center"}}>
                    ....Sayfa Yukleniyor..... <br/>
                      <Spinner color="info" />
                </h1>
                

            </div>
        }
        return (
            <div>
                <ul>
                    {
                        dogs.map((dog) => {
                            return <Dog 
                            toggle={this.toggle} 
                            buttonestatus={this.state.buttonestatus} 
                            id={dog.id} 
                            name={dog.name}
                             getStatus={this.getStatus} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dogsfavorite: state.dogsReducer,
        buttondurumları : state.dogsReducer.buttonestatus,
        buttondurumları : state.dogsReducer.loadingFavorites,


    }
}

const mapDispatchToProps = {

    addFavoriteDogs,
    deleteFavoriteDogs,
    getFavoriteDogs,
    loadingFavoriteDogs

};


export default connect(mapStateToProps,mapDispatchToProps)(Homepage);