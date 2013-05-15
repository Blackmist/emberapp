Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("My Great Blog");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-book icon-white\"></i> Posts");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-pencil icon-white\"></i> Write");
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\r\n            <li>\r\n              <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\"><i class=\"icon-remove icon-white\"></i> Logout</a>\r\n            </li>\r\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\r\n            <li class=\"dropdown\">\r\n              <a id=\"loginproviders\" href=\"#\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"icon-user icon-white\"></i> Login <b class=\"caret\"></b>\r\n              </a>\r\n              <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"loginproviders\">\r\n                <li role=\"presentation\"><a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", "twitter", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">Twitter</a></li>\r\n                <li role=\"presentation\"><a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", "google", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"#\">Google</a></li>\r\n              </ul>\r\n            </li>\r\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"navbar navbar-inverse\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"container\">\r\n      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </a>\r\n      ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("brand")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n      <div class=\"nav-collapse collapse\">\r\n        <ul class=\"nav\">\r\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "posts", options) : helperMissing.call(depth0, "linkTo", "posts", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\r\n          <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "newpost", options) : helperMissing.call(depth0, "linkTo", "newpost", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\r\n          ");
  hashTypes = {};
  stack2 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\r\n  <li>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\r\n");
  return buffer;
  }

  data.buffer.push("<ul>\r\n");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</ul>\r\n");
  return buffer;
  
});

Ember.TEMPLATES["newpost"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\r\n  <div class=\"span12\">\r\n    ");
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("title"),
    'class': ("span6"),
    'placeholder': ("Title")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n  </div>\r\n\r\n  <div class=\"span12\">\r\n    ");
  hashTypes = {'valueBinding': "STRING",'class': "STRING",'rows': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextArea", {hash:{
    'valueBinding': ("body"),
    'class': ("span8"),
    'rows': ("6"),
    'placeholder': ("Your blog goes here")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n  </div>\r\n  <div class=\"span12\">\r\n    <button ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn\">Save</button>\r\n  </div>\r\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n  <div class=\"alert alert-info\">\r\n    <p>You don't appear to be logged in. Please select a login provider from the <strong>Login</strong> menu.</p>\r\n  </div>");
  }

  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\r\n<h4>by ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "author", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(", <small>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "posted", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</small></h4>\r\n\r\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "body", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n");
  return buffer;
  
});

Ember.TEMPLATES["posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\r\n        <li>\r\n          ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "post", "", options) : helperMissing.call(depth0, "linkTo", "post", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n        </li>\r\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"container-fluid\">\r\n  <div class=\"row-fluid\">\r\n    <div class=\"span3\">\r\n      <ul class=\"nav nav-tabs nav-stacked\">\r\n      ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </ul>\r\n    </div>\r\n    <div class=\"span7\">\r\n      ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n    </div>\r\n  </div>\r\n</div>");
  return buffer;
  
});