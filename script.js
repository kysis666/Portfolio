const title = 'github.com/kysis666';
var gozero = 0;

function sliceText() {
  var text = title.slice(0, gozero);
  gozero++;
  document.getElementById("topleft").innerHTML = text;
  if (gozero > title.length + 3) {
    gozero = 0;
  }

}
setInterval(sliceText, 100);

function regex() {
  var str = document.getElementById("check").value;
  var patt = new RegExp(/^(Hello!)$/);
  var res = patt.test(str);

  if (res == true) {
    document.getElementById("check2").style.backgroundColor = "green";
  } else {
    document.getElementById("check2").style.backgroundColor = "red";
  }
}


var i = 0;
var px = 0;

function karuzela_pai() {
  var slider = document.getElementById("slider-container");
  var photo = document.querySelectorAll(".slider-container .slider-img");

  px += photo[i].offsetWidth;

  if (i >= photo.length - 1) {
    i = 0;
    px = 0;
  }

  slider.style.transform = `translate(-${px}px, 0px)`;
  i++;
}

setInterval(karuzela_pai, 1000);