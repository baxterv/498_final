
// variable mess
var ingredients = 
  [flour, granSugar, brownSugar, butter, vanilla, eggs, salt, chocChips]
var flour = ingredients[0];
var granSugar = ingredients[1];
var brownSugar = ingredients[2];
var butter = ingredients[3];
var vanilla = ingredients[4];
var salt = ingredients[5];
var eggs = ingredients[6];
var chocChips = ingredients[7];
var calories = 100
var protein = 2
var sugar = 6
var fat = 4


var nutrition = [calories, protein, sugar, fat];
var nutrients = [1, 2, 3, 4]
var data;
// d3.csv("nutrition.csv", function(error, nutrition) {
//   if(error) return console.warn(error);
//     nutrition.forEach(function(d) {

//     });
//     data = nutrition;
//     console.log(data);
//     console.log(data.length);
// });

// accessor functions 
var barLabel = function(d) { return d['Sugar', 'Fat', 'Carbs', 'Protein']; };
var barValue = function(d) { return parseFloat(d['Calories']); };

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.csv("nutrition.csv", type, function(error, data) {
//   x.domain(data.map(function(d) { return d.Ingredient; }));
//   y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(nutrients); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(nutrition); })
      //.attr("height", function(d) { return height; });
       .attr("height", function(d) { return height - y(d.frequency); });

});

function type(d) {
  d.frequency = +d.frequency;
  return d;
}

function filterType(mytype, replacing){
  newIngredient = mytype;
  for x in currIngredients {
    if x = replacing {
      x = mytype;
    }
  }
  var toVisualize = dataset.filter(function(d,i) {
  return d["Restaurant"] == currRestaurant;

    }
  });
  redrawVis(toVisualize);
}






