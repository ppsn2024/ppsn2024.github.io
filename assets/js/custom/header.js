// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Green color palette with 5 colors
const colors = [
  "#5e8036",
  
  "#348C40",
  "#499638",
  "#8B9638",
  "#8C8634",

  "#689931",
  "#96A334",
  "#A39134",
  "#997D31",

  // "#2E401B",
  // "#95CC56",
  // "#668C3B",
  // "#4A662B",

  // "#007478", // Campus Linz
  // "#823896", // Campus Steyr
  // "#004b96", // Campus Wels
  // "#00a6eb", // SWPH
  // "#5e8036" // Campus Hgb
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function to generate a random color from the color palette
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColorRgb() {
  return hexToRgb(getRandomColor());
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
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

async function drawTriangleGradually(p1, p2, p3, colorRgb) {  
  let opacity = 0.0;
  let n = 50;

  for(let i = 0; i < n; i++) {
    opacity = 1.0/n*i;
    drawTriangle(p1, p2, p3, colorRgb, opacity);
    await sleep(1);
  }
}

function drawTriangleGradually2(p1, p2, p3, colorRgb) {
  return new Promise((resolve) => {
    
    (async () => {
      let opacity = 0.0;
      let n = 50;
    
      for(let i = 0; i < n; i++) {
        await sleep(1);
        opacity = 1.0/n*i;
        drawTriangle(p1, p2, p3, colorRgb, opacity);
        if(i == n*0.1) resolve('resolved');
      }
      // resolve('resolved');      
    })()    
  });
}

function drawTriangle(p1, p2, p3, colorRgb, opacity) {
  ctx.fillStyle = 'rgba(' + colorRgb.r + ',' + colorRgb.g + ',' + colorRgb.b + ',' + opacity + ')';
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
async function redrawCanvas(gradually) {
  
    // Set canvas size to cover the entire screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
  const width = canvas.width;
  const height = canvas.height;
  const numPoints = 250;
  
  // Set the background color of the canvas
  //ctx.fillStyle = '#87ba40';
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Generate random points
  const points = generateRandomPoints(numPoints, width, height);
  
  // Create a Delaunay triangulation using the delaunator library
  const delaunay = Delaunator.from(points, point => point.x, point => point.y);

  //console.log("triangle points: " + delaunay.triangles.length);
  //console.log("triangles: " + delaunay.triangles.length/3.0);
  const rndTriangles = [];
  for(let i = 0; i < numPoints; i++) {
    rndTriangles[i] = i*3;
  }  
  shuffle(rndTriangles);  
  let tasks = [];

  for(let i = 0; i < rndTriangles.length; i++) {
    const start = rndTriangles[i];
    const p1 = points[delaunay.triangles[start]];
    const p2 = points[delaunay.triangles[start + 1]];
    const p3 = points[delaunay.triangles[start + 2]]; 
    const randomColor = getRandomColorRgb();    
    if(gradually && i > rndTriangles.length/2) {             
      tasks.push(drawTriangleGradually2(p1, p2, p3, randomColor));      
      if(tasks.length == 10) {        
        let x = await Promise.all(tasks);        
        tasks = [];
      }
    } else {
      drawTriangle(p1, p2, p3, randomColor, 1.0);
    }
  }
}


// Redraw the canvas on window resize
window.addEventListener('resize', () => {redrawCanvas(false)});


// Initial canvas setup
redrawCanvas(true);
// (async () => {
//   while(true) {
//     redrawCanvas(true);
//     await sleep(5000);
//   }
// })();





