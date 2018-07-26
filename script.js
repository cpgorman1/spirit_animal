$(document).ready(function(){ 
	console.log("Ready!");

	var choices = {'zodiac': '', 'trait': '', 'location': ''};

	$("img").click(function() {
		console.log("clicked image");	
		var chosen_id = $(this).attr('id');
		var chosen_class = $(this).attr('class');

		choices[chosen_class] = chosen_id;

		$("."+chosen_class).each( function() {
			if ( $(this).attr('id') != chosen_id ) {
				$(this).css('opacity', '0.5');
			}
			else {
				$(this).css('opacity', '1.0');
			}
		});
	});
     $("#enter_button").click(function() {
	 });
		 
