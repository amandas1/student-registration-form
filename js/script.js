//Get value for local storage array

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('storage'));
}

//Set value function for write method

function setLocalStorage(newItem) {
  localStorage.setItem('storage', newItem);
}

let defaultData = '[{"_f_firstname":"Joe","_f_lastname":"eren","_f_fathername":"donal eren","_f_gender":"male","_f_course":"MCA","_f_address":"street - 7","_f_city":"bbsr","_f_state":"odisha","_f_pincode":"769003","_f_emailid":"joe@gmail.com","_f_password":"dadada","_f_dob":"2021-10-22","_f_mobile_no":"7978659331"}]';

//It executes on loading of the page, populate default data in local storage and populate the table
function onLoadingPage() {
  setLocalStorage(defaultData);
  populatetoTable(getLocalStorage());
}
var Data = (function () {
  var rowIdtoEdit = -1;
  onLoadingPage();



  //Sets the row id to edit
function setrowIdtoEdit(value)
{
  rowIdtoEdit=value;
}

//Returns the row id that is currently being edited

function getrowIdtoEdit()
{
  return rowIdtoEdit;
}

//returns a row of the table from  its class name, which is inorder determined by index
function getRowByIndex(index)
{
  return $('._row'+index)[0];
}

//Returns an object with references to getters and setters
return {
  setrowIdtoEdit: setrowIdtoEdit,
  getrowIdtoEdit: getrowIdtoEdit,
  getRowByIndex: getRowByIndex
}


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
  } else {
    updateStorage(Data.getrowIdtoEdit(), firstname, lastname, fathername, gender, course,address,city,state,pincode,emailid,password,dob,mobile_no)
    Data.setrowIdtoEdit(-1);
    setWriteMethod("Submit");
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

  cell1.classList.add('firstname');
  cell2.classList.add('lastname');
  cell3.classList.add('fathername');
  cell4.classList.add('gender');
  cell5.classList.add('course');
  cell6.classList.add('address');
  cell7.classList.add('city');
  cell8.classList.add('state');
  cell9.classList.add('pincode');
  cell10.classList.add('emailid');
  cell11.classList.add('password');
  cell12.classList.add('dob');
  cell13.classList.add('mobile_no');
  cell14.classList.add('changes');



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
  cell14.innerHTML = '<label onclick="sendDataToForm(' + (rowcount + 1) + ')">Edit</label><br><label onclick="deleteFromStorage(' + (rowcount + 1) + ')">Delete</label';
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

  var fetchedName = $('.tableData tbody').find('._row' + index + ' .firstname')[0].innerText;
  var replaceIndex = 0;
  for (var i of currentArray) {
    if (i._f_firstname != fetchedName) {
      replaceIndex = replaceIndex + 1;
    } else {
      break;
    }
  }


  currentArray[replaceIndex] = editedObject;
  setLocalStorage(JSON.stringify(currentArray));
  updateTableRow(index, firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no);
}

//Sends data from table to form from the row's class name by help of index and fetching their inner texts
function sendDataToForm(index) {

  var findObjectName = $('.tableData tbody').find('._row'+index+' .firstname')[0].innerText;

  var currentArray = getLocalStorage()
  var sendObjectToForm = currentArray.filter(e => {
    if (e != null) {
      return e._f_firstname === findObjectName;
    }
  })[0];

  var formFields=$('.fetchForm');

  for(let i of formFields)
  {
    if(i.name==="firstname")
    {
      i.value=sendObjectToForm._f_firstname;
    }

    else if(i.name==="lastname")
    {
      i.value=sendObjectToForm._f_lastname;
    }

    else if(i.name==="fathername")
    {
      i.value=sendObjectToForm._f_fathername;
    }

    else if(i.name==="gender")
    {
      i.checked= i.value === sendObjectToForm._f_gender;
    }

    if(i.name==="course")
    {
      i.value=sendObjectToForm._f_course;
    }

    else if(i.name==="address")
    {
      i.value=sendObjectToForm._f_address;
    }

    else if(i.name==="city")
    {
      i.value=sendObjectToForm._f_city;
    }

    if(i.name==="state")
    {
      i.value=sendObjectToForm._f_state;
    }

    else if(i.name==="pincode")
    {
      i.value=sendObjectToForm._f_pincode;
    }

    else if(i.name==="emailid")
    {
      i.value=sendObjectToForm._f_emailid;
    }
    if(i.name==="password")
    {
      i.value=sendObjectToForm._f_password;
    }

    else if(i.name==="dob")
    {
      i.value=sendObjectToForm._f_dob;
    }

    else if(i.name==="mobile_no")
    {
      i.value=sendObjectToForm._f_mobile_no;
    }

  }

  setWriteMethod("Update");
  Data.setrowIdtoEdit(index);
}

//Updates the cells of a table row by identifying that row based on index

function updateTableRow(index, firstname, lastname, fathername, gender, course, address, city, state, pincode, emailid, password, dob, mobile_no) {
  var cells=$('.tableData tbody').find('._row'+index+' td');

  for(let i=1; i<arguments.length; i++)
  {
    cells[i-1].innerText=arguments[i];
  }
}

//Deletes an object from the local storage based on an index

function deleteFromStorage(index) {

  var findObjectName = $('.tableData tbody').find('._row'+index+' .firstname')[0].innerText;

  if (index == Data.getrowIdtoEdit()) {
    setWriteMethod("Submit");
  }

  var currentArray = getLocalStorage()
  var objectToDelete = currentArray.filter(e => e._f_firstname === findObjectName)[0];
  currentArray = currentArray.filter(each => each !== objectToDelete);
  setLocalStorage(JSON.stringify(currentArray));

  deletefromTable(index);
}

//Deletes a row from the table

function deletefromTable(index) {
  var fetchedRow = $('.tableData tbody').find('._row'+index)[0];
  fetchedRow.remove();
}


//Get function for write method
function getWriteMethod() {
  return $('.submit')[0].innerText;
}
//Set function for write method
function setWriteMethod(method) {
  $('.submit')[0].innerText = method;
}


//function to validate  first name
function validatename() {
  let form= document.StudentSignupForm;
  if(form.firstname.value == "") {
    alert("Enter your First Name!");
    form.firstname.focus();
    return;
  }
}

//function to validate last name
function validatelastname() {
  let form= document.StudentSignupForm;
  if (form.lastname.value == "") {
    alert("Enter Your Last Name!");
    form.lastname.focus();
    return  ;
  }
}

//function to validate father name
function validatefathername() {
  let form= document.StudentSignupForm;
  if (form.fathername.value == "") {
    alert("Enter Your Father Name!");
    form.fathername.focus();
    return  ;
  }
}

//function to validate gender
function validategender() {
  let form= document.StudentSignupForm;
  if ((StudenSignupForm.gender[0].checked == false) && (StudenSignupForm.gender[1].checked == false)) {
    alert("Choose Your Gender: Male or Female");
    form.gender.focus();
    return ;
  }
}

//function to validate course
function validatecourse() {
  let form= document.StudentSignupForm;
  if (form.course.value == "") {
    alert("Enter the Course Name!");
    form.course.focus();
    return  ;
  }
}

//function to validate address
function validateaddress() {
  let form= document.StudentSignupForm;
  if (form.address.value == "") {
    alert("Enter your address!");
    form.address.focus();
    return  ;
  }
}

//function to validate city
function validatecity() {
  let form= document.StudentSignupForm;
  if (form.city.value == "") {
    alert("Enter your city name!");
    form.city.focus();
    return  ;
  }
}

//function to validate state
function validatestate() {
  let form= document.StudentSignupForm;
  if (form.state.value == "") {
    alert("Enter your state!");
    form.state.focus();
    return  ;
  }
}

//function to validate pincode
function validatepincode() {
  let form= document.StudentSignupForm;
  if (form.pincode.value == "" ||
    isNaN(form.pincode.value) ||
    form.pincode.value.length != 6) {
    alert("Enter your pincode in format ######.");
    form.pincode.focus();
    return ;
  }
}

//function to validate email
function validateemail() {
  let form= document.StudentSignupForm;
  var email = form.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
  if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
    alert("Enter your correct email ID")
    form.emailid.focus();
    return ;
  }
}

//function to validate password
function validatepassword() {
  let form= document.StudentSignupForm;
  if (form.password.value == "") {
    alert("Enter Your Password!");
    form.password.focus();
    return false;
  }
}

//function to validate date of birth
function validatedob() {
  let form= document.StudentSignupForm;
  if (form.dob.value == "") {
    alert("Enter your Date of birth!");
    form.dob.focus();
    return false;
  }
}

//function to validate mobile number
function validatemobileNumber() {
  let form= document.StudentSignupForm;
  if (form.mobile_no.value == "" ||
  isNaN(form.mobile_no.value) ||
  form.mobile_no.value.length != 10) {
  alert("Enter your Mobile No. in the format 123.");
  form.mobile_no.focus();
  return false;
  }
}
