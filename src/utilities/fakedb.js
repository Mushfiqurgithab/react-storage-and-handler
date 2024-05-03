// use local storage to manage cart data : like Youtube way

const addToDb = id =>{
    let shoppingCart = {};

    // get the shopping shopping cart from local storage 
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }

    // add quantity
    const quantity =  shoppingCart[id];
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
    
    }else{
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {addToDb, removeFromDb, deleteShoppingCart}



//1st time
// const addToDb = id =>{
//     const quantity =  localStorage.getItem(id);
//     if(quantity){
//         console.log('Already exists');
//         const newQuantity = parseInt(quantity)+ 1;
//         localStorage.setItem(id , newQuantity);
//     }else{
//         console.log('new Item');
//         localStorage.setItem(id, 1);
//     }
// }


//2nd try
// const addToDb = id =>{
//     let shoppingCart = {};

//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

//     const quantity =  shoppingCart[id];
//     if(quantity){
//         const newQuantity = parseInt(quantity)+ 1;
//         shoppingCart[id] = newQuantity;
//         // localStorage.setItem(id , newQuantity);
//     }else{
//         shoppingCart[id] = 1;
//         // localStorage.setItem(id, 1);
//     }
    
// }