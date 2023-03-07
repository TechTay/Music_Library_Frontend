import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState([''])

    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = {
            search: search
        };

    return (
        <form onSubmit={handleSubmit} className='search'>
    <input type='text' className='SearchBar' value={newSearch} onChange={(event) => setSearch(event.target.value)}/>
    </form>
        )

    }}

    export default SearchBar