//this is for form validation

function validateHTMlform()
{ 
  let form = document.StudenSignupForm;
   if( form.firstnames.value == "" )
   {
     alert( "Enter Your First Name!" );
     form.firstnames.focus() ;
	 return;
   }
   if( form.lastnames.value == "" )
   {
     alert( "Enter Your Last Name!" );
     form.lastnames.focus() ;
     return false;
   }
  
   if( form.fathername.value == "" )
   {
     alert( "Enter Your Father Name!" );
     form.fathername.focus() ;
     return false;
   }
   
   if( form.personal_address.value == "" )
   {
     alert( "Enter Your Address!" );
     form.personal_address.focus() ;
     return false;
   }
 
   if ( ( StudenSignupForm.gender[0].checked == false ) && ( StudenSignupForm.gender[1].checked == false ) )
   {
   alert ( "Choose Your Gender: Male or Female" );
   form.gender.focus();
   return false ;
   }   
   if( form.Course.value == "-1" )
   {
     alert( "Enter Your Course!" );
	 form.Course.focus();
    
     return false;
   }   
   if( form.City.value == "" )
   {
     alert( "Enter Your City!" );
     form.City.focus() ;
     return false;
   }   
    
   if( form.State.value == "-1" )
   {
     alert( "Select Your State!" );
	 form.State.focus();
     
     return false;
   }
   if( form.pincode.value == "" ||
           isNaN( form.pincode.value) ||
           form.pincode.value.length != 6 )
   {
     alert( "Enter your pincode in format ######." );
     form.pincode.focus() ;
     return false;
   }
 var email = form.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Enter your correct email ID")
     form.emailid.focus() ;
     return false;
 }
    if( form.password.value == "" )
   {
     alert( "Enter Your Password!" );
     form.password.focus() ;
     return false;
   }   
  if( form.dob.value == "" )
   {
     alert( "Enter your DOB!" );
     form.dob.focus() ;
     return false;
   }
  if( form.mobile_no.value == "" ||
           isNaN( form.mobile_no.value) ||
           form.mobile_no.value.length != 10 )
   {
     alert( "Enter your Mobile No. in the format 123." );
     form.mobile_no.focus() ;
     return false;
   }
   return( true );
}
