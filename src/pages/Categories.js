import React, { useEffect, useState } from "react";

const Categories = ({categories = [], onPickedCategory = () => {}}) => {

    return (
        <div id="body">
            <p id="title">Select a category</p>
            
            <div id="select">
                <select onChange={val =>  onPickedCategory(val.target.value)}>
                    <option value={-1} >Pick a Category</option>
                    {
                        categories.map(el => <option value={el.id} >{el.name}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default Categories;