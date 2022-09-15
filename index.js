function InputData(id, errorMsg) {
    this.id = id;
    this.errorMsg = errorMsg;
}

function showError(errorElement, errorMsg) {
    errorElement.textContent = errorMsg;
}

function hideError(errorElement) {
    errorElement.textContent = "";
}

const inputs = [
    new InputData("firstname", "First Name cannot be empty"),
    new InputData("lastname", "Last Name cannot be empty"),
    new InputData("emailaddr", "Looks like this is not an email"),
    new InputData("password", "Password cannot be empty"),
];

const form = document.getElementsByTagName("form")[0];

for (const input of inputs) {
    input.inputElement = document.getElementById(input.id);
    input.errorElement = document.querySelector(`#${input.id} + span.error`);

    input.inputElement.addEventListener("input", function () {
        input.inputElement.classList.add("touched");

        if (input.inputElement.validity.valid) {
            hideError(input.errorElement);
        } else {
            showError(input.errorElement, input.errorMsg);
        }
    });

}

form.addEventListener("submit", function (e) {
    for (const input of inputs) {
        input.inputElement.classList.add("touched");

        if (!input.inputElement.validity.valid) {
            showError(input.errorElement, input.errorMsg);
            e.preventDefault();
        }
    }
});
