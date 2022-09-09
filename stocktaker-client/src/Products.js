import React, {useEffect,useState}from 'react';
import InventoriesList from './InventoriesList';
import NewInventoryForm from './NewInventoryForm';


function Products() {
  const [inventories,setInventories]=useState([]);
  // console.log(inventories)
  

  useEffect(()=>{
    fetch('http://localhost:9292/products')
    .then(res=>res.json())
    .then(data=>setInventories(data))
  },[]);

  function onAddInventory(newInventory) {
    setInventories([...inventories,newInventory])
    
  }

  function handleDeleteInventory(id) {
    const newInventoryList=inventories.filter((inventory)=>inventory.id!==id)
    setInventories(newInventoryList)
    
    
  }
  return (
    <>
    <NewInventoryForm onAddInventory={onAddInventory} inventories={inventories}/>
    <InventoriesList inventories={inventories} onDeleteInventory={handleDeleteInventory}/>,
     </>
  )
}

export default Products