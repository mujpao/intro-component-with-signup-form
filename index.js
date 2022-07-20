function InputData(id, errorMsg) {
    this.id = id;
    this.errorMsg = errorMsg;
}

function showError(errorElement, errorMsg) {
    errorElement.textContent = errorMsg;
    errorElement.className = 'error active';
}

const inputs = [
    new InputData("firstname", "First Name cannot be empty"),
    new InputData("lastname", "Last Name cannot be empty"),
    new InputData("emailaddr", "Looks like this is not an email"),
    new InputData("password", "Password cannot be empty"),
];

const form = document.getElementsByTagName("form")[0];

for (const input of inputs) {
    const inputElement = document.getElementById(input.id);
    const errorElement = document.querySelector(`#${input.id} + span.error`);

    inputElement.addEventListener("input", function() {
        inputElement.classList.add("touched");

        if (inputElement.validity.valid) {
            errorElement.textContent = "";
            errorElement.className = "error";
        } else {
            showError(errorElement, input.errorMsg);
        }
    });

    form.addEventListener("submit", function(e) {
        inputElement.classList.add("touched");

        if (!inputElement.validity.valid) {
            showError(errorElement, input.errorMsg);
            e.preventDefault();
        }
    });
}
