(function(){
	//jQuery.fn代表jQuery的实例将来 调用的时候，可以传递额外的参
	jQuery.fn.changeColor=function(options){
		//默认的配置
		var defaults = {
			foreround:"#fff",
			background:'#000'
		}
		//通常再使用传递的配置和默认的配置合并
		jQuery.extend(defaults,options);
		$(this).css("color",defaults.foreround);
		$(this).css("background",defaults.background);
	}
})();