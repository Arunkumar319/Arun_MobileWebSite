const info = `Fall 2022 Assignment #1 for Arun from  India`;
document.getElementById('information').innerHTML = info;

const info2 = `My Login: Arun Kumar / My ID: 991617387 / My Program: PCPRG`;
document.getElementById('footerinfo').innerHTML = info2;

// Data Picker Initialization
$('.datepicker').datepicker({
    inline: true
  });


  function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        document.getElementById('changecolor1').style.color = 'black';
        document.getElementById('changecolor2').style.color = 'black';
    } else {
        parent.find('input[name =' + fieldName + ']').val(0);
       
       
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
       document.getElementById('changecolor1').style.color = 'red';
       document.getElementById('changecolor2').style.color = 'red';
    }
}

$('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
});




 let inputval = document.querySelector('#Aging').value;
 if( inputval < 20){
    document.querySelector("#Aging").style.backgroundColor = "red";
 }
 else{
    document.querySelector("#Aging").style.color = "black";
 }


 function passvalue() {
    var name = document.getElementById('inputfirstname').value;
    localStorage.setItem("textvalue", name);

    var lname = document.getElementById('inputlastname').value;
    localStorage.setItem("textvalue2", lname);

    var email = document.getElementById('inputEmail').value;
    localStorage.setItem("textvalue3", email);

    var Age = document.getElementById('Aging').value;
    localStorage.setItem("textvalue4", Age);

    var City = document.getElementById('inputState').value;
    localStorage.setItem("textvalue5", City);

    var movie = document.getElementById('inputState2').value;
    localStorage.setItem("textvalue6", movie);

    var date = document.getElementById('date').value;
    localStorage.setItem("textvalue7", date);

    var quantity = document.getElementById('num').value;
    localStorage.setItem("textvalue8", quantity);
    return false;
 }