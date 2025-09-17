function volume_sphere() {
  const radiusInput = document.getElementById("radius").value.trim();
  const volumeOutput = document.getElementById("volume");

  const radius = parseFloat(radiusInput);

  // Check for invalid input (negative or non-numeric)
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = "NaN";
  } else {
    // Calculate volume
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    // Round to 4 decimal places
    volumeOutput.value = volume.toFixed(4);
  }

  return false; // Prevent form submission
}

// Attach event listener to the form
document.getElementById("MyForm").onsubmit = volume_sphere;
