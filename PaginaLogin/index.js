const form = document.getElementById("formulario");

form.addEventListener(
  "submit",
  (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");

    console.log(form.elements);

    console.log("Nome: ", form.name.value);

    //ACESSANDO OS FILHOS DE UM ELEMENTO
    console.log("Nome: ", form.children[3].children[0].children[0].value);

    console.log("Email: ", form.elements["email"].value);
    console.log("Logado: ", form.elements["logado"].checked);
    console.log("Logado: ", form.elements["logado"].value);
  },
  false
);

