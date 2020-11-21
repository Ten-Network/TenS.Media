import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {Avatar,IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Header() {

    return <div className="header">

        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt=""/>
            <div className="header__input">
                <SearchIcon /><input placeholder="Search Facebook" type="text" />
            </div>
        </div>

        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeIcon fontsize="large"/>
            </div>
            <div className="header__option">
                <SubscriptionsOutlinedIcon fontsize="large"/>
            </div>
            <div className="header__option">
                <StorefrontOutlinedIcon fontsize="large"/>
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontsize="large"/>
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>Akash Fredric</h4>
            </div>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
            
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationActiveIcon/>
            </IconButton>
            <IconButton>
                <AddIcon/>
            </IconButton>
            

        </div>
    </div>

        


    
}

export default Header;
