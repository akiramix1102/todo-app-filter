import React,{useState} from 'react';
import FilterItem from './FilterItem';

function Filter({handleFilter}) {
    const [filter, setFilter] = useState(['all','active','completed'])
    return (
        <>
        <span>Show</span>
        {
            filter.map((item,index)=>{
                return(
                    <FilterItem key={index} value={item} handleFilte={handleFilter}/>
                )
            })
        }
        </>
    );
}

export default Filter;