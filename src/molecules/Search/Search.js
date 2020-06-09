import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Zoom from '@material-ui/core/Zoom';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '~/atoms/Typography';
import useSearchStyles from './styles';

const Search = ({ customClass, searchValue, setSearchValue, onChange }) => {
  const classes = useSearchStyles({ searchValue });

  const inputRef = useRef();

  const [isInputVisible, setIsInputVisible] = useState(false);

  return (
    <div className={clsx(classes.container, customClass)}>
      {!isInputVisible ? (
        <div
          className={classes.searchPlaceholder}
          onClick={() => setIsInputVisible(true)}
        >
          <img className={classes.icon} src={'/searchIcon.svg'} alt="Search" />
          <Typography className={classes.name} variant={'h5'} component={'h5'}>
            {'Search Catalog'}
          </Typography>
        </div>
      ) : (
        <Zoom in={isInputVisible}>
          <TextField
            id="input-with-icon-textfield"
            color="primary"
            label="Search"
            autoComplete="off"
            autoFocus
            classes={{ root: classes.searchRoot }}
            value={searchValue}
            onChange={onChange}
            onBlur={() => {
              if (!searchValue.length) {
                setIsInputVisible(false);
              }
            }}
            inputRef={inputRef}
            InputProps={{
              classes: {
                underline: classes.inputUnderline,
                input: classes.searchInput,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <InputAdornment position="end">
                  <CloseIcon
                    onClick={() => {
                      setSearchValue('');
                      inputRef.current.focus();
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Zoom>
      )}
    </div>
  );
};

Search.displayName = 'Search';

export default Search;
