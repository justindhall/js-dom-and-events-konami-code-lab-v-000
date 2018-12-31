const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[i] === key) {
      i++;

      if (i === code.length) {
        alert('Huzzah, nerd');

      }
    } else {
      i = 0;
    }
  });
}

init();