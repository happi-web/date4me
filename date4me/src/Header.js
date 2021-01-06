import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ForumIcon from '@material-ui/icons/Forum';
import MessageIcon from '@material-ui/icons/Message';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backButton}){
    const history = useHistory();
    return(
        //BEM
        <div className = "header">
            {backButton ? (
                <IconButton onClick = {() => history.replace(backButton)}>
                  <ArrowBackIosIcon fontSize = "large" className = "header_icon"/>  
                </IconButton>               
            ):(
                <Link to = "/profile">
                <IconButton>
                <PersonIcon className = "header-icon"fontSize = "large"/>
                </IconButton>
                </Link>  
            )}
            <Link to = "/learn">
            <IconButton>
            <LocalLibraryIcon className = "header-icon" fontSize = "large"/>    
            </IconButton>                
            </Link>

            <Link to = "/">
            <img className = "header-logo"
            src={'logo.png'}
            alt = "Date4Me Logo"/>   
            </Link>

            <Link to = "/forum">
            <IconButton>
            <ForumIcon className = "header-icon" fontSize = "large"/>
            </IconButton>                
            </Link>

            <Link to = "/chat">
            <IconButton>
            <MessageIcon className = "header-icon" fontSize = "large"/>     
            </IconButton>                
            </Link>
        </div>
    )
}
export default Header;