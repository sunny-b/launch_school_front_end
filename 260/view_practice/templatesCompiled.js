(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Favorite Colors</h1>\n<ul id=\"favorites\"></ul>\n<button class=\"add\">Add Person</button>";
},"useData":true});
templates['colors'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<h2>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['modal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"newModal\">\n<form>\n  <fieldset>\n    <dl>\n      <dt><label for=\"name\">Name</label></dt>\n      <dd><input name=\"name\" id=\"name\" type=\"text\" required></dd>\n      <dt><label for=\"colors\">Three Favorite Colors</label></dt>\n      <dd><input name=\"colors\" id=\"colors\" type=\"text\" placeholder=\"Separated by space\" required></dd>\n    </dl>\n  </fieldset>\n\n  <fieldset>\n    <button class=\"btn-add\" type=\"submit\">Add</button>\n    <button class=\"btn-cancel\">Cancel</button>\n  </fieldset>\n</form>\n</div>\n";
},"useData":true});
})();