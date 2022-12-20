function areaOfSquare(side) {
  return side * side;
}

function areaOfRectangle(height, width) {
  return height * width;
}

function areaOfCircle(radius) {
  return (3.14*radius * radius);
}

module.exports = {
  areaOfSquare: areaOfSquare,
  areaOfRectangle: areaOfRectangle,
  areaOfCircle: areaOfCircle,
};
