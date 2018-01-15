$(function(){
	
//******************************************************nation***********************************************
	//图片移动
	$(".menggu dt img").hover(function(){		
		$(this).stop().animate({"marginLeft":25},200)
	},function(){
		$(this).stop().animate({"marginLeft":5},200)
	});
	
	
//************************************************personnal*************************************************
	//mask
	$("#personal .team > a").hover(function(){
		$(this).children("p").stop().slideDown(400);
	},function(){		
		$(this).children("p").stop().slideUp(400);
	})
	
	//图片滚动
	function play(){
		timer=setInterval(function(){
		$("#personal .witness div a").eq(0).animate({
			marginLeft:-210
		},1000,function(){
			$(this).css({"marginLeft":23}).appendTo($(".witness div"));
		})
		
	},2000)
	}
	
	timer=setInterval(function(){
		$("#personal .witness div a").eq(0).animate({
			marginLeft:-210
		},1000,function(){
			$(this).css({"marginLeft":23}).appendTo($(".witness div"));
		})
		
	},2000)
	
	$("#personal .witness a").hover(function(){
		clearInterval(timer);
	},play);
	
	
	//shop img
	$("#personal .shopadd li").hover(function(){		
		$(this).find("img").css({"zIndex":"3000"});
		$(this).find("img").stop().animate({
			"width":"120%","left":"-78px","top":"-60px"
		},400)
	},function(){
		$(this).find("img").stop().animate({
			"width":"80%","left":"0","top":"0"
		},400)
	})
	
	
//********************************prodel  页面***************************
	//next
	$("#prodel .pro .next").click(function(){
		var src1=$(this).siblings("a").eq(0).find("img").attr("src");
		var src2=$(this).siblings("a").eq(1).find("img").attr("src");
		var src3=$(this).siblings("a").eq(2).find("img").attr("src");
		$(this).siblings("a").eq(1).find("img").attr("src",src1);
		$(this).siblings("a").eq(2).find("img").attr("src",src2);
		$(this).siblings("a").eq(0).find("img").attr("src",src3);
	})	
	//prev
	
	$("#prodel .pro .prev").click(function(){
		var src1=$(this).siblings("a").eq(0).find("img").attr("src");
		var src2=$(this).siblings("a").eq(1).find("img").attr("src");
		var src3=$(this).siblings("a").eq(2).find("img").attr("src");
		$(this).siblings("a").eq(1).find("img").attr("src",src3);
		$(this).siblings("a").eq(2).find("img").attr("src",src1);
		$(this).siblings("a").eq(0).find("img").attr("src",src2);
	})
	
	//tab 切换
	$(".tabs span").click(function(){		
		var index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(this).parent().siblings("ul").hide().eq(index).show();
	})
	
	//有图评价
	$("#judgeimg").click(function(){
		$(this).parent().siblings().hide().children("p").has("img").parent().show();
	})
	//全部评价
	$("#alljudge").click(function(){
		$(this).parent().siblings().show();
	})
	
	
	//加一减一
	$("#reduce").click(function(){
		var num1=$(this).next().text();
		if(num1>0){
			$(this).next().html(num1-1);
		}
	})
	$("#add").click(function(){
		var num2=parseInt($(this).prev().text());
		$(this).prev().html(num2+1);
	})
	
	//勾选具体内容
	$(".cirsize li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".weight li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	
	//删除评价
	$(".judges li p:last-child").click(function(){
		$(this).parent().remove();
	})
	
//********************************word  页面***************************
	//
	$("#change img").click(function(){
		$(this).css({"zIndex":"2000","borderColor":"#A11715"}).siblings().css({"zIndex":"0","borderColor":"#ececec"});	
	})
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
})
