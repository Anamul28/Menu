const sendForm = () => {
    const firstName = document.getElementById('fname');
    
    const lastName = document.getElementById('lname');
  
    const email = document.getElementById('email');
  
    const phone = document.getElementById('phone');
  
    const date = document.getElementById('date');
  
    const time = document.getElementById('time');
  
    const numberOfGuests = document.getElementById('numberOfGuests');
  
    const specialRequests = document.getElementById('specialRequests');
    if (!firstName.value || !lastName.value || !email.value || !phone.value || !date.value || !time.value || !numberOfGuests.value || !specialRequests.value) {
      alert('all fields are required')
    }
    else {
      // form is valid
    alert('send data to api');    
    }
  }


  
  const menu = document.getElementById("myDropdown");
menu.addEventListener("click", generateMap);

function generateMap(event) {
  if (menu.value == "all") {
    console.log("all");
  } else if (menu.value == "a1") {
    console.log("a1");
  } else if (menu.value == "a2") {
    console.log("a2");
  }
}


/*const menuf = () => {

  const view = document.getElementById("viewall");
  const starter = document.getElementById("start");
  const dessert = document.getElementById("custard");

  


}



view.addEventListener("click", viewall);
starter.addEventListener("click", start);
main.addEventListener("click", mainMenu); */




const menus = document.getElementById("myDropdown");
menu.addEventListener("click", generateMap);

function generateMap(event) {
  if (menus.value == "all") {
    console.log("all");
  } else if (menus.value == "a1") {
    console.log("a1");
  } else if (menus.value == "a2") {
    console.log("a2");
  }
}
/* document.getElementById("viewAll").addEventListener("click", view);
document.getElementById("start").addEventListener("click", starter);
document.getElementById("mainMenu").addEventListener("click", main);
document.getElementById("dessert").addEventListener("click", custard);


const men = () => {




console.log()

} */

 


/* const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
}) */


/* import{getDatabase, ref, set, child, update, remove}
from "firebase/app";
const db = getDatabase ();

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let time = document.getElementById("time");
let numberOfGuests = document.getElementById("numberOfGuests");
let special = document.getElementById("specialRequests"); */



/* function InsertData() {

  set(ref(db, "Menu/"+fname.value),{
      CustomerFirst: fname.value,
      CustomerLast: lname.value,
      CustomerEmail: email.value,
      CustomerPhone: phone.value,
      CustomerDate: date.value,
      CustomerTime: time.value,
      NumberGuest: numberOfGuests.value,
      SpecRequest: specialRequests 




  })

  .then(()=> {

      alert("Data Stored Successfully");




  })

  .catch((error)=>{alert("Unsuccessful, Error"+ error); 


  });

}

insBtn.addEventListener("click",InsertData); */
