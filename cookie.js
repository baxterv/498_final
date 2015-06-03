var calories = 4065;
var protein = 0;
var carbs = 0;
var fat = 0;
var sugar = 0;
// var data = Nutrient,Grams
//           Protein,42.65
//           Fat,82.4
//           Sugar,295.95
//           Carbs,506.6;
//when I console.log this, I just get [NaN, NaN etc]
var nutritionFacts = [calories, protein/servings, carbs/servings, fat/servings, sugar/servings];

var currIngredients = 
  ["butter", "brown sugar", "granulated sugar", "whole egg", 
      "vanilla extract", "cornstarch", "baking soda", "salt", 
          "all-purpose flour", "semi-sweet chocolate chips"];
var servings = 24;
var allfacts;

// copied code
// load nutrition facts
d3.csv("cookie.csv", function(error, cookie) {
  if (error) return console.warn(error);
    cookie.forEach(function(d) {
  });
  allfacts = cookie;
  renderChart();
  drawvis();
});

// make chart
function renderChart() {

var data = d3.csv.parse(d3.select('#csv').text());
var valueLabelWidth = 40; // space reserved for value labels (right)
var barHeight = 20; // height of one bar
var barLabelWidth = 100; // space reserved for bar labels
var barLabelPadding = 5; // padding between bar and bar labels (left)
var gridLabelHeight = 18; // space reserved for gridline labels
var gridChartOffset = 3; // space between start of grid and first bar
var maxBarWidth = 420; // width of the bar with the max value
 
// accessor functions 
var barLabel = function(d) { return d['Nutrient']; };
var barValue = function(d) { return parseFloat(d['Grams']); };
 
// scales
var yScale = d3.scale.ordinal().domain(d3.range(0, data.length)).rangeBands([0, data.length * barHeight]);
var y = function(d, i) { return yScale(i); };
var yText = function(d, i) { return y(d, i) + yScale.rangeBand() / 2; };
//var x = d3.scale.linear().domain([0, d3.max(data, barValue)]).range([0, maxBarWidth]);
var x = d3.scale.linear().domain([0, 500]).range([0, maxBarWidth]);

// svg container element
var chart = d3.select('#chart').append("svg")
  .attr('width', maxBarWidth + barLabelWidth + valueLabelWidth)
  .attr('height', gridLabelHeight + gridChartOffset + 4 * barHeight + 1000);

// grid line labels
var gridContainer = chart.append('g')
  .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')'); 
gridContainer.selectAll("text").data(x.ticks(10)).enter().append("text")
  .attr("x", x)
  .attr("dy", -3)
  .attr("text-anchor", "middle")
  .text(String);
// vertical grid lines
gridContainer.selectAll("line").data(x.ticks(10)).enter().append("line")
  .attr("x1", x)
  .attr("x2", x)
  .attr("y1", 0)
  .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
  .style("stroke", "#ccc");
// bar labels
var labelsContainer = chart.append('g')
  .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
labelsContainer.selectAll('text').data(data).enter().append('text')
  .attr('y', yText)
  .attr('stroke', 'none')
  .attr('fill', 'black')
  .attr("dy", ".35em") // vertical-align: middle
  .attr('text-anchor', 'end')
  .text(barLabel);
// bars
var barsContainer = chart.append('g')
  .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
barsContainer.selectAll("rect").data(data).enter().append("rect")
  .attr('y', y)
  .attr('height', yScale.rangeBand())
  .attr('width', function(d) { return x(barValue(d)); })
  .attr('stroke', 'white')
  .attr('fill', '#FF3842');
// bar value labels
barsContainer.selectAll("text").data(data).enter().append("text")
  .attr("x", function(d) { return x(barValue(d)); })
  .attr("y", yText)
  .attr("dx", 3) // padding-left
  .attr("dy", ".35em") // vertical-align: middle
  .attr("text-anchor", "start") // text-align: right
  .attr("fill", "black")
  .attr("stroke", "none")
  .text(function(d) { return d3.round(barValue(d), 2); });
// start line
barsContainer.append("line")
  .attr("y1", -gridChartOffset)
  .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
  .style("stroke", "#000");

//Draw the Circle
var circle = barsContainer.append("circle")
    .attr("cx", 50)
    .attr("cy", 150)
    .attr("r", 40)
    .style("stroke", "white")
    .style("fill", "#FFD999");
barsContainer.append("text")
.attr("dy", 150)
.attr("dx", -50)
.text("Calories      " + calories);

}

function drawvis() {
  var bars = svg.selectAll('g')
    .data(data);
    bars
    .enter()
    .append('g')
      .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')'); 
barsContainer.selectAll("rect").data(data).enter().append("rect")
  .attr('y', y)
  .attr('height', yScale.rangeBand())
  .attr('width', function(d) { return x(barValue(d)); })
  .attr('stroke', 'white')
  .attr('fill', '#d62728');

}

// on dropdown interaction
function filterType(ingredient, index) {
  currIngredients[index] = ingredient;
  //reset vars
  calories = 0;
  protein = 0;
  carbs = 0;
  fat = 0;
  sugar = 0;

  console.log(calories);
  var j = 0;
  for (j = 0, len = currIngredients.length; j < len; ++j) {
    console.log(currIngredients[j]);
    allfacts.filter(function(d,i) {
      if(d["item"] == currIngredients[j]) {
        calories = calories + (+d.calories);
        protein = protein + (+d.protein);
        carbs = carbs + (+d.carbs);
        fat = fat + (+d.fat);
        sugar = sugar + (+d.sugar);
        return;
      }    
    });
  }
console.log(calories/servings);
console.log(protein/servings);
console.log(carbs/servings);
console.log(fat/servings);
console.log(sugar/servings);
  //console.log(nutritionFacts);
}


// END copied code


