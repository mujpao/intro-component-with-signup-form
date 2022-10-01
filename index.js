"use strict";

class InputWithErrorMsg {
    constructor(id, errorMsg) {
        this.id = id;
        this.errorMsg = errorMsg;
        this.inputElement = document.getElementById(id);
        this.errorElement = document.querySelector(`#${id} + span.error`);
        this.labelElement = document.querySelector(`label[for=${id}]`);

        if (this.inputElement.value === "") {
            this.labelElement.classList.remove("visually-hidden");
        } else {
            this.labelElement.classList.add("visually-hidden");
        }

        const errorID = `${id}-error`;

        this.errorElement.id = errorID;
    }

    isValid() {
        return this.inputElement.validity.valid;
    }

    markTouched() {
        this.inputElement.classList.add("touched");
    }

    showError() {
        this.errorElement.textContent = this.errorMsg;
        this.inputElement.setAttribute("aria-invalid", "true");
        this.inputElement.setAttribute("aria-errormessage", this.errorElement.id);
    }

    hideError() {
        this.errorElement.textContent = "";
        this.inputElement.setAttribute("aria-invalid", "false");
        this.inputElement.removeAttribute("aria-errormessage");
    }

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
    }
}

const inputs = [
   new InputWithErrorMsg("firstname", "First Name cannot be empty"),
   new InputWithErrorMsg("lastname", "Last Name cannot be empty"),
   new InputWithErrorMsg("emailaddr", "Looks like this is not an email"),
   new InputWithErrorMsg("password", "Password cannot be empty"),
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
