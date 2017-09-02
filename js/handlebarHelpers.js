Handlebars.registerHelper("starCount", function(count) {
	if(count>1000)
	{
		return (count/1000).toFixed(1)+"k";
	}
	else
	{
		return count;
	}
});
Handlebars.registerHelper("updatedDate", function(updatedOn) {
	var currTime = new Date();
	var updatedDate = new Date(updatedOn);
	var timeDiff = Math.abs(currTime.getTime() - updatedDate.getTime());
	var diffHours = Math.floor(timeDiff / 1000 / 60 / 60);

	if(diffHours == 0)
	{
		return Math.floor((timeDiff / 1000 / 60 / 60 )*10) +" mins ago";
	}
	else if(diffHours<24)
	{
		return diffHours+" hours ago";
	}
	else if(diffHours <48)
	{
		var diffDays = Math.abs(Math.ceil(timeDiff / (1000 * 3600 * 24)));
		return "1 day ago";
	}
	else if(diffHours <(24*31))
	{
		var diffDays = Math.abs(Math.ceil(timeDiff / (1000 * 3600 * 24)));
		return diffDays+" days ago";
	}
	else
	{
		var dateSplit = updatedDate.toString().split(" ");
		return "on "+dateSplit[1]+" "+dateSplit[2]+","+dateSplit[3];
	}
});