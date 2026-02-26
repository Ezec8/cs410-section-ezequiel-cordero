const canvas = document.getElementById("mySection");
const ctx = canvas.getContext("2d");

ctx.beginPath();

// Set start-point
ctx.moveTo(20,20);

// Set sub-points
ctx.lineTo(100,20);
ctx.lineTo(175,100);
ctx.lineTo(20,100);

// Set end-point
ctx.lineTo(20,20);

// Stroke it (do the drawing)
ctx.stroke();
