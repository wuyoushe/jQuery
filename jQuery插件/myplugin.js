//为了避免和其他的插件变量的命名冲突
//我们采用匿名函数自调用的方式实现
//function demo(){}
//demo()
(function(){
	jQuery.extend({
		add:function(a,b){
			return a+b;
		},
		sub:function(a,b){
			return a-b;
		}
	});
})()
//将整个函数当成一个整体然后让其执行