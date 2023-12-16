function validateForm() {
  var name = document.getElementById("nameInput").value.trim();
  var email = document.getElementById("emailInput").value.trim();
  var phone = document.getElementById("phoneInput").value.trim();
  var message = document.getElementById("messageInput").value.trim();

  var nameRegex = /^[A-Za-z]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\d{10}$/;

  var isValid = true;

  if (!nameRegex.test(name) || name === "") {
    document.getElementById("nameError").textContent =
      "Name should be in alphabets";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  if (!emailRegex.test(email) || email === "") {
    document.getElementById("emailError").textContent = "Invalid Email Address";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (!phoneRegex.test(phone) || phone === "") {
    document.getElementById("phoneError").textContent =
      "Invalid Phone Number (10 digits required)";
    isValid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  if (message === "") {
    document.getElementById("messageError").textContent =
      "Message cannot be empty";
    isValid = false;
  } else {
    document.getElementById("messageError").textContent = "";
  }

  if (isValid) {
    var formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return isValid;
}

function resetForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("phoneInput").value = "";
  document.getElementById("messageInput").value = "";
}

document.getElementById("submitButton").addEventListener("click", function () {
  if (validateForm()) {
    Swal.fire({
      icon: "success",
      title: "Submitted Successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    resetForm();
  }
});
