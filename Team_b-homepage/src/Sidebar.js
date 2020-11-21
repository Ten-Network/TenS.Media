import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import {ExpandMoreOutlined} from "@material-ui/icons/";


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg" title="Akash Fredric"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
        </div>
    )
}

export default Sidebar;
