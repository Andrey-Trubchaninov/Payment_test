$(document).ready(function(){
//Color change option
    $("select").change(function(){
        if ($(this).val()=="") $(this).css({color: "#aaa"});
        else $(this).css({color: "#000"});
      });
//Allow only letters
      $("#first, #last").on("keydown", function(event){
        // Allow controls such as backspace, tab etc.
        var arr = [8,9,16,17,20,35,36,37,38,39,40,45,46];
      
        // Allow letters
        for(var i = 65; i <= 90; i++){
          arr.push(i);
        }
      
        // Prevent default if not in array
        if(jQuery.inArray(event.which, arr) === -1){
          event.preventDefault();
        }
      });
});

//Change and add classes

function changeClass(){
  document.getElementById("first").className = "border";
}

function changeClass2(){
  document.getElementById("last").className = "border2";
  let check = document.getElementById("check6");
  let check2 = document.getElementById("check3");
  let check3 = document.getElementById("check");

  if ( check.classList.contains("check7") && check2.classList.contains("check3") && check3.classList.contains("check")) {
    document.getElementById("button2").className = "confirm";
  }
}

function changeClass3(){
  document.getElementById("select").className = "border4";
}

function changeClass4(){
  document.getElementById("select2").className = "border3";
}

function addClass(){
  document.getElementById("check").className = "check";
}

function addClass2(){
  document.getElementById("check2").className = "check2";
}

function addClass3(){
  document.getElementById("check3").className = "check3";
}

document.getElementById("first").addEventListener( 'change', changeClass);
document.getElementById("first").addEventListener( 'change', addClass);
document.getElementById("last").addEventListener( 'change', changeClass2);
document.getElementById("last").addEventListener( 'change', addClass2);
document.getElementById("select").addEventListener( 'change', changeClass3);
document.getElementById("select2").addEventListener( 'change', changeClass4);

//Checking the choice of month and date

function change() {
    let select = document.getElementById("select");
    let value = select.options[select.selectedIndex].value;
    let select2 = document.getElementById("select2");
    let value2 = select2.options[select2.selectedIndex].value;

    if(value > 1 && value2 > 1 && value2 < 8) {
      document.getElementById("check3").className = "check3";
      document.getElementById("check4").className = "hidden";
      document.getElementById("select").className = "border4";
    }
    
    if(value2 >= 8) {
      document.getElementById("check4").className = "check4";
      document.getElementById("select").className = "border5";
      document.getElementById("select2").className = "border6";
      document.getElementById("check3").className = "check5";
    }
}

document.getElementById("select2").addEventListener( 'change', change);
document.getElementById("select").addEventListener( 'change', change);

//Сard number check

function cc_format(value) {
  let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  let matches = v.match(/\d{4,16}/g);
  let match = matches && matches[0] || ''
  let parts = []
  for (i=0, len=match.length; i<len; i+=4) {
    parts.push(match.substring(i, i+4))
  }
  if (parts.length) {
    return parts.join(' ')
  } else {
    return value
  }
}

onload = function() {
  document.getElementById('card').oninput = function() {
    this.value = cc_format(this.value);

    if((this.value[0] == 0) || (this.value[0] == 1) || (this.value[0] == 2) || (this.value[0] == 6) || (this.value[0] == 7) || (this.value[0] == 8)) {
      document.getElementById("check7").className = "check9";
    }

    if(this.value.length < 14) {
      document.getElementById("check5").className = "check6";
      document.getElementById("check10").className = "check10";
      document.getElementById("card").className = "border7";
      document.getElementById("check6").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 3)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "check7";
      document.getElementById("card").className = "check8";
      document.getElementById("check10").className = "";
      document.getElementById("check7").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 4)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "check7";
      document.getElementById("card").className = "check8";
      document.getElementById("check10").className = "";
      document.getElementById("check7").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 5)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "check7";
      document.getElementById("card").className = "check8";
      document.getElementById("check10").className = "";
      document.getElementById("check7").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 9)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "check7";
      document.getElementById("card").className = "check8";
      document.getElementById("check10").className = "";
      document.getElementById("check7").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 0)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 1)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 2)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 6)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 7)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "";
    }

    if((this.value.length >= 14) && (this.value[0] == 8)) {
      document.getElementById("check5").className = "hidden2";
      document.getElementById("check6").className = "";
    }
  }
}

function checkDigit(event) {
  let code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}