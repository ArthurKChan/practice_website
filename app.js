$(document).ready(main);

function main(){
$('body').prepend('<button class="g-signin"></button>');

var score = 0;
$('body').on('click', '.trigger', function(){
  score++;
  $('body').find('#score').text(score);
});  
  
}
