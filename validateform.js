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

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
  resetForm();


}

function readFormData() {
  var formData = {};
  formData["firstname"] = document.getElementById("firstname").value;
  formData["lastname"] = document.getElementById("lastname").value;
  formData["fathername"] = document.getElementById("fathername").value;
  formData["male"] = document.getElementById("male").value;
  formData["female"] = document.getElementById("female").value;
  formData["course"] = document.getElementById("course").value;
  formData["personaladdress"] = document.getElementById("personaladdress").value;
  formData["city"] = document.getElementById("city").value;
  formData["state"] = document.getElementById("state").value;
  formData["pincode"] = document.getElementById("pincode").value;
  formData["emailid"] = document.getElementById("emailid").value;
  formData["password"] = document.getElementById("password").value;
  formData["dob"] = document.getElementById("dob").value;
  formData["mobile_no"] = document.getElementById("mobile_no").value;
  
  return formData;

}

function insertNewRecord(data) {
  var table = document.getElementById("studentData").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.fathername;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.male;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.female;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.course;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.personaladdress;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.city;
  cell9 = newRow.insertCell(8);
  cell9.innerHTML = data.state;
  cell10 = newRow.insertCell(9);
  cell10.innerHTML = data.pincode;
  cell11 = newRow.insertCell(10);
  cell11.innerHTML = data.emailid;
  cell12 = newRow.insertCell(11);
  cell12.innerHTML = data.password;
  cell13 = newRow.insertCell(12);
  cell13.innerHTML = data.dob;
  cell14 = newRow.insertCell(13);
  cell14.innerHTML = data.mobile_no;
  cell15 = newRow.insertCell(14);
  cell15.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                      <a>Delete</a>`;

}
function resetForm() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("fathername").value;
  document.getElementById("male").value;
  document.getElementById("female").value;
  document.getElementById("course").value;
  document.getElementById("personaladdress").value;
  document.getElementById("city").value;
  document.getElementById("state").value;
  document.getElementById("pincode").value;
  document.getElementById("emailid").value;
  document.getElementById("password").value;
  document.getElementById("dob").value;
  document.getElementById("mobile_no").value;
  
}