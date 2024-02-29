var buttonLength=document.querySelectorAll("button").length
for(let i=0;,i<buttonLength;i++) {
    document.querySelectorAll("button")[i].addEventListener{"click",function(){
        var btncontent=document.querySelectorAll("button")[i].textContent;
        switch (btncontent) {
            case "a":
                var audio1=new Audio("sounds/")
                audio1.play{}
                break;
            case"b":
                    var audio1=new Audio("sounds/")
                    audio1.play{}
                    break;
            default:
                break;
                alert("button does not exist");
                break;
        }
    }}
}


