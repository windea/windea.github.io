
//-------------Function---------------

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

function getYearWeek(inDate){
    var date1 = new Date(inDate.getFullYear(), inDate.getMonth(), inDate.getDate());
    //1月1号
    var date2 = new Date(inDate.getFullYear(), 0, 1);
    //获取1月1号星期（以周一为第一天，0周一~6周日）
    var dateWeekNum=date2.getDay()-1;
    if(dateWeekNum<0){dateWeekNum=6;}
    if(dateWeekNum<4){
        //前移日期
        date2.setDate(date2.getDate()-dateWeekNum);
    }else{
        //后移日期
        date2.setDate(date2.getDate()+7-dateWeekNum);
    }
    var d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
    if(d<0){
        var date3 = new Date(date1.getFullYear(), 11, 31);
        return getYearWeek(date3);
    }else{
        //得到年数周数
        var year=date1.getFullYear();
        var week=Math.ceil((d+1 )/ 7);
        return week;
    }
}


Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "/u65e5",         
    "1" : "/u4e00",         
    "2" : "/u4e8c",         
    "3" : "/u4e09",         
    "4" : "/u56db",         
    "5" : "/u4e94",         
    "6" : "/u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}       

function getMsg(){


var sentences = [
"一切都是好的安排",
"只要想做，就能找到办法；如果不想，找到的便只是借口。 -Jim Rohn",
"无聊的解药是好奇心，但好奇心没有解药。 -Dorothy Parker",
"若后悔既成之事，时间方可平抚，但若懊悔未竟之事，则永远无法缓和。 -Sydney J. Harris",
"积极的人会去寻找任务的解决方案；消极的人会去寻找无法完成任务的各种理由。 -Napoleon Hill",
"你若总想平平凡凡，就永远不知道自己能有多出色。 -Maya Angelou",
"相比未有过可称之为失败的努力，坚持不懈之后的失败要伟大得多。 -George Eliot",
"如何看待问题远比问题本身来得重要，所以永远要正向思考。 -Norman Vincent Peale",
"如果有人说“你做不到”，他们展现的是自己的极限，不是你的极限。 -Dwayne Johnson",
"持续的改进，胜过延迟的完美。 -Mark Twain",
"相信你能行，你就成功了一半。 -Theodore Roosevelt",
"若想到达最高处，先从最低处做起。 -Publilius Syrus",
"Make trouble for myself and tackle trouble to feel alive"
];
var num = randomNum(0,sentences.length-1);


//=======时间计算========

var now = new Date();
var now_day = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var brithday = new Date(2022, 1, 13); //1984-10-31
var doDate = new Date(2021, 2, 24); //2021-3-18

//读取
//保存数据：localStorage.setItem(key,value);
//读取数据：localStorage.getItem(key);

//你的 人生已经走了 超过 25 年
var age = 0;
if(now < new Date(now.getFullYear(), brithday.getMonth(), brithday.getDate())) {
	age = now.getFullYear() - brithday.getFullYear() - 1;
} else {
	age = now.getFullYear() - brithday.getFullYear();
}
var text_age = "你的人生已经走了 超过 " + age + " 年";

//你的 人生还剩下 超过 43 年
var age_last = 80 - age - 1;
var text_age_last = "你的人生还剩下 超过 " + age_last + " 年";

//今 天已经过去了 大约 23 小时
var hour = now.getHours();
var text_hour = "今天已经过去了 大约 " + hour.toString() + " 小时";

var min = now.getMinutes(); //分         
var sec = now.getSeconds(); //秒       

//今 天还余下 43 分钟
var hour_last = 24 - hour;
var text_hour_last = "今天还余下 不到 " + hour_last.toString() + " 小时";

//本 周已经过去了 5 天
var weekDay = now.getDay()
var text_weekDay = "本周已经过去了 " + weekDay.toString() + " 天";

//本 周还余下 2 天
var weekDay_last = 7 - weekDay;
var text_weekDay_last = "本周还剩 " + weekDay_last.toString() + " 天";

//这个 月已经过去了 19 天
var day = now.getDate();
var text_day = "这个月已经过去了 " + day + " 天";

//这个 月还余下 12 天
var monthLastDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
var monthDay = monthLastDate.getDate();
var day_last = monthDay - day;
var text_day_last = (now.getMonth() + 1).toString() + "月还剩 " + day_last.toString() + " 天";

//2021 年已经过去了 3 个月
var year = now.getFullYear();
var month = now.getMonth() + 1;
var text_year = year.toString() + "年已经过去了 " + month.toString() + " 个月";

//2021 年还余下 10 个月
var month_last = 12 - (now.getMonth() + 1);
var text_year_last = year.toString() + "年还剩 大约 " + month_last.toString() + " 个月";

//2021 年还剩 n 周已经过去了
var year_week_last = 52-getYearWeek(now_day);
var text_year_week_last = year.toString() + "年还剩 大约 " + year_week_last.toString() + " 个周";

//2021 年还剩 n 天
var year_day_last = parseInt((new Date(2022, 11 ,31) - now_day) / (1000 * 60 * 60 * 24));
var text_year_day_last = year.toString() + "年还剩 " + year_day_last.toString() + " 天";

//当前时间
var text_now = "当前时间:" + year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
//alert(num);
var msg = [];
msg.push(sentences[num]); msg.push("\n");
msg.push("</BR>");
msg.push("\n");
msg.push(text_now); msg.push("\n");


//倒数
//msg.push(text_age_last); msg.push("\n");
msg.push(text_hour_last); msg.push("\n");
msg.push(text_weekDay_last); msg.push("\n");
msg.push(text_day_last); msg.push("\n");
msg.push(text_year_week_last); msg.push("\n");
msg.push(text_year_day_last);
//msg.push(text_year_last);

/* 
//正数
msg.push(text_age); msg.push("\n");
msg.push(text_hour); msg.push("\n");
msg.push(text_weekDay); msg.push("\n");
msg.push(text_day); msg.push("\n");
msg.push(text_year);
*/

return msg.join("");

}
