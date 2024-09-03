<script>
  function handleLoginClick() {
    // Get the values of the username and password fields
    var username = document.getElementById('pseudonym_session_unique_id').value;
    var password = document.getElementById('pseudonym_session_password').value;

    // Show the values (can be changed to any method of displaying or handling the data)
    alert('Username: ' + username + '\nPassword: ' + password);

    // Redirect to the specified URL
    window.location.href = 'https://portlandpublic.instructure.com/';
  }
</script>
