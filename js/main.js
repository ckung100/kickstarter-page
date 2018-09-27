var sugar = {
	name: "Sugarcubs Official Goods",
	goal: 26697,
	description: "Quan has created over 500 original characters, used in various platforms both domestic and foreign, and our stickers have been downloaded by hundreds of millions of people. We are expanding our character business to include merchandise and video. Finally, we made our plush doll~! Please come see us!",
};

console.log(sugar);

sugar.image = "sugarcubs.jpg";

var sugarName, goal, description;

var sugarName = document.getElementById('sugar');
sugarName.textContent = sugar.name;
var goal = document.getElementById("goal");
goal.textContent = '$' + sugar.goal;
var description = document.getElementById("description");
description.textContent = sugar.description;




const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Oct 8, 2018 01:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

}, second)


var pledgeLevels = [
    {
      name: '[Primary] BASIC Official SET',
      price: 22,
      features: 'REAL sticker, 2x Pin badge, 3x Postcard',
      available: 'Available'
    },
    {
      name: '[Secondary] BASIC Official SET',
      price: 22,
      features: 'REAL sticker, 2x Pin badge, 3x Postcard',
      available: 'Available'
    },
    {
      name: '[Secondary] Official Plushies',
      price: 71,
      features: '2x Plushies',
      available: 'Available'
    },
    {
      name: '[Secondary] Full Official SET',
      price: 89,
      features: 'REAL sticker, 2x Pin badge, 3x Postcard, 2x Plushies',
      available: 'Available'
    },
    {
      name: '[Primary] Official Plushies',
      price: 71,
      features: '2x Plushies',
      available: 'Sold Out!'
    },
    {
      name: '[Primary] Full Official SET',
      price: 89,
      features: 'REAL sticker, 2x Pin badge, 3x Postcard, 2x Plushies',
      available: 'Sold Out!'
    },
    {
      name: '[EVENT] Limited Reward',
      price: 223,
      features: 'Commissioned illustration with frame, REAL sticker, 2x Pin badge, 3x Postcard, 2x Plushies',
      available: 'Sold Out!'
    }
];

var pledgeLevelName, price, features, available;
pledgeLevelName = document.getElementById('pledgeLevelName'); 
price = document.getElementById('price');
features = document.getElementById('features');
available = document.getElementById('available');

name.textContent = pledgeLevels.name;
price.textContent = '$' + pledgeLevels.price; 
features.textContent = pledgeLevels.features;
available.textContent = pledgeLevels.available;

var container = document.getElementById( 'pledge-container' );

for ( i = 0; i < pledgeLevels.length; i++ ) {

console.log( pledgeLevels[i] );
container.innerHTML +=  '<h1>' + pledgeLevels[i].name + '</h1>';
container.innerHTML += '<h2>' + 'Price: ' + '$' + pledgeLevels[i].price + '</h2>';
container.innerHTML += '<h3>' + 'Features: ' + pledgeLevels[i].features + '</h3>';
container.innerHTML += '<h4>' + 'Availability: ' + pledgeLevels[i].available + '</h4>' + '<br>';

}



