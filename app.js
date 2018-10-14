var colorSelect = $('#colorPicker');
var submitButton= $('.submitButton'); //defines the submitButton variable
var canvas= $('#pixelCanvas'); //defines the canvas variables
var maxWidth= 50;
var maxHeight=50;
var minHeight=0;
var minWidth=0;
var heightDefault=20;
var widthDefault=20;
var tableRow= ('<tr></tr>');
var tableColumn= ('<td></td>');
var colorDefault= '#000000';
var menuIsOpen = true;
//making your grid:
$('.submitButton').on('click' , function makeGrid(evt){
  evt.preventDefault();
  canvas.children().remove();

  var height;

  if ($('#inputHeight').val() > 50) {
    alert('Please limit height to 50 or less')
  } else {
    height=$('#inputHeight').val(); //defines the height variable
  }

  var width;

  if ($('#inputWidth').val() > 50) {
    alert('Please limit width to 50 or less')
  } else {
    width=$('#inputWidth').val(); //defines the width variable
  }

  for (var i=1; i<= height; i++){
    canvas.append(tableRow);
    for (var j=1; j<= width; j++){
      canvas.find('tr').last().append(tableColumn);
    }
  }
});


colorSelect.change(function(){
var color= $('#colorPicker').val(); //defines the variable color
});

canvas.on('click', 'td', function() {
  var color = $('#colorPicker').val();
  $(this).css('background-color', color);
});

canvas.on('dblclick', 'td', function() {
  $(this).css('background-color', 'transparent');
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
$('#mySidenav').css('width', '250px');
$('#main').css('marginLeft', '250px');

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
$('#mySidenav').css('width', '0');
$('#main').css('marginLeft','0');
};

function toggleNav() {
if(menuIsOpen) {
  closeNav();
  menuIsOpen = false;
} else {
  openNav();
  menuIsOpen = true;
}
}

$('#menu').on('click', toggleNav);
