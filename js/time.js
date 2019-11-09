function time(time,length = 19,flag="-") {
    var date = new Date((time * 1000) + 8 * 3600 * 1000); // 增加8小时
    return date.toJSON().substr(0, length).replace('T', ' ').replace(/-/g, flag);
}

function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}