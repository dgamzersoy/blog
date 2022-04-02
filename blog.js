$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

$(function (){
    $("#btn_giris").click(function (){
      $("#my").modal();
    });
  });

  $(function (){
      $("#btnSubmit").click(function(){
          var email,password;
          email=$("#user_email").val();
          email= jQuery.trim(email);
          password=$("#user_password").val();
          password= jQuery.trim(password);
          
        if(email==""){
            $("#validation_email").html("email boş geçilemez")
        }
        else if(valideteEmail(email)==false){
            $("#validation_email").html("uygun formatta giriniz")
        }
        if(password==""){
            $("#validation_password").html("şifre boş geçilemez")
        }

        function validateEmail(email){
            var regex="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            return regex.test(email);
 
        }
          
      });
  });

