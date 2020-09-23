
$(".subs").click(function(e){
    e.preventDefault();
    var name = $("#nameofcon").val();
var email= $(".email").val();
var msg = $(".msg").val();
      if(name.length<3 || email.length<10 ||msg.length<5){
          console.log("error")
          $(".notverify").removeClass("hides")
          $(".verify").addClass("hides")
      }else {
        $(".verify").removeClass("hides")
        $(".notverify").addClass("hides")
        axios.post('http://localhost:1337/Contacts',
        {name:name,email:email,msg:msg}).then(response => {
        console.log(response.status);
        console.log("success");
      });
      }
  });