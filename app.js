// grab date from html
const date = document.getElementById('date');
// take year from date
const year = date.innerHTML.slice(0, 4);

date.innerHTML = new Date().getFullYear();