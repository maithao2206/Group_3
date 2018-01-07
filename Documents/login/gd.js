var loginBtn = document.getElementsByClassName('login-btn')[0];
var username = document.getElementById('username');

// var login = function () {
//   loginBtn.innerHTML = 'insal';
// }
loginBtn.addEventListener('click', function() {
  this.value = 'insal';
  // loginBtn.innerHTML = 'insal';
});

username.addEventListener('focus', function() {
  this.value = 'Insal'
})
username.addEventListener('focusout', function() {
  this.value = 'hello world'
})

username.addEventListener('keyup', function(e) {
  console.log('keyup');
  // if(e.keyCode === 13) {
  //     console.log('entered ')
  // }
})
username.addEventListener('keydown', function(e) {
  console.log('keydown');
})
// console.log('loginBtn ', loginBtn.innerHTML = 'insal');
console.log('username ', username);
username.value = 'xxxxx';


// click, focusOut, focusIn, onScroll, onChange, onLoad
// keyUp, keyDown


// click login => focus username
// onLoad => alert('Loading')
// onchange on username => - length <= 4 => so weak
//                      => - 4 < length <= 8 => normal
//                      => - length > 8 => so strong