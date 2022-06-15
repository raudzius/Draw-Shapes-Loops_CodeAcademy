function drawTriangle(event) {
    event.preventDefault();
    let triangleSize = Number(document.getElementById('triangleSize').value);
    const outputElement = document.getElementById('output');
  
    let output = '';
    for (i = 0; i < triangleSize; i++) { 
      for (j = 0; j <= i; j++) {
        output += "*";
      }
      output += "<br>";
      outputElement.innerHTML = output;
    }
  }
  
  document.querySelector('form').addEventListener('submit', drawTriangle);
  