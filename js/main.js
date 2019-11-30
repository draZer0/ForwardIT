window.onload = function() {


  var toggle = document.getElementById("js--menu-toggle");

  toggle.onclick = (event) => {
    var menu = document.getElementById("js--toggled");
  	var menuStyle = window.getComputedStyle(menu);
  	var display = menuStyle.getPropertyValue('display');

    if (display === 'none') {
      toggle.style.backgroundColor = "#eee";
      menu.style.display = "block";
    } else {
      toggle.style.backgroundColor = "transparent";
      menu.style.display = "none";
    }
  }






}
