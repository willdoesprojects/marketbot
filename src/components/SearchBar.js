import React from 'react';
import '../index.css';
function SearchBar({placeholder, data}) {
    return (
        <div className ="search">
            <div className="searchInputs ">
                <input type="text" placeHolder={placeholder}/>
                <div className="searchIcon"> </div>
            </div>
            <div className = "dataResult"></div>
        </div>
    )
}

export default SearchBar;