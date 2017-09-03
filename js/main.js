var techList = {"techList":["JavaScript","Java","Python","Php","Ruby"]};
var curRepListUrl = "",selectedTech="",seletedUserId="",ownerDetailsUrl="";
var screen2Total,screen3Total = 0;
var screen2NextLimit=1,screen3NextLimit = 1;
var selectedSort="";
$(function() {
	renderScreen1();
});

var renderScreen1 = function(){
	var template = Handlebars.templates['techList'];
	$('.screen1').append(template(techList)).addClass("shown");
	registerScreen1events();
}

var registerScreen1events = function(){
	$(".techItem").click(function(e)
	{
		if(!($('.techItem').hasClass("clicked")))
		{
			$(e.target).closest('.techItem').addClass("clicked");
			$(".loading").show();
			screen2NextLimit = 1;
			selectedSort = "";
			selectedTech = $(e.target).closest(".techItem").attr("techName");
			curRepListUrl = "https://api.github.com/search/repositories?q="+selectedTech+selectedSort+"&page="+screen2NextLimit+"&per_page=9";
			$.get(curRepListUrl, 
			function(response){
				screen2Cbk(response,false);
				});
		}
	});
	$(".backButton").click(function(e){
		var moveTo = $(e.target).attr("moveTo");
		$(".screen").addClass("hidden").removeClass("shown");
		$("."+((moveTo=="s1")?"screen1":"screen2")).removeClass("hidden").addClass("shown");
	});
	$('.screensCont').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            if($(".shown").hasClass("screen2"))
			{
				if( screen2Total > (screen2NextLimit*9) )
				{
					curRepListUrl = "https://api.github.com/search/repositories?q="+selectedTech+selectedSort+"&page="+screen2NextLimit+"&per_page=9";
					$(".loading").show();
					$.get(curRepListUrl, 
					function(response){
				screen2Cbk(response,false);
					});
				}
			}
			else
			{
				if(screen3Total > (screen3NextLimit*9))
				{
					ownerDetailsUrl = "https://api.github.com/users/"+seletedUserId+"/repos"+"?page="+screen3NextLimit+"&per_page=9";
					$(".loading").show();
					$.get(ownerDetailsUrl, 
					renderUserReposCbk)
				}
			}
        }
    });
}
var registerScreen2events = function(){
	$("#sort").change(function () {
		var selectedVal =$('#sort option:selected').val();
		curRepListUrl = "https://api.github.com/search/repositories?q="+selectedTech;
		if(selectedVal)
		{
			switch(selectedVal) {
				case "bestMatch":
					selectedSort = "&order=desc";
					break;
				case "mostStars":
					selectedSort =  "&sort=stars&order=desc";
					break;
				case "fewestStars":
					selectedSort = "&sort=stars&order=asc";
					break;
				case "mostForks":
					selectedSort =  "&sort=forks&order=desc";
					break;
				case "fewestForks":
					selectedSort = "&sort=forks&order=asc";
					break;
				case "recentlyUpdated":
					selectedSort = "&sort=updated&order=desc";
					break;
				case "leastRecentlyUpdated":
					selectedSort = "&sort=updated&order=asc";
					break;
				default:
					selectedSort = "";
			}
			var limit = (screen2NextLimit-1) ? (screen2NextLimit-1):screen2NextLimit;
			var sortUrl  = curRepListUrl+ selectedSort + "&page=1&per_page="+(limit*9);
			if(!$("#sort").hasClass("clicked"))
			{
				$("#sort").addClass("clicked");
				$.get(sortUrl,function(response){
				$("#sort").removeClass("clicked");
				screen2Cbk(response,true);
				});
			}
		}
	});
	$('.repName').click(function(e){
		if(!($('.repName').hasClass("clicked")))
		{
			$(e.target).closest('.repName').addClass("clicked");
			console.log(event.target);
			screen3NextLimit = 1;
			seletedUserId = $(e.target).closest(".repositoryItem").attr("userId");
			var ownerDetailsUrl = "https://api.github.com/users/"+seletedUserId;
			$.get(ownerDetailsUrl,screen3Cbk);
			var ownerReposUrl = ownerDetailsUrl+"/repos"+"?page="+screen3NextLimit+"&per_page=9";
			$.get(ownerReposUrl,renderUserReposCbk);
		}
	});
}
var screen2Cbk = function(response,sort)
{
	$('.techItem').removeClass("clicked");
	var template = Handlebars.templates['repResults'];
	var content = template(response);
	if(	screen2NextLimit == 1 || (sort))
	{
		$(".screen").addClass("hidden").removeClass("shown");
		$(".screen2").removeClass("hidden").addClass("shown");
		$('.repResults').text("");
	}
	$(".loading").hide();
	$('.repResults').append(content);
	$('.repositoryCount').text(response.total_count+" ");
	screen2Total = response.total_count;
	registerScreen2events();
	!sort && screen2NextLimit++;
}
var screen3Cbk = function(response)
{
	screen3NextLimit =1;
	$('.repName').removeClass("clicked");
	 screen3Total = response.public_repos;
	var template = Handlebars.templates['userDetails'];
	var content = template(response);
	$('.userDetails').text("");
	$('.userDetails').append(content);
	$(".screen").addClass("hidden").removeClass("shown");
	$(".screen3").removeClass("hidden").addClass("shown");
	
}
var renderUserReposCbk = function(response)
{
	var template = Handlebars.templates['repResults'];
	var content = template({"items":response});
	if(	screen3NextLimit == 1)
	{
		$('.ownerRepResults').text("");
	}
	$(".loading").hide();
	$('.ownerRepResults').append(content);
	screen3NextLimit++;
	$('.repName').removeClass("clicked");
}
setInterval(function () {
   var vis = $(".loading").css("visibility");
   vis = (!vis || vis == "visible") ? "hidden" : "visible";
   $(".loading").css("visibility", vis);
}, 500);
