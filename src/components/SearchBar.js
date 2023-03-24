import React, { useState } from "react";

import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}) {
    const [filiteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.groccery.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord == "") {
            setFilteredData([]);
        }

        else {
            setFilteredData(newFilter);
        }
        
    };
    return (
        <div className ="search relative h-screen">
            <div className="searchInputs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                <input type="text" class = "w-full border-12 border-black rounded-full py-2 px-4 outline-black text-black dark:text-black-dark" placeHolder={placeholder} onChange={handleFilter} maxLength={15}/>
                <div className="searchIcon absolute top-1/2 transform -translate-y-1/2 right-4">
                    <SearchIcon />
                </div>
            </div>
            {filiteredData.length != 0 && (
            <div className = "dataResult absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5">
                {filiteredData.slice(0, 5).map((value, key) => {
                    return <div>{value.groccery} </div>;
                })}
            </div>
            )}
        </div>
    );
}

export default SearchBar;