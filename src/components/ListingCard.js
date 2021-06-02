import { useState } from "react";
import React from "react";

function ListingCard({data, deleteListing}) {
  const {id, description,image,location}=data
  const [favorite, setFavorite]=useState(false)

    

  function handleClick(){
    setFavorite(prevFavorite=>!prevFavorite)
  }

  function handleDeleteClick(){
    const obj={method: "DELETE"}
    fetch(`http://localhost:6001/listings/${id}`,obj);
      
    deleteListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" >
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;