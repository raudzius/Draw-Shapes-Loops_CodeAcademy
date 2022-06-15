function drawC(event) {
    const size = Number(event.target.value);
    const outputElement = document.getElementById('output');
  
    if (size < 3) {
      outputElement.innerHTML = 'C letter size must be at least 3';
      return;
    }
  
    let output = '';
    for (i = 0; i < size; i++) {
      output += 'C'
    }
    output += '<br>'
    for (i = 0; i < size - 2; i++) {
      output += 'C<br>';
    }
    for (i = 0; i < size; i++) {
      output += 'C'
    }
    outputElement.innerHTML = output;
  }
  
  document.getElementById('size').addEventListener('input', drawC)
  