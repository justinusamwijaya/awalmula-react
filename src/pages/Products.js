import React, { useEffect, useState } from "react";

import NoThumbNailImg from '../assets/img/no-thumbnail.jpg';

const Products = ({products = [], onPickedProduct = () => {}}) => {

    return (
        <div id="body">
            <p id="title">Product List</p>
            <div id="product-list">
                {products.map(el => <div style={{position: 'relative', margin: 5, borderRadius: 5, overflow: 'hidden'}}>
                    <div style={{width: 150, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
                        <div className="hoverThumbnail"></div>
                        <img className="img" src={NoThumbNailImg}/>
                    </div>
                    <div style={{
                        position: 'absolute',
                        height: '35%',
                        width: '100%',
                        bottom: 0,
                        left: 0,
                        background: 'black',
                        opacity: .5,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {el.name}
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Products;