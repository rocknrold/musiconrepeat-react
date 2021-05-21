import {InputAdornment, TextField} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const SearchBar = ({handleChange}) => {
    return (
        <TextField
        id="search-field"
        placeholder="Look for your favorite music..."
        label="Search"
        fullWidth
        margin="normal"
        type="search" 
        variant="outlined"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>youtube_searched_for</Icon>
            </InputAdornment>
          ),
        }}
      />
    );
}
 
export default SearchBar;