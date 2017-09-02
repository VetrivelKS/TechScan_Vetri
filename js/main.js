var techList = {"techList":["JavaScript","Java","Python","Php","Ruby"]};

$(function() {
	renderScreen1();
});

var renderScreen1 = function(){
	var template = Handlebars.templates['techList'];
	$('.screen1').append(template(techList));
	registerScreen1events();
}

var registerScreen1events = function(){
		$(".techItem").click(function(e)
		{
			var selectedTech = $(e.target).closest(".techItem").attr("techName");
			$.get("https://api.github.com/search/repositories?q="+selectedTech+"&page=1&per_page=9", 
			screen2Cbk)
		});
}
var screen2Cbk = function()
{
	console.log("s2");
}