function removeWhitespace() {
    var inputText = document.getElementById('Text').value;
    var outputText = inputText.replace(/\s/g, ''); 
    document.getElementById('result').innerHTML = `Result is : ${outputText}`
}
