import React from "react";
import ListingCard from "./ListingCard";




function ListingsContainer({data,deleteListing}) {

  
  const displayCards = data.map((element)=>{
    return(
      <ListingCard key={element.id} data={element} deleteListing={deleteListing}/>
    );
  })


  return (
    <main>
      <ul className="cards">
        {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;