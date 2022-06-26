function captxt(id){
    var element=document.getElementById(id).value;
    if(element==""){
        alert("Enter data")
        document.getElementById(id).focus();
    }else{
        alert(element)
    }

}


function firebaseConfig(){
    var firebaseConfig = {
        apiKey: "AIzaSyC3bxEwooJLDHoscUx5uoZ1XuPtTZIntJo",
        authDomain: "ajolote-82390.firebaseapp.com",
        projectId: "ajolote-82390",
        storageBucket: "ajolote-82390.appspot.com",
        messagingSenderId: "751307796942",
        appId: "1:751307796942:web:ba7ec7b78e6662bae2fb9f"
      };
    firebase.initializeApp(firebaseConfig)


    var name, comment;

    function Ready(){
        name=document.getElementById("Nombre").value;
        comment=document.getElementById("Comentario").value;
    }

    document.getElementById("submit").onclick = function(){
        Ready();
        firebase.database().ref('comentarios/'+name).set({
            Nombre: name,
            desc:comment
        });

    }
}