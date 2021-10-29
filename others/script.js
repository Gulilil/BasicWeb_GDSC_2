function myFunction(a, b, c) {
    var dots = document.getElementById(a);
    var moreText = document.getElementById(b);
    var btnText = document.getElementById(c);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }


function modalFunc(a,b,c) {
  const open = document.getElementById(a);
  const modal_container = document.getElementById(b);
  const close = document.getElementById(c);

  open.addEventListener('click', () => {
    modal_container.classList.add('show')
  })
  close.addEventListener('click', () => {
    modal_container.classList.remove('show')
  })
  }