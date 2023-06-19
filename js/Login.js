const getButton = document.querySelector('form');
const login = document.getElementById("login");
const senha = document.getElementById("senha");
const loginError = document.getElementById("login-error");

function validarFormulario() {
    if (login.value === "" || senha.value === "") {
      loginError.innerText = "Preencha todos os campos";
      loginError.style.display = "block";

      setTimeout(() => {
        loginError.innerText = "";
        loginError.style.display = "none";
        }, 5000); // 5 segundos
        
      return false;
    } else {
      return true;
    }
  }
  
  function adicionarEventoDeSubmissao() {
    getButton.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validarFormulario()) {
        localStorage.setItem("login", login.value);
        event.target.submit();
        window.location.replace("Sistema.html");
      }
    });
  }
  