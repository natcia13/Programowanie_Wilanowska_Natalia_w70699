function checkRequired(input, errorElement, errorMessage) {
    if (input.value.trim() === '') {
        setError(input, errorElement, errorMessage);
        return false;
    } else {
        clearError(input, errorElement);
        return true;
    }
}

function checkLength(input, minLength, errorElement, errorMessage) {
    if (input.value.trim().length < minLength) {
        setError(input, errorElement, errorMessage);
        return false;
    } else {
        clearError(input, errorElement);
        return true;
    }
}

function checkEmail(input, errorElement, errorMessage) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input.value.trim())) {
        setError(input, errorElement, errorMessage);
        return false;
    } else {
        clearError(input, errorElement);
        return true;
    }
}

function checkPasswordStrength(input, errorElement, errorMessage) {
    if (input.value.trim().length < 8) {
        setError(input, errorElement, errorMessage);
        return false;
    } else {
        clearError(input, errorElement);
        return true;
    }
}

function validateDateOfBirth(input, errorElement) {
    const dob = new Date(input.value);
    const today = new Date();
    const minAge = 18;
    const minBirthDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

    if (dob >= minBirthDate) {
        setError(input, errorElement, 'Osoba musi być pełnoletnia.');
        return false;
    } else {
        clearError(input, errorElement);
        return true;
    }
}

function validatePasswordMatch(passwordInput, confirmPasswordInput, errorElement) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        setError(confirmPasswordInput, errorElement, 'Hasła nie pasują do siebie.');
        return false;
    } else {
        clearError(confirmPasswordInput, errorElement);
        return true;
    }
}

function setError(input, errorElement, errorMessage) {
    input.classList.add('error');
    errorElement.textContent = errorMessage;
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        const fnameInput = document.getElementById('fname');
        const lnameInput = document.getElementById('lname');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const genderInput = document.getElementById('gender');
        const phoneInput = document.getElementById('phone');
        const birthdateInput = document.getElementById('birthdate');
        const countryInput = document.getElementById('country');

        let isValid = true;

        isValid = checkRequired(fnameInput, document.getElementById('fname-error'), 'Pole "Imię" jest wymagane.') && isValid;
        isValid = checkRequired(lnameInput, document.getElementById('lname-error'), 'Pole "Nazwisko" jest wymagane.') && isValid;
        isValid = checkRequired(emailInput, document.getElementById('email-error'), 'Pole "Email" jest wymagane.') && isValid;
        isValid = checkEmail(emailInput, document.getElementById('email-error'), 'Proszę podać poprawny adres email.') && isValid;
        isValid = checkRequired(passwordInput, document.getElementById('password-error'), 'Pole "Hasło" jest wymagane.') && isValid;
        isValid = checkPasswordStrength(passwordInput, document.getElementById('password-error'), 'Hasło musi mieć co najmniej 8 znaków.') && isValid;
        isValid = validatePasswordMatch(passwordInput, confirmPasswordInput, document.getElementById('confirmPassword-error')) && isValid;
        isValid = checkRequired(genderInput, document.getElementById('gender-error'), 'Proszę wybrać płeć.') && isValid;
        isValid = checkRequired(phoneInput, document.getElementById('phone-error'), 'Pole "Telefon" jest wymagane.') && isValid;
        isValid = checkRequired(birthdateInput, document.getElementById('birthdate-error'), 'Pole "Data Urodzenia" jest wymagane.') && isValid;
        isValid = validateDateOfBirth(birthdateInput, document.getElementById('birthdate-error')) && isValid;
        isValid = checkRequired(countryInput, document.getElementById('country-error'), 'Pole "Kraj" jest wymagane.') && isValid;

        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert('Formularz został poprawnie wypełniony.');
            form.reset(); 
        }
    });

    const formInputs = form.querySelectorAll('input, select');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElementId = input.id + '-error';
            const errorElement = document.getElementById(errorElementId);
            if (errorElement) {
                switch (input.type) {
                    case 'text':
                    case 'password':
                    case 'email':
                    case 'tel':
                    case 'date':
                        checkRequired(input, errorElement, errorElement.textContent);
                        break;
                    case 'select-one':
                        checkRequired(input, errorElement, errorElement.textContent);
                        break;
                    default:
                        break;
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    const countryInput = document.getElementById('country');
    const provinceSelect = document.getElementById('province');
    const addressInput = document.getElementById('address');
    const sameAddressCheckbox = document.getElementById('sameAddress');
    const correspondingAddressGroup = document.getElementById('correspondingAddressGroup');
    const correspondingAddressInput = document.getElementById('correspondingAddress');


    function toggleFieldOnCheckboxChange(checkbox, field) {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                field.style.display = 'none';
                clearError(field.querySelector('input'), field.querySelector('.error-message'));
            } else {
                field.style.display = 'block';
            }
        });
    }


    countryInput.addEventListener('change', function() {
        provinceSelect.disabled = countryInput.value.trim() === '';
    });


    toggleFieldOnCheckboxChange(sameAddressCheckbox, correspondingAddressGroup);


    form.addEventListener('submit', function(event) {
        let isValid = true;

        isValid = checkRequired(document.getElementById('fname'), document.getElementById('fname-error'), 'Pole "Imię" jest wymagane.') && isValid;
        isValid = checkRequired(document.getElementById('lname'), document.getElementById('lname-error'), 'Pole "Nazwisko" jest wymagane.') && isValid;
        isValid = checkRequired(document.getElementById('email'), document.getElementById('email-error'), 'Pole "Email" jest wymagane.') && isValid;


        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert('Formularz został poprawnie wypełniony.');
            form.reset(); 
        }
    });


});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    const countryInput = document.getElementById('country');
    const provinceSelect = document.getElementById('province');

    countryInput.addEventListener('change', function() {
        const selectedCountry = countryInput.value.trim();
        if (selectedCountry === 'Polska') {
            provinceSelect.disabled = false;
        } else {
            provinceSelect.disabled = true;
            provinceSelect.value = ''; 
            clearError(provinceSelect, document.getElementById('province-error'));
        }
    });


    form.addEventListener('submit', function(event) {
        let isValid = true;

        isValid = checkRequired(document.getElementById('fname'), document.getElementById('fname-error'), 'Pole "Imię" jest wymagane.') && isValid;
        isValid = checkRequired(document.getElementById('lname'), document.getElementById('lname-error'), 'Pole "Nazwisko" jest wymagane.') && isValid;
        isValid = checkRequired(document.getElementById('email'), document.getElementById('email-error'), 'Pole "Email" jest wymagane.') && isValid;


        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert('Formularz został poprawnie wypełniony.');
            form.reset(); 
        }
    });

    

});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function() {
        phoneInput.value = phoneInput.value.replace(/\D/g, ''); 
    });

    form.addEventListener('submit', function(event) {
        let isValid = true;


        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert('Formularz został poprawnie wypełniony.');
            form.reset(); 
        }
    });


});

class Kontakt {
    constructor(imie, nazwisko, numerTelefonu) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.numerTelefonu = numerTelefonu;
    }
}

class ListaKontaktow {
    constructor() {
        this.lista = [];
    }

    dodajKontakt(kontakt) {
        this.lista.push(kontakt);
    }

    wyswietlListe() {
        const tableBody = document.getElementById('contactTableBody');
        tableBody.innerHTML = '';

        this.lista.forEach((kontakt) => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = kontakt.imie;
            row.insertCell(1).textContent = kontakt.nazwisko;
            row.insertCell(2).textContent = kontakt.numerTelefonu;
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('newContactForm');
    const contactList = new ListaKontaktow();

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        const newContact = new Kontakt(firstName, lastName, phoneNumber);

        contactList.dodajKontakt(newContact);
        contactList.wyswietlListe();

        contactForm.reset();
    });
});
