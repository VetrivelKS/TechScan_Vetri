(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
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