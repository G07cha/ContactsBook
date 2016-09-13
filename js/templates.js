angular.module("ContactsList").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html><html lang=en ng-csp ng-app=ContactsList><head><base href=\"/\"><meta charset=utf-8><meta http-equiv=x-ua-compatible content=\"ie=edge\"><title>AngularJS Boilerplate</title><meta name=HandheldFriendly content=True><meta name=MobileOptimized content=320><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=\"shortcut icon\" type=image/x-icon href=images/favicon.ico><meta name=msapplication-TileColor content=#f01d4f><link rel=stylesheet href=bower_components/bootstrap/dist/css/bootstrap.min.css><link rel=stylesheet type=text/css href=styles/style.css></head><body class=main-wrapper><main-layout></main-layout><div data-ng-view class=container></div></body><script type=text/javascript src=/bower_components/jquery/dist/jquery.min.js></script><script type=text/javascript src=/bower_components/bootstrap/dist/js/bootstrap.min.js></script><script type=text/javascript src=bower_components/angular/angular.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angular-route/angular-route.js></script><script type=text/javascript src=bower_components/angularUtils-pagination/dirPagination.js></script><script type=text/javascript src=app/app.js></script><script type=text/javascript src=app/config.js></script><script type=text/javascript src=components/services/LocalStorage.service.js></script><script type=text/javascript src=components/directives/main.layout.directive.js></script><script type=text/javascript src=components/directives/typed.list.directive.js></script><script type=text/javascript src=app/serverData.js></script><script type=text/javascript src=app/controllers/dashboardCtrl.js></script><script type=text/javascript src=app/controllers/contactsCtrl.js></script><script type=text/javascript src=app/controllers/editCtrl.js></script><script>\n	    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n	    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n	    e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n	    e.src=\'https://www.google-analytics.com/analytics.js\';\n	    r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\n	    ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');\n	</script></html>");
$templateCache.put("components/pagination.tpl.html","<ul class=\"pager custom-pager pull-right\"><li ng-if=directionLinks ng-class=\"{ disabled : pagination.current == 1 }\"><a ng-click=\"setCurrent(pagination.current - 1)\">&larr; Prev</a></li><li ng-repeat=\"pageNumber in pages track by tracker(pageNumber, $index)\" ng-class=\"{ disabled : pageNumber == \'...\' }\"><a ng-class=\"{ active : pagination.current == pageNumber}\" ng-click=setCurrent(pageNumber)>{{ pageNumber }}</a></li><li ng-if=directionLinks ng-class=\"{ disabled : pagination.current == pagination.last }\"><a ng-click=\"setCurrent(pagination.current + 1)\">Next &rarr;</a></li></ul>");
$templateCache.put("views/contacts.html","<div class=page-header><h2>Contact List</h2></div><div class=row><div class=col-md-3><label for=contacts-search>Quick Find Contacts:</label></div><div class=col-md-5><input type=text class=\"form-control do-not-override\" id=contacts-search ng-model=contacts.search placeholder=\"Type Here\"></div><div class=col-md-4><div class=pull-right><a href=#edit><button type=button name=\"Add contacts\" id=add-contact class=\"btn btn-default\">Add Contact</button></a></div></div></div><br><table class=\"table table-striped\"><tr><th>#</th><th>Name</th><th>Email Address</th><th>Contact No</th></tr><tr dir-paginate=\"con in contacts.list | filter: contacts.search | itemsPerPage: 5\"><td ng-bind=con.id></td><td><a ng-href=\"#edit/{{con.id - 1}}\" ng-bind=\"con.firstname + \' \' + con.lastname\"></a></td><td><div ng-repeat=\"email in con.emails\"><span class=itemname ng-bind=email.type.name></span>: <span ng-bind=email.value></span></div></td><td><div ng-repeat=\"phone in con.phones\"><span class=itemname ng-bind=phone.type.name></span>: <span ng-bind=phone.value></span></div></td></tr></table><dir-pagination-controls template-url=components/pagination.tpl.html></dir-pagination-controls>");
$templateCache.put("views/dashboard.html","");
$templateCache.put("views/edit.html","<div class=page-header><h2>Contact Form</h2></div><div class=row><div class=col-md-12><div class=pull-right><button type=button ng-click=edit.save() class=\"btn btn-default\" id=add-contact>Add Contact</button></div></div></div><form id=edit-form ng-submit=edit.save()><div class=row><div class=col-md-2><label for=firstname>First Name:</label></div><div class=col-md-10><input type=text class=form-control ng-model=edit.contact.firstname required id=firstname placeholder=\"Enter the First Name\"></div></div><div class=row><div class=col-md-2><label for=lastname>Last Name:</label></div><div class=col-md-10><input type=text class=form-control ng-model=edit.contact.lastname required id=lastname placeholder=\"Enter the Last Name\"></div></div><typed-list title=Email: placeholder=\"Enter Email Address\" type=email types=edit.types items=edit.contact.emails></typed-list><typed-list title=\"Phone No:\" placeholder=\"Enter Phone No\" type=tel types=edit.types ontypechange=edit.setPhonePrefix items=edit.contact.phones></typed-list><hr><div class=pull-right><button type=submit class=\"btn btn-default\">Save</button> <a href=#contacts><button type=button class=\"btn btn-default\">Cancel</button></a></div></form>");
$templateCache.put("components/directives/main-layout.html","<header><h4>Logo</h4></header><div id=sidebar-wrapper><ul class=sidebar-nav><li><a href=#>Dashboard</a></li><li><a href=#contacts>Contacts</a></li></ul></div>");
$templateCache.put("components/directives/typed-list.html","<div class=\"row page-header\"><div class=\"col-md-11 col-sm-10 col-xs-10\"><label ng-bind=title></label></div><div class=\"col-md-1 col-sm-1 col-xs-1\"><button type=button class=\"btn btn-default btn-circle\" ng-click=add()>+</button></div></div><div class=row ng-repeat=\"item in items\"><div class=\"col-md-2 col-sm-3 col-xs-4\"><select class=form-control ng-options=\"t.name for t in types track by t.value\" ng-change=ontypechange()($index) ng-model=item.type></select></div><div class=\"col-md-9 col-sm-7 col-xs-6\"><input type={{type}} required class=form-control ng-model=item.value placeholder={{placeholder}}></div><div class=\"col-md-1 col-sm-2 col-xs-2\"><button type=button class=\"btn btn-default btn-circle\" ng-click=remove($index)>-</button></div></div>");}]);