import React, { createContext, useState } from 'react';
import Card from './Card/Card';
import Category from './Category/Category';

const CategoryData= createContext();
function Dashboard(){
    const [category, setCategory]= useState('General');
    const handleClick=(newCategory)=>{
        setCategory(newCategory)
    }
    return(
        <>
        <CategoryData.Provider value={category}>
        <Category handleClick= {handleClick}/>
        <br/>
        <Card />
        </CategoryData.Provider>
        </>
    )
}
export default Dashboard;
export {CategoryData};