var techList = {"techList":["JavaScript","Java","Python","Php","Ruby"]};
var pageLimit = "&page=1&per_page=9";
var curRepListUrl = "";
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
		curRepListUrl = "https://api.github.com/search/repositories?q="+selectedTech+pageLimit;
		$.get(curRepListUrl, 
		screen2Cbk)
	});
}
var registerScreen2events = function(){
	$("#sort").change(function () {
		var selectedVal =$('#sort option:selected').val();
		if(selectedVal)
		{
			switch(selectedVal) {
				case "bestMatch":
					sortUrl = curRepListUrl +  "&order=desc";
					break;
				case "mostStars":
					sortUrl = curRepListUrl +  "&sort=stars&order=desc";
					break;
				case "fewestStars":
					sortUrl = curRepListUrl +  "&sort=stars&order=asc";
					break;
				case "mostForks":
					sortUrl = curRepListUrl +  "&sort=forks&order=desc";
					break;
				case "fewestForks":
					sortUrl = curRepListUrl +  "&sort=forks&order=asc";
					break;
				case "recentlyUpdated":
					sortUrl = curRepListUrl +  "&sort=updated&order=desc";
					break;
				case "leastRecentlyUpdated":
					sortUrl = curRepListUrl +  "&sort=updated&order=asc";
					break;
				default:
					console.log("default");
			}
					sortUrl += pageLimit;
					$.get(sortUrl,screen2Cbk)
		}
	});
	$('.repName').click(function(e){
		var ownerId = $(e.target).closest(".repositoryItem").attr("userId");
		var ownerDetailsUrl = "https://api.github.com/users/"+ownerId;
		$.get(ownerDetailsUrl,screen3Cbk);
		var ownerReposUrl = ownerDetailsUrl+"/repos";
		$.get(ownerReposUrl,renderUserReposCbk);
	});
}
var screen2Cbk = function(response)
{
	var template = Handlebars.templates['repResults'];
	var content = template(response);
	$('.screen1').hide();
	$('.repResults').text("");
	$('.repResults').append(content);
	registerScreen2events();
}
var screen3Cbk = function(response)
{
	var template = Handlebars.templates['userDetails'];
	var content = template(response);
	$('.userDetails').append(content);
	$('.screen2').hide();
}
var renderUserReposCbk = function(response)
{
	var template = Handlebars.templates['repResults'];
	var content = template({"items":response});
	$('.ownerRepResults').append(content);
}