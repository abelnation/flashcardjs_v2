require.config({
    baseUrl: "/js",
    paths: {
        "domReady": "bower_libs/requirejs-domready/domReady",
        "text": "bower_libs/requirejs-text/text",
        "knockout": "bower_libs/knockout/dist/knockout"
    },
    waitSeconds: 15
});

require([
    'knockout', 'view_models/AppViewModel', 'domReady!'
], function(ko, AppViewModel) {
    ko.applyBindings(new AppViewModel());
});
