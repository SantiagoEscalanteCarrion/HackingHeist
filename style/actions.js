function captxt(id){
    var element=document.getElementById(id).value;
    if(captxt==""){
        alert("Enter data")
        document.getElementById(id).focus();
    }

}