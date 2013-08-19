# angular-external-apps-poc

angular framework, that can load external apps written in angular

## in short

trying to create a framework, that can host a various amount of small apps,
later users should be able to 'install' an app (binding it to their user profile).

when the user clicks the app in the sidebar it should load the dependencies and boot up the app.

## input

you can give input on this on:
* stack overflow (http://stackoverflow.com/questions/18184617/angularjs-how-to-nest-applications-within-an-angular-app)
* google groups (https://groups.google.com/forum/#!topic/angular/5niS0ApAKvE)

## challenges

* however, at the moment i'm stuck at the booting of the app. scripts are loaded but have no relation to the framework,
so the loaded template does not find the controllers it wants to use.
* css file is currently hard coded in index, should also load dynamically on app startup.
* not sure if it will cause problems but currently they are loaded, and seem to be nested in the framework app. as they are loaded in the ng-view of the framework. not sure if there is an other solution.
