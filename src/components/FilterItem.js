import React from 'react';

function FilterItem({value}) {
    const handleFilter=value=>{
        console.log(value);
        
    }
    return (
    <button onClick={()=>handleFilter(value)}>{value}</button>
    );
}

export default FilterItem;