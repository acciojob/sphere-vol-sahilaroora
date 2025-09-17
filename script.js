// script.js

function volume_sphere() {
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);
  const volumeField = document.getElementById('volume');

  // Validate the input: check for non-numeric or negative values.
  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return;
  }

  // Calculate the volume of the sphere.
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to four decimal places.
  const roundedVolume = volume.toFixed(4);

  // Display the result in the volume field.
  volumeField.value = roundedVolume;
}
