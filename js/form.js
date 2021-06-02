function postToGoogle() {
	var field1 = $("#nameField").val();
	var field2 = $("#emailField").val();
	var field3 = $("#messageField").val();

	if(field1 == ""){
		alert('Please Fill Your Name');
		document.getElementById("nameField").focus();
		return false;
	}
	if(field2 == ""){
		alert('Please Fill Your Email');
		document.getElementById("emailField").focus();
		return false;
	}
	if(field3 == ""){
		alert('Please Put your message');
		document.getElementById("messageField").focus();
		return false;
	}
	
	$.ajax({
		url: "https://docs.google.com/forms/d/e/1FAIpQLSc-Tv6l8uRH601pq1YKE7P0JxpzBU5mizJU3i7zj_FUrK-Xtw/formResponse?",
		data: {"entry.1525713871": field1, "entry.267131805": field2, "entry.489885130": field3},
		type: "POST",
		dataType: "xml",
		success: function(d)
		{
		},
		error: function(x, y, z)
			{

				$('#success-msg').show();
				$('#form').hide();
				
			}
		});
	return false;
}

// Earlier plan *****Not useful now******

/*
$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('bg-danger');
			$(formMessages).addClass('bg-success');

			// Set the message text.
			$(formMessages).text('Your message successfully sent');

			// Clear the form.
			$('#name, #email, #message').val('');			
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});*/