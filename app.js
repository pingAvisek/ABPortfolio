// grab date from html
const date = document.getElementById('date');
// take year from date
const year = date.innerHTML.slice(0, 4);

date.innerHTML = new Date().getFullYear();


// // Getting the value from the input field
// let fullName = document.getElementById('fullName');
// let fullNameValue;
// let email = document.getElementById('email');
// let emailValue;
// let message = document.getElementById('message');
// let messageValue;

// fullName.addEventListener('change', function(e) {
//     // console.log(e.target.value);
//     fullNameValue = e.target.value;
// });

// email.addEventListener('change', function(e) {
//     // console.log(e.target.value);
//     emailValue = e.target.value;
// });

// message.addEventListener('change', function(e) {
//     // console.log(e.target.value);
//     messageValue = e.target.value;
// });

// // Function to send the email
// document.getElementById('submit').onclick = function() {
//     let hrefLink = `mailto:theavisekgmre@gmail.com?subject=Hi AB, I'm contacting you from your portfolio website.&body=Full Name: ${fullNameValue}%0D%0AEmail: ${emailValue}%0D%0AMessage:%0D%0A${messageValue}`;
//    document.getElementById('mailMe').setAttribute("href", hrefLink);
//     setTimeout(() => {
//         document.location.reload();
// }, 2000);
// };


// gcaptcha

function onSubmit(token) {
     document.getElementById("submit").submit();
   }