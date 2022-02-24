function desplegarNavMenu() {
    var x = document.getElementById("transNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }