import {ADD_FAVORITE_DOGS,GET_FAVORITE_DOGS,DELETE_FAVORITE_DOGS,SHOW_NOTIFICATION,HIDE_NOTIFICATION,LOAD_FAVORITE_DOGS} from "./types";

const initialState = {
    favorites: [],
    loadingFavorites: false
  };

export const dogsReducer = (state= initialState, action)  => {
    switch (action.type) {
        case ADD_FAVORITE_DOGS:
          {
            return {...state, favorites: [...state,action.payload ],loadingFavorites:false}
          }
            case LOAD_FAVORITE_DOGS:
            {
                return {...state, loadingFavorites: true}
            }
            case DELETE_FAVORITE_DOGS:
                {
                    return state.filter((favorites) => {
                        
                        return favorites !== action.payload;
                     });
                }
             case GET_FAVORITE_DOGS:
            {
                return {...state, loadingFavorites: false}
            }
                



        default:
            return state;
    }
};

