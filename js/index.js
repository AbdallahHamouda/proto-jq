
$(".msg").keyup(function(e){
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

        console.log("success");
      }
      
  });
