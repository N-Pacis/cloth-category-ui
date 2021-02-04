import React from 'react'
import "./category.css"

export default function Category(props) {
    return (
        <div className="category-div">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title}/>
        </div>
    )
}
