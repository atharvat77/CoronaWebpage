  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCntok63X4lO5YN8cbl1-4wbvn0NPGf2YU",
    authDomain: "coronatesting-2a241.firebaseapp.com",
    databaseURL: "https://coronatesting-2a241.firebaseio.com",
    projectId: "coronatesting-2a241",
    storageBucket: "coronatesting-2a241.appspot.com",
    messagingSenderId: "577311799498",
    appId: "1:577311799498:web:52ea7538a7034427135c33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById("testForm").addEventListener("submit",submitForm);
  var db=firebase.database().ref("My Users");
  function submitForm(e)
  {
    e.preventDefault();
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var mobile=document.getElementById('mobile').value;
    var state=document.getElementById('state').value;
    readState(state);
    var email=document.getElementById('email').value;
    var profession=document.getElementById('profession').value;
    var dob=document.getElementById('dateofbirth').value;
    var saver=db.push();
    saver.set({
      FirstName:fname,
      LastName:lname,
      Mobile:mobile,
      State:state,
      Email:email,
      Profession:profession,
      DOB:dob,
    });
    alert("Your data has been saved sucessfully");
  }

 /* function readState(state)
  {
    var centers;
    var next=firebase.database().ref(state);
    next.on('value',(data)=>
    {
      centers=data.val;
      document.getElementById("result").innerHTML="<br>"+centers.toUpperCase();
    }
    )
  }*/

  function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
  })}















  /*document.getElementById("testForm").addEventListener("submit",submitForm)
  var UserInputsRef=firebase.database().ref('UserData');
  //                main folder mein ek folder bnao UserData naam ka

  function submitForm(e)
  {
    e.preventDefault();
    var fname=document.getElementById('firstname').value;
    var lname=document.getElementById('lastname').value;
    var mobile=document.getElementById('mobile').value;
    var state=document.getElementById('state').value;
    var email=document.getElementById('email').value;
  
    var profession=document.getElementById('profession').value;
    var dob=document.getElementById('dateofbirth').value;
    var selectedOption = document.querySelector('input[name = option]:checked').value;
    var symptomsList =getSelectedCheckboxValues('symptoms');
    
    readState(state);
    var status=validateEmail(email);
    if(status==true){
    var saver=UserInputsRef.push();
    saver.set({
      FirstName:fname,
      LastName:lname,
      Mobile:mobile,
      State:state,
      Email:email,
      Profession:profession,
      Dob:dob,
      SelectedOption:selectedOption,
      Symptoms:symptomsList,
    })
    alert("data saved succesfully");}
  }

  function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
  })}

  function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;


function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}*/


























  /*var UserInputsRef=firebase.database().ref('UserData');
  document.getElementById('testForm').addEventListener('submit',submitForm)

  function submitForm(e)
  {
    e.preventDefault();
    var fname=document.getElementById('firstname').value;
    var lname=document.getElementById('lastname').value;
    var mobile=document.getElementById('mobile').value;
    var state=document.getElementById('state').value;
    var email=document.getElementById('email').value;
    var profession=document.getElementById('profession').value;
    var dob=document.getElementById('dateofbirth').value;
    var symptomsList =getSelectedCheckboxValues('symptoms');
    var selectedOption = document.querySelector('input[name = option]:checked').value;


    var saver=UserInputsRef.push();
    saver.set({
      FirstName:fname,
      LastName:lname,
      Mobile:mobile,
      State:state,
      Email:email,
      Profession:profession,
      Dob:dob,
      Symptoms:symptomsList,
      SelectedOption:selectedOption
    })

    readState(state);
    alert("Your detail has been saved successfully");
  }

  function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function readState(state=delhi){
  var centers;
  var ref = firebase.database().ref(state);
  ref.on('value', (data) => {
   centers = data.val();
   document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
})}
  

*/


  /*function submitForm(e){
    e.preventDefault();
    var fname =getInputVal('firstname');
    var lname =getInputVal('lastname');
    var mobile =getInputVal('mobile');
    var state =getInputVal('state');
    state=state.toLowerCase();
  
    var email =getInputVal('email');
    var emailstatus=validateEmail();
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    var symptomsList =getSelectedCheckboxValues('symptoms');
    var selectedOption = document.querySelector('input[name = option]:checked').value;
    if(emailstatus)
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList);

}




function getInputVal(id){
    return document.getElementById(id).value;
}



function readState(state){
  var centers;
  var ref = firebase.database().ref(state);
  ref.on('value', (data) => {
   centers = data.val();
   document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
})}

function saveMessages(name,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList){
    var newuserInputsRef = UserInputsRef.push();
    newuserInputsRef.set({
        name:name,
        mobile:mobile,
        email:email,
        profession:profession,
        dateofbirth:dateofbirth,
        selectedOption:selectedOption,
        state:state, 
        symptomsList:symptomsList
    })
    alert("Thank you, find the list of centers nearby!  ");
}

function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}*/






















