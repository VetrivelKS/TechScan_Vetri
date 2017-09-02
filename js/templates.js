(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['repResults'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"repositoryItem \" repId=\""
    + alias4(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data}) : helper)))
    + "\">\r\n		<div class=\"repDetailsCont\">\r\n			<div class=\"repName\">"
    + alias4(((helper = (helper = helpers.full_name || (depth0 != null ? depth0.full_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data}) : helper)))
    + "\r\n			</div>\r\n			<div class=\"repDesc\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\r\n			</div>\r\n			<div class=\"repUpdatedDate\">Updated "
    + alias4((helpers.updatedDate || (depth0 && depth0.updatedDate) || alias2).call(alias1,(depth0 != null ? depth0.updated_at : depth0),{"name":"updatedDate","hash":{},"data":data}))
    + "</div>\r\n		</div>\r\n		<div class=\"repLangCont\">\r\n			<div class=\"repLangUsed\">"
    + alias4(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data}) : helper)))
    + "</div>\r\n		</div>\r\n		<div class=\"repRatingCont\">\r\n			<div class=\"ratingText\">"
    + alias4((helpers.starCount || (depth0 && depth0.starCount) || alias2).call(alias1,(depth0 != null ? depth0.stargazers_count : depth0),{"name":"starCount","hash":{},"data":data}))
    + "\r\n			</div>\r\n		</div>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['techList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"techItem "
    + alias2(alias1(depth0, depth0))
    + "\" techName=\""
    + alias2(alias1(depth0, depth0))
    + "\">\r\n		<div class=\"techLabel\">"
    + alias2(alias1(depth0, depth0))
    + "\r\n		</div>\r\n		<div class=\""
    + alias2(alias1(depth0, depth0))
    + " TechImg\"\">\r\n		</div>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"techList\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.techList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();