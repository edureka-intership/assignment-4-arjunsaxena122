/* 
Question-1. ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4}, 
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
    
    a. Calculate the Average rating for all the restaurants.
    b. List of all restuarants with average rating greater than 4.
    
    Expected Response for a:

    [{ restaurant: 'KFC', averageRating: 4},
    { restaurant: 'Burger King', averageRating: 4},
    { restaurant: 'Domino', averageRating: 1.5},
    { restaurant: 'Subway', averageRating: 3.5},
    { restaurant: 'Pizza Hut', averageRating: 5}]
    
    Expected Response for b:

    [{ restaurant: 'KFC', averageRating: 4},
    { restaurant: 'Burger King', averageRating: 4},
    { restaurant: 'Pizza Hut', averageRating: 5}]
*/

// -----------------------------SOLUTIONS--------------------------

let ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
];

//-----------------------------SOLUTIONS-A--------------------------------

const uniqueRestaurants = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)));
let arr = [];
uniqueRestaurants.map(restaurantName => {
    const filteredratingData = ratingData.filter(obj => obj.restaurant == restaurantName);
    let outputobj = {
        restaurant: restaurantName,
        averageRating: filteredratingData.reduce((prev,next) => prev + next.rating,0)/ filteredratingData.length
    }
    arr.push(outputobj);
});
console.log(arr);

//----------------------------SOLUTION-B---------------------------------

const secondoutput = arr.filter(item => item.averageRating >= 4);
console.log(secondoutput);