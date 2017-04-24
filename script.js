$(document).ready(function(){
  'use strict'

var turn = 0;
if (turn<=9){
$('td').click(
  function turnPass(){
    if (turn % 2 === 0){
      $(this).text('x')
      if (turn >= 4){
        winCheck('x')
      }

    } else{
      $(this).text('o')
      if (turn >= 5){
        winCheck('o')
      }
    }
    turn++
  }
)}

function winCheck(player){
  if(
    // horizontal
    $('#1').text() == $('#2').text() && $('#2').text() == $('#3').text() ||
    $('#4').text() == $('#5').text() && $('#5').text() == $('#6').text() ||
    $('#1').text() == $('#2').text() && $('#2').text() == $('#3').text() ||
    //vertical
    $('#1').text() == $('#4').text() && $('#4').text() == $('#7').text() ||
    $('#2').text() == $('#5').text() && $('#5').text() == $('#8').text() ||
    $('#3').text() == $('#6').text() && $('#6').text() == $('#9').text() ||
    //diagonal
    $('#1').text() == $('#5').text() && $('#5').text() == $('#9').text() ||
    $('#3').text() == $('#5').text() && $('#5').text() == $('#7').text()
    ){
    alert(player + ' win')
  } else{
    if(turn ==8){
      alert('draw')
    }}
}

})
