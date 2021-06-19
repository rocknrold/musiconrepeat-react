import {Typography} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const Header = () => {
    return (
        <div className="header-player">
            <Typography variant="h4" align="center" gutterBottom >
                <b>WEARyGASM</b>
                <Icon style={{ fontSize: 30 }}>headset</Icon>
            </Typography>
            <Typography variant="caption" display="block" gutterBottom align="center">
                <p style={{color:'#808080'}}>Listen to your favorite youtube music. Rock!</p>
            </Typography>
        </div>
    );
}
 
export default Header;
