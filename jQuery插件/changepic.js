(function(){
	jQuery.fn.changePic=function(options={}){
		var defaults={
			times:1000
		};
		jQuery.extend(defaults,options);
		var now = $(this).attr('src').substr(4,1);
		var This=$(this);
		setInterval(function(){
			now++;
			if(now>8){
				now=1
			}
			//在setInterval计时器中，$(this)表示的是window对象
			This.attr('src',"img/"+now+".jpg");
		},defaults.times);
	};
})()

