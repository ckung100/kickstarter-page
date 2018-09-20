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