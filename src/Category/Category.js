import React, {createContext, useContext, useState} from 'react';
import {CategoryData} from '../Dashboard';

const Category = (props) => {
    const cData= useContext(CategoryData);
    const list=['General', 'Entertainment','Sports','Health','Science']
    const handleClick=(e)=>{
        props.handleClick(e.target.name)
    }
    
    return (
        <>
        <div className="spaceHeader">
        {list.map((item)=>(
            <ul className="headerNames">
                <button className={cData===item?"selectedName":"headerList"} 
                name={item} onClick={handleClick}>{item.toUpperCase()}</button>
            </ul>
        ))}
        </div>
        </>
    )
}
export default Category;
