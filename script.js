function volume_sphere() {
    //Write your code here
  // Get the value of the radius input field
  var radius = parseFloat(document.getElementById("Radius").value);

  // Calculate the volume of the sphere using the formula: (4/3) * π * r^3
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2);

  // Return false to prevent form submission
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
