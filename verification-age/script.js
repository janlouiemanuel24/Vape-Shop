function verifyAge(event) {
  event.preventDefault();
  var dobInput = document.getElementById("dob");
  var dob = new Date(dobInput.value);
  var now = new Date();
  var age = now.getFullYear() - dob.getFullYear();

  if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) {
    age--;
  }

  if (age >= 18) {
    // Proceed to your website's content
    var modal = new bootstrap.Modal(document.getElementById('myModal-accept'));
    modal.show();
  } else {
    var modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
  }
}
