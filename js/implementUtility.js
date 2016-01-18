$(function(){
	//获取当前时间 组成字符：2015012303230730
	$(".newTimeButton").click(function(){
		var newTimeValue=newTime(); 
		$(".newTimeValue").val(newTimeValue);
	}); 
	//生成随机的8位数字字母组成的字符串
	$(".generatePasswordButton").click(function(){
		var generatePasswordValue=generatePassword();
		$(".generatePasswordValue").val(generatePasswordValue);
	}); 
	//遍历数组，去掉数组中重复的字符串
	$(".uniqueButton").click(function(){
		var uniqueValue=$(".uniqueValue").val();
		uniqueValue=uniqueValue.split(",");  
		var uniqueValueNew=unique(uniqueValue);
		var uniqueValueString="";
		for(var i=0;i<uniqueValueNew.length;i++){
			uniqueValueString+=uniqueValueNew[i]+",";
		}
		$(".unique p").text(uniqueValueString.slice(0,uniqueValueString.length-1));
	});
})
