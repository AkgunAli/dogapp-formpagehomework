import React from 'react';
import FavoriteActions from "./FavoriteActions";
import propTypes from "prop-types";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link} from "react-router-dom";
import navs from "../dogsdata";
import FilteredDogs from '../containers/FilteredDogs';
import {connect} from "react-redux";





const Dog = ({id, name, toggle, getStatus,buttonestatus}) => {





    return <li key={id} style={{
        margin: "15px"
    }}>
                            <span style={{
                                display: "inline-block",
                                marginRight: "20px"
                            }}>
                              
                              
                  



                                <NavLink>
                                <Link to={`/detail/${id}`} >
                                
                               <h4>  {name}</h4> <small> Detaylar için tıklayınız </small>
                                </Link>
                            </NavLink>
                         
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} buttonestatus={buttonestatus } />
                
    </li>
      
};


Dog.propTypes = {
    name: propTypes.string.isRequired
};

Dog.defaultProps = {
  name: "Dog name Bulunamadı"
};



export default Dog

