## 综述

KOnepageScroll是一个基于CSS3的实现网页翻页效果的组件，同时支持手机端。

* 版本：2.0.0
* 作者：昊川
* 标签：
* demo：[http://kg.kissyui.com/KOnepageScroll/2.0.0/demo/index.html](http://kg.kissyui.com/KOnepageScroll/2.0.0/demo/index.html)


## 配置属性说明
* container				: 容器
* sectionContainer		: 容器中对应的需要翻页的元素
* easing				: transition的效果
* animationTime			: 动画时间
* pagination			: 是否需要页码
* updateURL				: 是否保持url更新
* keyboard				: 是否支持键盘上下键
* beforeMove			: 翻页前事件，传入当前页码
* afterMove				: 翻页后事件，传入当前页码
* loop					: 是否循环

## 初始化组件

    S.use('kg/KOnepageScroll/2.0.0/index', function (S, KOnepageScroll) {
        var KOnepageScroll = new KOnepageScroll({
			"container": ".main",
			"sectionContainer": "section",
			"easing": "ease",
			"animationTime": 2.0.00,
			"pagination": true,
			"updateURL": false,
			"keyboard": true,
			"beforeMove": function(index){},
			"afterMove": function(index){},
			"loop": false
        });
    })

## API说明


## 备注
本组件移植于[One Page Scroll](http://www.thepetedesign.com/demos/onepage_scroll_demo.html)
