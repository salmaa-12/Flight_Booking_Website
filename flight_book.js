function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    // document.getElementById("myDropdown-2").classList.toggle("show-2");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i ;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction2(){
    document.getElementById("myDropdown-2").classList.toggle("show-2");
  }

  window.onclick = function(event) {
  if(!event.target.matches('.dropbtn2')){
    for (j = 0; j < dropdowns2.length; j++) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content-2");
      var j;
      var openDropdown2 = dropdowns2[j];
      if (openDropdown2.classList.contains('show-2')) {
        openDropdown2.classList.remove('show-2');
      }
    }
  } 
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "80px";
    document.getElementById("header").style.transition= "height 0.5s";
    
  } else {
    document.getElementById("header").style.height = "90px";
  }
}

