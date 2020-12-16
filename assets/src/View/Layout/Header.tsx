import * as React from "react";
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    disabled: {
        cursor: 'default',
        pointerEvents: 'none',
        color: 'grey'
    }
});

/**
 * @const Header
 * @constructor
 */
const Header = () => {
    const classes = useStyles();
    return (
        <header className='padding-15 flex justify-center'>
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem className={classes.disabled} onClick={() => {
            }}>Account</MenuItem>
            <MenuItem className={classes.disabled} onClick={() => {
            }}>News</MenuItem>
            <MenuItem className={classes.disabled} onClick={() => {
            }}>Contacts</MenuItem>
        </header>
    )
}

export default Header
