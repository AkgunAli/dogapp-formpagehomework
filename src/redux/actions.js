import {ADD_FAVORITE_DOGS,DELETE_FAVORITE_DOGS,GET_FAVORITE_DOGS,SHOW_NOTIFICATION,HIDE_NOTIFICATION,LOAD_FAVORITE_DOGS} from "./types";
import axios from "axios";
const apiHost = "https://5ea568b02d86f00016b45c16.mockapi.io";

export const addFavoriteDogs = (apiHost,id) => {

    axios.post(`${apiHost}/favorites`, { id }).then((result) => {

        return (dispatch) => {
            dispatch({
                type: ADD_FAVORITE_DOGS,
                payload: result.data
            })
        }
        
       
    
    })} ;

export const deleteFavoriteDogs = (apiHost,id) => {

    axios.delete(`${apiHost}/favorites`, { id }).then((result) => {

        return (dispatch) => {
            dispatch({
                type: DELETE_FAVORITE_DOGS,
                payload: result.data
            })
        }
        
       
    
    })} ;
    

export const getFavoriteDogs = (apiHost) => {
    axios.get(`${apiHost}/favorites`).then((result) => {

    return (dispatch) => {
        dispatch({
            type: GET_FAVORITE_DOGS,
            payload: result.data
        })
    } 

})} ;



export const loadingFavoriteDogs = () => {

    return (dispatch) => {
        dispatch({
            type: LOAD_FAVORITE_DOGS,
        });



    }

};










export const showNotification = (content) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: content
        });
        setTimeout(() => {
            dispatch(hideNotification());
        },2000)
    }

};

export const hideNotification = () => {
    return {
        type: HIDE_NOTIFICATION
    }
};