import React, { useEffect, useState } from "react";

const Subcategories = ({subcategories = [], onPickedSubcategory = () => {}}) => {

    return (
        <div id="body">
            <p id="title">Select a subcategory</p>
            
            <div id="select">
                {subcategories.length ? <select onChange={val =>  onPickedSubcategory(val.target.value)}>
                    <option value={-1} >Pick a subcategory</option>
                    {
                        subcategories.map(el => <option value={el.id} >{el.name}</option>)
                    }
                </select> : 'No subcategories available'}
            </div>
        </div>
    )
}

export default Subcategories;