import React from 'react';

function Filter ({ sort, filter, setSort, setFilter }) {

    function handleGreaseFilter(e) {
        setFilter(e.target.value)
    }

    function handleSortBy(e) {
        setSort(e.target.value)
    }
   
    return (
        <div>
            <select name="filter" className='filterWrapper' onChange={handleGreaseFilter}>
                <option value={false}>Greased?</option>
                <option value={true}>Greased!!</option>
            </select>
            <label for="sort"> Sort by...</label>
            <select name="sort" className='filterWrapper' onChange={handleSortBy}> 
                <option value='all'>All</option>
                <option value='weight'>Weight</option>
                <option value='name'>Name</option>
            </select>
        </div>
    
    )

}

export default Filter;