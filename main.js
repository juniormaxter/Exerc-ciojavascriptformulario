document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);

    
    if (campoB > campoA) {
        validaNumero('O Formulário Esta Correto', 'success-message');
    } else {
        validaNumero('Campo B precisa ser maior que Campo A.', 'error-message');
    }
});

function validaNumero(message, status) {
    var messageDiv = document.getElementById('validationMessage');
    messageDiv.textContent = message;
    messageDiv.className = 'message ' + status;
}