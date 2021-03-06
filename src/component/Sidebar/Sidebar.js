import React from 'react';
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from '../../Hooks/StateProvider';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [{ playlists }, ] = useStateValue();
    
    return (
        <div className="sidebar">
            <Link to="/#">
                <img
                    className="sidebar__logo"
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt=""
                />
            </Link>
            <SidebarOptions Icon={HomeIcon} option="Home" />
            <SidebarOptions Icon={SearchIcon} option="Search" />
            <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOptions option={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar;
