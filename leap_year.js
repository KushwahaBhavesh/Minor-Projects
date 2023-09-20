function leap(){
    var year=window.prompt("Enter year","0")
    if(year % 4 ==0){
        if(year % 100 ==0){
            if(year % 400 ==0){
                alert("leap year");
            }else{
                alert("not leap year");
            }
        }else{
           alert("leap year");
        }
    }else{
       alert("not leap year");
    }
}

leap();