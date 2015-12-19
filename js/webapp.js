angular.module("HEEP", [
    "ngAnimate",
    "ngRoute",
    "angular.directives-chartjs-doughnut" ,
    "angularSoundManager"
])    .config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/list-heeps'
        })
        .when('/first-heep/:step', {
            templateUrl: "../layouts/first-heep.html",
            controller: "firstHeepController"
        })
        .when('/info-heep', {
            templateUrl: "../layouts/info-heep.html",
            controller: "infoHeepController"
        })
        .when('/list-clouds', {
            templateUrl: "../layouts/list-clouds.html",
            controller: "listCloudsController"
        })
        .when('/list-heepers', {
            templateUrl: "../layouts/list-heepres.html",
            controller: "listHeepresController"
        })
        .when('/info-user', {
            templateUrl: "../layouts/info-user.html",
            controller: "infoUserController"
        })
        .when('/list-heeps', {
            templateUrl: "../layouts/list-heeps.html",
            controller: "listHeepsController"
        })
        .when('/list-files', {
            templateUrl: "../layouts/list-files.html",
            controller: "listFilesController"
        })
        .when('/pics/timeline', {
            templateUrl: "../layouts/pics-timeline.html",
            controller: "picsTimelineController"
        })
        .when('/pics/albums/:album_type', {
            templateUrl: "../layouts/pics-albums.html",
            controller: "picsAlbumsController"
        })
        .when('/pics/list-files', {
            templateUrl: "../layouts/pics-list-files.html",
            controller: "picsListFilesController"
        })
        .when('/video/timeline', {
            templateUrl: "../layouts/video-timeline.html",
            controller: "videoTimelinrController"
        })
        .when('/video/albums/:album_type', {
            templateUrl: "../layouts/video-albums.html",
            controller: "videoAlbumsController"
        })
        .when('/video/list-files', {
            templateUrl: "../layouts/video-list-files.html",
            controller: "videoListFilesController"
        })
        .otherwise({
            redirectTo: '/list-heeps'
        })
}]);