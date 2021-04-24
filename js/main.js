$(document).ready(function() {
    const listImages = $(".slider img");
    const users = [
      {id: 1, email: "user1@gmail.com", password: "123123"},
      {id: 2, email: "user2@gmail.com", password: "123123"},
      {id: 3, email: "user3@gmail.com", password: "123123"},
      {id: 4, email: "user4@gmail.com", password: "123123"},
      {id: 5, email: "user5@gmail.com", password: "123123"}
    ];
    let index = 0;

    function next() {
      $(".slider__control.next").click(function() {
        if(index < listImages.length - 1) {
          index++
        } else {
          index = 0;
          for(let i = 0; i < listImages.length; i++) {
            $(listImages[i]).css({"transform" : ""});
          }
        }

        $(listImages[index]).css({
          "transition" : "all 0.5s",
          "transform" : `translateX(-${100*index}%)`
        })
      })
    }

    function prev() {
      $(".slider__control.prev").click(function() {
        if(index === 0) {
          index = listImages.length - 1;
        } else {
          index--;
        };

        $(listImages[index+1]).css({
          "transition" : "all 0.5s",
          "transform" : `translateX(-${100*index}%)`
        })
      })
    }

    function toggleElement() {
      $(".faqs__up").click(function() {
        $(this).parent().parent().find(".faqs__item--desc").slideToggle("slow");
      })
    }

    function toggleForm() {
      $("#login .main__title h2").click(function() {
        $("#login .main__title h2").removeClass("active");
        $(this).addClass("active");
      });

      $("#login .main__title .main__title--login").click(function() {
        $("#form-login").css({
          "display" : "flex",
          "trasition" : "all 0.5s",
        });
        $("#register").hide();
      });

      $("#login .main__title .main__title--register").click(function() {
        $("#form-login").hide();
        $("#register").show();
      })
    }

    function login() {
      $("#sign-in-button").click(function(e) {
        let getEmail = $("#email").val();
        let getPassWord = $("#password").val();

        e.preventDefault();
        
        const getUser = users.find(function(user) {
          return user.email === getEmail && user.password === getPassWord
        });

        if(!getUser) {
          alert("Email or password is correct!");
          return;
        };

        localStorage.setItem("user", getUser.email);
        $("#form-login").submit();
      })
    }

    function showName() {
      let getName = localStorage.getItem("user");

      if(!getName) {
        $(".header .header__name").text("");
        $(".header__menu--item a button").html("LOGIN");
      } else {
        $(".header .header__name").text(`Hi, ${getName}`);
        $(".header__menu--item a button").html("LOGOUT")
      }
    }

    function clearUser() {
      $(".header__menu--item a").click(function() {
        localStorage.clear();
      })
    }

  function main() {
    next();
    prev();
    toggleElement()
    toggleForm()
    login();
    showName();
    clearUser()
  }

  main();
})