angular.module('myApp', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main.html', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

            .when('/find.html', {
                templateUrl: 'views/find.html',
                controller: 'FindCtrl'

            })

            .when('/test.html', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'

            })

            .when("/test2.html", {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl'
            })
            .otherwise({redirectTo: '/main.html'});
    }])
    .run([function () {
        function resizeHeight() {

            document.querySelectorAll('.box>div').forEach(function (item) {
                item.style.height = item.clienWidth;
            });
            document.querySelectorAll(".box>div div").forEach(function (item) {
                console.log(item.className);
                if (item.className == 'item-logo') {
                    item.style.height = item.clientWidth * 0.9 + 'px';

                    console.log(item.style.height);
                }
            });
        }

        window.addEventListener('load', resizeHeight);
        window.addEventListener("resize", resizeHeight);
    }])
    .controller("FindCtrl", ["$scope", "$location", function ($scope, $location) {

        _.requestHybrid({
            tagname: 'updateheader',
            param: {
                style: {
                    backgroundcolor: "#00ff00",
                },
                // title: {
                //     tagname: 'title',
                //     title: "发现",
                //     style: {
                //         color: "#0000ff",
                //         size: 20
                //     }
                // }
            }
        });

        $scope.go = function (url) {

            if (url) $location.path(url);
        };

        $scope.list = [{
            name: "南昌市红谷滩新区丰和社区诊所",
            address: "凤凰中大道1600号附近",
            workTimeRange: "周一至周日全天12小时",
            tel: "0719-63018531",
            url: 'test.html'

        },
            {
                name: "南昌市红谷滩新区丰和社区诊所",
                address: "凤凰中大道1600号附近",
                workTimeRange: "周一至周日全天12小时",
                tel: "0719-63018531"
            },
            {
                name: "南昌市红谷滩新区丰和社区诊所",
                address: "凤凰中大道1600号附近",
                workTimeRange: "周一至周日全天12小时",
                tel: "0719-63018531"
            }, {
                name: "南昌市红谷滩新区丰和社区诊所",
                address: "凤凰中大道1600号附近",
                workTimeRange: "周一至周日全天12小时",
                tel: "0719-63018531"
            }, {
                name: "南昌市红谷滩新区丰和社区诊所",
                address: "凤凰中大道1600号附近",
                workTimeRange: "周一至周日全天12小时",
                tel: "0719-63018531"
            },
            {
                name: "南昌市红谷滩新区丰和社区诊所",
                address: "凤凰中大道1600号附近",
                workTimeRange: "周一至周日全天12小时",
                tel: "0719-63018531"
            }


        ];
    }])

    .controller("MainCtrl", ["$scope", "$location", function ($scope, $location) {

        _.requestHybrid({
            tagname: 'updateheader',
            param: {
                style: {
                    backgroundcolor: "#00ff00",
                }
                // title: {
                //     tagname: 'title',
                //     title: "我是首页",
                //     style: {
                //         color: "#ff0000",
                //         size: 50
                //     }
                //  }
            }
        });

        $scope.go = function (url) {

            if (url) $location.path(url);
        };

        $scope.list = [{
            title: "预约挂号",
            imgUrl: "../images/img_house.png",
            url: 'test.html'
        },
            {
                title: "健康档案",
                imgUrl: "../images/img_luggage.png",
                url: 'test2.html'
            },
            {
                title: "健康咨询",
                imgUrl: "../images/img_sun.png"
            },
            {
                title: "智能导诊",
                imgUrl: "../images/img_rommg.png"
            },
            {
                title: "消息通知",
                imgUrl: "../images/img_information.png"
            },
            {
                title: "诊问支付",
                imgUrl: "../images/img_card.png"
            }
        ];

    }])

    .controller("TestCtrl", ["$scope", function ($scope) {

        _.requestHybrid({
            tagname: 'updateheader',
            param: {
                style: {
                    backgroundcolor: "#00ff00",
                },
                title: {
                    tagname: 'title',
                    title: "我是测试页面",
                    style: {
                        color: "ff00ff",
                        size: 20
                    },
                },

                left: [
                    {
                        icon: 'http://172.16.0.172:3456/images/ic_arrow.png',
                        value: 'back'
                    }
                ]
            }
        });

    }]);