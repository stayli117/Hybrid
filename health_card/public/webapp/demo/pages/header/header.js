define([
    'BaseView',
    'text!PagePath/header/tpl.layout.html',
    'text!StylePath/common.css'
], function (AbstractView,
    layoutHtml,
    commonStyle) {

        return _.inherit(AbstractView, {
            propertys: function ($super) {

                $super();
 
                _.requestHybrid({
                    tagname: 'updateheader',
                    param: {
                        pageLevel: 0,
                        style: {
                            backgroundcolor: "#fffff0"
                        },
                        title: {
                            tagname: 'title',
                            title: "我是header测试"
                        }
                    }
                });

                this.template = layoutHtml;
                this.commonstyle = commonStyle;

                this.events = {
                    'click .js-setheader0': function () {

                        _.requestHybrid({
                            tagname: 'updateheader',
                            param: {
                                style: {
                                    backgroundcolor: "#00ff00",
                                },
                                title: {
                                    tagname: 'title',
                                    title: "我是抬头",
                                    style: {
                                        color: "#ff0000",
                                        size: 50
                                    }
                                }
                            }
                        });
                    },

                    'click .js-setheader1': function () {
                        _.requestHybrid({
                            tagname: 'updateheader',
                            param: {
                                style: {
                                    backgroundcolor: "#00ff00"
                                },
                                title: {
                                    tagname: 'title',
                                    title: '主标题',
                                    subtitle: '子标题'
                                }
                            }
                        });
                    },
                    'click .js-setheader2': function () {

                        _.requestHybrid({
                            tagname: 'updateheader',
                            param: {
                                title: {
                                    tagname: 'title',
                                    title: "标题左右图标",
                                    lefticon: 'http://images2015.cnblogs.com/blog/294743/201511/294743-20151102143118414-1197511976.png',
                                    righticon: 'http://images2015.cnblogs.com/blog/294743/201511/294743-20151102143118414-1197511976.png',
                                },
                            }
                        });

                    },
                    'click .js-setheader3': function () {

                        _.requestHybrid({
                            tagname: 'updateheader',
                            param: {
                                title: {
                                    tagname: 'title',
                                    title: "右边图标"
                                },
                                right: [
                                    {
                                        value: 'search',
                                        icon: 'http://images2015.cnblogs.com/blog/294743/201511/294743-20151102143118414-1197511976.png',
                                    }
                                ]
                            }
                        });
                    },
                    'click .js-setheader4': function () {
                        var opts = {
                            view: this,
                            back: function () {
                                sss11.show()
                                this.back();

                            },
                            title: '右边点击'
                        };
                        this.header.set(opts);

                        
                    },
                    'click .js-setheader5': function () {
                        this.header.hide();
                    },
                    'click .js-setheader6': function () {
                        this.header.show();
                    }
                }

            },

            initHeader: function () {
                var opts = {
                    view: this,
                    title: 'Header Demo',
                    back: function () {
                        this.back();
                    }
                };
                this.header.set(opts);
            },

            initElement: function () {

            },

            addEvent: function ($super) {
                $super();

                this.on('onShow', function () {


                });
            }

        });

    });
