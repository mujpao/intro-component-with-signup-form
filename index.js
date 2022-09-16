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
        this.inputElement.setAttribute("aria-invalid", "true");
        this.inputElement.setAttribute("aria-errormessage", this.errorID);
    },

    hideError() {
        this.errorElement.textContent = "";
        this.inputElement.setAttribute("aria-invalid", "false");
        this.inputElement.removeAttribute("aria-errormessage");
    },

    addListeners() {
        this.inputElement.addEventListener("input", () => {
            this.markTouched();

            if (this.isValid()) {
                this.hideError();
            } else {
                this.showError();
            }

            if (this.inputElement.value === "") {
                this.labelElement.classList.remove("visually-hidden");
            } else {
                this.labelElement.classList.add("visually-hidden");
            }
        });
    },
};

function inputWithErrorMsg(id, errorMsg) {
    const inputElement = document.getElementById(id);
    const errorElement = document.querySelector(`#${id} + span.error`);
    const labelElement = document.querySelector(`label[for=${id}]`);

    const errorID = `${id}-error`;

    errorElement.id = errorID;

    return Object.assign(Object.create(inputWithErrorMsgProto),
        { id, errorMsg, inputElement, errorElement, labelElement, errorID });
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
