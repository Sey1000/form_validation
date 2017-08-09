// Your validation code will go in there.
// Write your validation functions, and bind events
// in a jQuery DOM ready callback
$(document).ready(function() {
  $('form').validate({
    rules: {
      first_name: "required",
      last_name: "required",
      address: "required",
      zip_code: {
        required: true,
        zipcodeFR: true
      },
      city: "required",
      email: {
        required: true,
        email: true
      },
      mobile_phone: {
        required: true,
        phoneNumFR: true
      },
      tos: "required"
    },
    messages: {
      first_name: "Please enter your first name",
      last_name: "Please enter your last name",
      address: "Please enter an address",
      city: "Please enter a city",
      tos: "Please accept our policy."
    },
    highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
  });
});

$.validator.addMethod( "zipcodeFR", function( value, element ) {
  return this.optional( element ) || /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/.test( value );
}, "Not a valid french Zipcode" );

$.validator.addMethod( "phoneNumFR", function( value, element ) {
  return this.optional( element ) || /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test( value );
}, "Not a valid french phone number" );





