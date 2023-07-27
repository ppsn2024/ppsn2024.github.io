// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Green color palette with 5 colors
const colors = [
  "#87ba40", // Base Color (Original color)
  "#b1d06b",
  "#9fca59",
  "#8bb446",
  "#77a732",
  "#639d1f",
  "#4f9310"
];

// Function to generate a random color from the color palette
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to generate random points
function generateRandomPoints(numPoints, width, height) {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    points.push({ x: getRandom(-0.5,1.5) * width, y: getRandom(-0.5,1.5) * height });
  }
  return points; 
}


// Function to draw a triangular partition with a given color at a specific position and size
function drawTriangleBySize(x, y, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTriangle(p1, p2, p3, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.closePath();
  ctx.fill();
}

// Function to draw a line segment between two points
function drawLine(ctx, p1, p2) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

// Function to clear the canvas and redraw the triangular partitions
function redrawCanvas() {
  // Set canvas size to cover the entire screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const width = canvas.width;
  const height = canvas.height;
  const numPoints = 200;
  
  // Set the background color of the canvas
  //ctx.fillStyle = '#87ba40';
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Generate random points
  const points = generateRandomPoints(numPoints, width, height);
  
  // Create a Delaunay triangulation using the delaunator library
  const delaunay = Delaunator.from(points, point => point.x, point => point.y);
  
  // Draw the Delaunay triangulation edges
  for (let e = 0; e < delaunay.triangles.length; e += 3) {
    const p1 = points[delaunay.triangles[e]];
    const p2 = points[delaunay.triangles[e + 1]];
    const p3 = points[delaunay.triangles[e + 2]];
    
    //drawLine(ctx, p1, p2);
    //drawLine(ctx, p2, p3);
    //drawLine(ctx, p3, p1);
    const randomColor = getRandomColor();
    drawTriangle(p1, p2, p3, randomColor);
  }
  
  //const randomColor = getRandomColor();
  //drawTriangle(x, y, triangleSize, randomColor);
}
// Initial canvas setup
redrawCanvas();

// Redraw the canvas on window resize
window.addEventListener('resize', redrawCanvas);



