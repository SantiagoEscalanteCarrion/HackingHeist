function captxt(id){
    var element=document.getElementById(id).value;
    if(element==""){
        alert("Enter data")
        document.getElementById(id).focus();
    }else{
        alert(element)
    }

}