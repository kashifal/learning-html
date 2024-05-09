const btn = document.getElementById("submit_id");
const name = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const email = document.getElementById("email");
const country = document.getElementById("country");

btn.addEventListener("click", () => {
  if (name.value === "" || lname.value === "" || email.value === "") {
    alert("Fill in all required fields before submitting.");
  } else {
    alert("Form submitted successfully. Thank you!");
    // Optionally reset the form after submission
    document.querySelector("form").reset();
    name.value = "";
    lname.value = "";
    email.value = "";
    country.value = "";
  }
});
