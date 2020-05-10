import React from 'react';
import {connect} from "react-redux";
import {Button} from "reactstrap";
import {addFavoriteDogs, deleteFavoriteDogs} from "../redux/actions";

const FavoriteActions = (props,{addFavoriteDogs}) => {


   



    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button color="danger"  onClick={() => {deleteFavoriteDogs(props.id)}}>Favorilerden Cikar</Button>
                    :<Button color="primary"  onClick={() => {addFavoriteDogs(props.id)}}>Favoriye Ekle</Button>
            }
        </div>
    );
};

const mapDispatchToProps = {
    addFavoriteDogs ,
    deleteFavoriteDogs
};






export default connect(null, mapDispatchToProps)(FavoriteActions);