import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch]=useState("")
  const [data, setData]=useState([])
  
  
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(setData)
  },[]);

  function handleDeleteListing(id){
    const newListings = data.filter((listing) => listing.id !== id);
    setData(newListings);  
    
  }

  const displayedListings = data.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

     

  return (
    <div className="app">
      <Header onSearchChange={setSearch}/>
      <ListingsContainer deleteListing={handleDeleteListing} data={displayedListings} />
    </div>
  );
}

export default App;