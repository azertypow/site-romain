
document.onkeypress=function(e){
  document.getElementById("introduction").style.opacity = "0";
}

document.addEventListener('keyup', (event) => {


    if (event.key == '1') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/acier.png')";
      document.getElementById("material_select").innerHTML = "material: Steel";
    }

    if (event.key == '2') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/alu.png')";
      document.getElementById("material_select").innerHTML = "material: Aluminium";
    }

    if (event.key == '3') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/chrome.png')";
      document.getElementById("material_select").innerHTML = "material: Chrome";
    }

    if (event.key == '4') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/nickel.png')";
      document.getElementById("material_select").innerHTML = "material: Nickel";
    }

    if (event.key == '5') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/granite_rouge.png')";
      document.getElementById("material_select").innerHTML = "material: Red Granite";
    }

    if (event.key == '6') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/granite_black.png')";
      document.getElementById("material_select").innerHTML = "material: Marble";
    }

    if (event.key == '7') {
      document.getElementById("imageShow").style.backgroundImage = "url('images/outside.png')";
      document.getElementById("material_select").innerHTML = "material: Chrome";
      document.getElementById("environment_select").innerHTML = "outdoor";
    }
});
