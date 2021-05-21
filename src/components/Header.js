import {Typography} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const Header = () => {
    return (
        <div className="header-player">
            <Typography variant="h4" align="center" gutterBottom >
                <b>REACT PLAYER</b>
                <Icon style={{ fontSize: 30 }}>play_circle_filled</Icon>
            </Typography>
        </div>
    );
}
 
export default Header;