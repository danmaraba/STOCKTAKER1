import React from 'react';
function Inventories({inventory,onDeleteInventory}) {
  const {id,name,price,category}=inventory;
 console.log(inventory)

 function handleDeleteonClick() {
  fetch(`http://localhost:9292/products/${id}`,{
    method:"DELETE",
  })
  .then((response)=>response.json())
  .then(()=>{
    onDeleteInventory(id)})
  
}
  return (
    <div className='inventories'>
      <p>{name}</p>
      <p>{price}</p>
      <p>{category}</p>
      <button className='delete'onClick={handleDeleteonClick}>Delete</button>
        
    </div>
  )
}

export default Inventories