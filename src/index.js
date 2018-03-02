module.exports = function check(str, bracketsConfig) {
  // your solution
    var resalt = false;
    var strArr = str.split("");
    for(var i=0; i<strArr.length; i++ ){
        debugger;
        for(var q=0; q<bracketsConfig.length; q++){
            if((strArr[i] == bracketsConfig[q][0]) && (strArr[i+1] == bracketsConfig[q][1])){
                strArr.splice(i, 2);
                i=-1;
                break;
            }else continue
        }
    }
    if(strArr.length == 0){
        resalt = true
    }
    return resalt;
}
