$(function(){
	/************************首页************************/
	//点击搜索框拉长
	$("#search").focus(function(){
		$(this).width("150px");
	}).blur(function(){
		$(this).width("90px");
	});
	//鼠标滑动下边线
	$(".mainNav > ul > li > a").mouseover(function(){		
		var width=$(this).innerWidth();
		var left=$(this).offset().left;
		var fleft=$(".mainNav").offset().left;
		var spanleft=left-fleft;
		$(".mainNav span").stop().animate({left:spanleft},200).width(width);
	});
	$(".mainNav").hover(function(){
		$(".mainNav span").show();
	},function(){
		$(".mainNav span").hide();
	});
});
