const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

//array reducer
// const numbers = [20, 24, 235, 65, 89];
// const sumReducer = (previous, current) => previous + current;
// const total  = numbers.reduce( sumReducer, 0)

//2nd way
// const items = [
//     {id: 1, name: 'alta', price: 100},
//     {id: 2, name: 'blta', price: 200},
//     {id: 3, name: 'clta', price: 300},
//     {id: 4, name: 'dlta', price: 400},
//     {id: 5, name: 'elta', price: 500}
// ]

// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce( itemSumReducer, 0);


//3rd way or Function way
const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

// export default add;
// export {add, multiply, getTotalPrice as getTotal};
export {
    add, 
    multiply, 
    getTotalPrice as getTotal
};