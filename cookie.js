var calories;
//calories, carbs, fat, sugar, protein
var nutritionFacts;
var currIngredients = ["butter"];
var servings = 24;
var dataset;

// copied code

d3.csv("cookie.csv", function(error, cookie) {
  if(error) return console.warn(error);
  cookie.forEach(function(d) {
  });
  dataset = cookie;
  //drawvis(cookie);
});

//BAR CHART CODE
// var margin = {top: 20, right: 20, bottom: 30, left: 40},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// var x = d3.scale.ordinal()
//     .rangeRoundBands([0, width], .1);

// var y = d3.scale.linear()
//     .domain([0, 100])
//     .range([height, 0]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     //.ticks(10, "%");

// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Frequency");
// function drawVis(dataset) {
//   svg.selectAll(".bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.letter); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.frequency); })
//       .attr("height", function(d) { return height - y(d.frequency); });

// }
//   svg.selectAll(".bar")
//       .data(data)
//     .enter().append("rect")
//       .attr("class", "bar")
//       .attr("x", function(d) { return x(d.letter); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.frequency); })
//       .attr("height", function(d) { return height - y(d.frequency); });

// //});

// function type(d) {
//   d.frequency = +d.frequency;
//   return d;
// }

// END copied code

function filterType(mytype, index) {
  newIngredient = mytype;
  currIngredients[index] = mytype;
  console.log(currIngredients);
  console.log(function(mytype) { return mytype.calories;});
  
}





// on dropdown interaction, recalculate ingredients and
// nutrition facts
// function onDropDown {

// get all dropdown current values
// re-write currIngredients
// set nutitionFacts = 0
// for each ingredient in currIngredients
// 	nutritionFacts[0] += ingredient.protein
// 	nutritionFacts[1] += ingredient.fat
// 	nutritionFacts[2] += ingredient.sugar
// 	nutritionFacts[3] += ingredient.carbs

// redraw bars(nutiritionFacts/servings)
// }