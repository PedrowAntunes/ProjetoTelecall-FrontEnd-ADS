const inputCellPhone = document.querySelector('.cell-phone');
const inputPhone = document.querySelector('.phone');
const inputLogin = document.getElementById('login-name');
const passwordInputs = document.querySelectorAll(".password");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const getChecked = document.getElementById('agreement');
const getBtn = document.getElementById('submit-btn');

new Cleave(inputCellPhone, {
    delimiters: ['-', '.',],
    blocks: [2, 5, 4],
    numericOnly: true
});

new Cleave(inputPhone, {
    delimiters: ['-', '.',],
    blocks: [2, 4, 4],
    numericOnly: true
});

inputLogin.addEventListener('keyup', function () {
    const regex = /^[a-zA-Z]{0,6}$/;
    const inputText = inputLogin.value;

    if (regex.test(inputText)) {
        console.log('Login válido' + inputText);
    } else {
        console.log('Login inválido' + inputText);
        inputLogin.value = inputText.slice(0, -1);
    }
});

function validarSenhas() {
    for (let i = 0; i < passwordInputs.length; i++) {
        const senhaInput = passwordInputs[i];
        const confirmacaoSenhaInput = form.querySelector('.password:not(#' + senhaInput.id + ')');

        // Verifica se as senhas têm 8 letras
        const senhaRegExp = /^[a-zA-Z]{8}$/;
        if (!senhaRegExp.test(senhaInput.value)) {
            passwordError.innerText = "A senha deve ter exatamente 8 letras.";
            confirmPasswordError.innerText = "";

            setTimeout(() => {
                passwordError.innerText = "";
                confirmPasswordError.innerText = "";
            }, 5000); // 5 segundos

            return false;
        }

        // Verifica se as senhas são iguais
        if (senhaInput.value !== confirmacaoSenhaInput.value) {
            passwordError.innerText = "";
            confirmPasswordError.innerText = "As senhas não coincidem. Por favor, verifique.";

            setTimeout(() => {
                passwordError.innerText = "";
                confirmPasswordError.innerText = "";
            }, 5000); // 5 segundos

            return false;
        }
    }
    return true;
}

function login(event) {
    event.preventDefault();
    if (validarSenhas()) {
        const loginValue = inputLogin.value;
        const passwordValue = passwordInputs[0].value;
        localStorage.setItem("login", loginValue);
        localStorage.setItem("password", passwordValue);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../html/Login.html";
    }
}

getBtn.disabled = true;

getChecked.addEventListener('change', function() {
  getBtn.disabled = !this.checked;
});
