//获取当前时间 组成字符：2015012303230730
function newTime(){ 
	var datetime=new Date;
	var year = datetime.getFullYear();
	var month = datetime.getMonth() + 1; //js从0开始取 
	var date = datetime.getDate();
	var hour = datetime.getHours();
	var minutes = datetime.getMinutes();
	var second = datetime.getSeconds();
    var millisecond=datetime.getMilliseconds();
	if (month < 10) {
		month = "0" + month;
	}
	if (date < 10) {
		date = "0" + date;
	}
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (second < 10) {
		second = "0" + second;
	}
	if (millisecond < 10) {
		millisecond = "0" + millisecond;
	}
    var time=""; 
	var time =time+year +month+date+hour+minutes+second+millisecond; //20090612171805  
	return time;
}
//生成随机的8位数字字母组成的字符串
function generatePassword(){ 
	 var data=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];      
	 var result="";  
	 for(var i=0;i<8;i++){  
	     var r=Math.floor(Math.random()*62);     //取得0-62间的随机数，目的是以此当下标取数组data里的值！  
	     result+=data[r];        //输出20次随机数的同时，让rrr加20次，就是20位的随机字符串了。  
	 }
	 return result;    
}
//遍历数组，去掉数组中重复的字符串
function unique(arr) { 
	var tmp = new Array();
	for (var m in arr) {
		tmp[arr[m]] = 1;
	}
	//再把键和值的位置再次调换
	var tmparr = new Array();
	for (var n in tmp) {
		tmparr.push(n);
	}
	return tmparr;
}
