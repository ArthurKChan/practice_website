$(document).ready(main);

function main(){
$('body').append("<p>This is my first paragraph of words</p>");
$('body').append("<h4>UNORDERED LIST JUNK</h4>");
$('h4').after("<ul class='list'></ul>");
$('body').find('.list').append("<li>hello</li>");

$('body').prepend('<button class="g-signin"></button>');



}
