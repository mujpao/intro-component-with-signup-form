"use strict";

const inputWithErrorMsgProto = {
    isValid() {
        return this.inputElement.validity.valid;
    },

    markTouched() {
        this.inputElement.classList.add("touched");
    },

    showError() {
        this.errorElement.textContent = this.errorMsg;
    },

    hideError() {
        this.errorElement.textContent = "";
    },

    addListeners() {
        this.inputElement.addEventListener("input", () => {
            this.markTouched();

            if (this.isValid()) {
                this.hideError();
            } else {
                this.showError();
            }
        });
    },
};

function inputWithErrorMsg(id, errorMsg) {
    const inputElement = document.getElementById(id);
    const errorElement = document.querySelector(`#${id} + span.error`);

    return Object.assign(Object.create(inputWithErrorMsgProto),
        { id, errorMsg, inputElement, errorElement });
}

const inputs = [
    inputWithErrorMsg("firstname", "First Name cannot be empty"),
    inputWithErrorMsg("lastname", "Last Name cannot be empty"),
    inputWithErrorMsg("emailaddr", "Looks like this is not an email"),
    inputWithErrorMsg("password", "Password cannot be empty"),
];

for (const input of inputs) {
    input.addListeners();
}

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function (e) {
    for (const input of inputs) {
        input.markTouched();

        if (!input.isValid()) {
            input.showError();
            e.preventDefault();
        }
    }
});
