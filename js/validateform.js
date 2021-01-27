//Get value for local storage array

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('storage'));
}

//Set value function for write method

function setLocalStorage(newItem) {
  localStorage.setItem('storage', newItem);
}

let defaultData = '[{"_f_firstname":"aman","_f_lastname":"das","_f_fathername":"dadada","_f_gender":"male","_f_course":"MCA","_f_address":"ddsdbsbdh","_f_city":"dadada","_f_state":"male","_f_pincode":"769003","_f_emailid":"male@gmail.com","_f_password":"dadada","_f_dob":"24-10-2021","_f_mobile_no":"7978659331"}]';

//It executes on loading of the page, populate default data in local storage and populate the table
function onLoadingPage() {
  setLocalStorage(defaultData);
  populatetoTable(getLocalStorage());
}
var Data = (function () {

  onLoadingPage();

})();

//Populate default data to the table
function populatetoTable(inputData) {
  for (var i of inputData) {
    let {
      _f_firstname: firstname,
      _f_lastname: lastname,
      _f_fathername: fathername,
      _f_gender: gender,
      _f_course: course,
      _f_address: address,
      _f_city: city,
      _f_state: state,
      _f_pincode: pincode,
      _f_emailid: emailid,
      _f_password: password,
      _f_dob: dob,
      _f_mobile_no: mobile_no,
    } = i;
    appendrowToTable(firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no);
  }
}


//Function that makes changes to the table when clicking on submit
function addDatatoTable() {

  event.preventDefault();

  var WriteMethod = getWriteMethod();

  //Returns reference to DOM nodes with the specified id or name 
  var firstname = $('#firstname')[0].value;
  var lastname = $('#lastname')[0].value;
  var fathername = $('#fathername')[0].value;
  var genderList = $("input[name='gender']");
  var course = $('#course')[0].value;
  var address = $('#address')[0].value;
  var city = $('#city')[0].value;
  var state = $('#state')[0].value;
  var pincode = $('#pincode')[0].value;
  var emailid = $('#emailid')[0].value;
  var password = $('#password')[0].value;
  var dob = $('#dob')[0].value;
  var mobile_no = $('#mobile_no')[0].value;

  var gender = [];

  //loop through all radio lists to determine the selected one
  for (var i of genderList) {
    if (i.checked === true) {
      gender.push(i.value)
    }
  }


  //converts the list of selected radios to strings
  gender = gender.toString();


  //function to append new row to table
  if (WriteMethod === 'Submit') {
    writeToStorage(firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no);
  }


  //Clear form input fields
  clearForm();


}

//Appends a new row to the end of the table

function appendrowToTable(firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no) {
  var tableReference = $('.tableData tbody')[0];
  var rows = $('.tableData tbody tr');
  if (rows.length === 0) {
    rowcount = 0;
  } else {
    rowcount = parseInt([].slice.call(rows).pop().classList[0].replace(/\D/g, ''));
  }

  var row = tableReference.insertRow(-1);
  row.classList.add("_row" + (rowcount + 1));

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var cell11 = row.insertCell(10);
  var cell12 = row.insertCell(11);
  var cell13 = row.insertCell(12);
  var cell14 = row.insertCell(13);


  cell1.innerHTML = firstname;
  cell2.innerHTML = lastname;
  cell3.innerHTML = fathername;
  cell4.innerHTML = gender;
  cell5.innerHTML = course;
  cell6.innerHTML = address;
  cell7.innerHTML = city;
  cell8.innerHTML = state;
  cell9.innerHTML = pincode;
  cell10.innerHTML = emailid;
  cell11.innerHTML = password;
  cell12.innerHTML = dob;
  cell13.innerHTML = mobile_no;
  cell14.innerHTML = '<label>Edit</label><br><label>Delete</label';
}

//Clears the form fields after submitting the data 
function clearForm() {
  $('#firstname')[0].value = "";
  $('#lastname')[0].value = "";
  $('#fathername')[0].value = "";
  $('#course')[0].value = "";
  $('#address')[0].value = "";
  $('#city')[0].value = "";
  $('#state')[0].value = "";
  $('#pincode')[0].value = "";
  $('#emailid')[0].value = "";
  $('#password')[0].value = "";
  $('#dob')[0].value = "";
  $('#mobile_no')[0].value = "";


  for (var i of $("input[name='gender']")) {
    i.checked = false;
  }
}

//Pushes a new object to the array of records in localstorage

function writeToStorage(firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no) {
  var currentArray = getLocalStorage()
  var objectToAdd = {
    _f_firstname: firstname,
    _f_lastname: lastname,
    _f_fathername: fathername,
    _f_gender: gender,
    _f_course: course,
    _f_address: address,
    _f_city: city,
    _f_state: state,
    _f_pincode: pincode,
    _f_emailid: emailid,
    _f_password: password,
    _f_dob: dob,
    _f_mobile_no: mobile_no,
  }
  currentArray.push(objectToAdd);
  setLocalStorage(JSON.stringify(currentArray));
  appendrowToTable(firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no);
}

//Updates a specific index of the array of objects in localstorage

function updateStorage(index, firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no) {
  console.log(index)
  var currentArray = getLocalStorage()
  var editedObject = {
    _f_firstname: firstname,
    _f_lastname: lastname,
    _f_fathername: fathername,
    _f_gender: gender,
    _f_course: course,
    _f_address: address,
    _f_city: city,
    _f_state: state,
    _f_pincode: pincode,
    _f_emailid: emailid,
    _f_password: password,
    _f_dob: dob,
    _f_mobile_no: mobile_no,
  };

  var fetchedOriginalName = $('.tableData tbody').find('._row' + index + ' .firstname')[0].innerText;
  var indexToReplace = 0;
  for (var i of currentArray) {
    if (i._f_firstname != fetchedOriginalName) {
      indexToReplace = indexToReplace + 1;
    } else {
      break;
    }
  }


  currentArray[indexToReplace] = editedObject;
  setLocalStorage(JSON.stringify(currentArray));
  updateTableRow(index, firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no);
}


//Get function for write method
function getWriteMethod() {
  return $('.submit')[0].innerText;
}
//Set function for write method
function setWriteMethod(method) {
  $('.submit')[0].innerText = method;
}


//this is for form validation

function validateHTMlform() {
  let form = document.StudenSignupForm;
  if (form.firstnames.value == "") {
    alert("Enter Your First Name!");
    form.firstnames.focus();
    return;
  }
  if (form.lastnames.value == "") {
    alert("Enter Your Last Name!");
    form.lastnames.focus();
    return false;
  }

  if (form.fathername.value == "") {
    alert("Enter Your Father Name!");
    form.fathername.focus();
    return false;
  }

  if (form.personal_address.value == "") {
    alert("Enter Your Address!");
    form.personal_address.focus();
    return false;
  }

  if ((StudenSignupForm.gender[0].checked == false) && (StudenSignupForm.gender[1].checked == false)) {
    alert("Choose Your Gender: Male or Female");
    form.gender.focus();
    return false;
  }
  if (form.Course.value == "-1") {
    alert("Enter Your Course!");
    form.Course.focus();

    return false;
  }
  if (form.City.value == "") {
    alert("Enter Your City!");
    form.City.focus();
    return false;
  }

  if (form.State.value == "-1") {
    alert("Select Your State!");
    form.State.focus();

    return false;
  }
  if (form.pincode.value == "" ||
    isNaN(form.pincode.value) ||
    form.pincode.value.length != 6) {
    alert("Enter your pincode in format ######.");
    form.pincode.focus();
    return false;
  }
  var email = form.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
    alert("Enter your correct email ID")
    form.emailid.focus();
    return false;
  }
  if (form.password.value == "") {
    alert("Enter Your Password!");
    form.password.focus();
    return false;
  }
  if (form.dob.value == "") {
    alert("Enter your DOB!");
    form.dob.focus();
    return false;
  }
  if (form.mobile_no.value == "" ||
    isNaN(form.mobile_no.value) ||
    form.mobile_no.value.length != 10) {
    alert("Enter your Mobile No. in the format 123.");
    form.mobile_no.focus();
    return false;
  }
  return (true);
}