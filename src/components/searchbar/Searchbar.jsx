import React from 'react';
import SearchIcon from '@material-ui/icons/Search'

import './Searchbar.css';

export default function Searchbar() {
  return (
      <div className="searchbar">
          <form className="search">
              <label htmlFor="searchbar"></label>
            <input type="text" placeholder="Search" aria-label="Search posts" value=""/>
            <button type="submit" aria-label="Search">
                <SearchIcon />
            </button>
        </form>
      </div>
  )
}
