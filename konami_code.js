const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let i = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || ewhich);
  
  if (key === code[i]) {
    i++;
    
    if(i === code.length) {
      alert("huzzah, nerd")
    }
  }
}