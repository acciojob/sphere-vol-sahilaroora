function volume_sphere() {
  // Get input value
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);

  // Get volume output field
  const volumeField = document.getElementById('volume');

  // Validate input: check for non-numeric or negative values
  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return;
  }

  // Calculate volume using formula V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display
  volumeField.value = volume.toFixed(4);
}
