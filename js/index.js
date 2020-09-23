
$(".subs").click(function(e){
    e.preventDefault();
    var name = $("#nameofcon").val();
var email= $(".email").val();
var msg = $(".msg").val();
var d = new Date();
var n = d.getDay()+20;
var s = d.getMonth()+1;
var h = d.getHours();
console.log("at:"+h+"date"+n+"/"+s)
    console.log(name,email,msg)
      if(name.length<3 || email.length<10 ||msg.length<5){
          console.log("error")
      }else {
        
        axios.post('http://localhost:1337/Contacts',
        {name:name,email:email,msg:msg}).then(response => {
        console.log(response);
        console.log("success");
      });
      }
  });