document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".career-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission

    // Collect input values
    const file = form.querySelector('input[type="file"]').files[0];
    const skills = form.querySelector('input[type="text"]').value.trim();
    const country = form.querySelector('select').value;
    const experience = form.querySelector('input[type="number"]').value;

    // Validation checks
    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    if (!skills) {
      alert("Please enter your skills.");
      return;
    }

    if (!country) {
      alert("Please select a country.");
      return;
    }

    if (experience === "" || isNaN(experience) || Number(experience) < 0 || experience>35){
      alert("Please enter a valid number of years of experience.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
  });
});
