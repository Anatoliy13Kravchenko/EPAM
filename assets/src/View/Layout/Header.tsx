import * as React from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-center">
            {/*<Menu open={true}>*/}
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <MenuItem onClick={() =>{}}>Account</MenuItem>
                <MenuItem onClick={() =>{}}>News</MenuItem>
                <MenuItem onClick={() =>{}}>Contacts</MenuItem>
            {/*</Menu>*/}
        </header>
    )
}

export default Header
