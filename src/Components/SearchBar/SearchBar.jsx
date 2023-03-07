import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState([''])

    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = {
            search: search
        };
    }
    return (
        <form onSubmit={handleSubmit} className='search'>
            <button type='submit'className='btn btn-primary' style={{'margin-top': '0.1em', 'margin-right': '0.7em'}}>Search Music</button>
    <input type='text' className='SearchBar' value={search} onChange={(event) => setSearch(event.target.value)}/>
    </form>
        )

    }

    export default SearchBar