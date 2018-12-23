$(function() {
  console.log("Ready");

  //SIGN IN
  $(".main-signin").click(function() {
    $("#landing")
      .addClass("moveToTop")
      .delay(1000)
      .queue(function(next) {
        $("#landing")
          .addClass("hidden")
          .removeClass("moveToTop");
        next();
      });

    $("#discovery-home")
      .removeClass("hidden")
      .addClass("moveFromBottom");
  });

  //CREATE
  $(".main-create").click(function() {
    console.log("Click");
    $("#landing")
      .addClass("moveToLeft")
      .delay(1000)
      .queue(function(next) {
        $("#landing")
          .addClass("hidden")
          .removeClass("moveToLeft");
        next();
      });
    $("#create-account")
      .removeClass("hidden")
      .addClass("moveFromRight");
  });

  //ACCOUNT CREATE
  $(".confirm-create").click(function() {
    $("#create-account")
      .addClass("moveToTop")
      .delay(1000)
      .queue(function(next) {
        $("#create-account")
          .addClass("hidden")
          .removeClass("moveToTop");
        next();
      });

    $("#discovery-home")
      .removeClass("hidden")
      .addClass("moveFromBottom");
  });

  //SETTINGS
  $(".settings-toggle").click(function() {
    $("#discovery-home")
      .removeClass("moveFromLeft moveFromBottom")
      .addClass("moveToLeft")
      .delay(1000)
      .queue(function(next) {
        $("#discovery-home")
          .addClass("hidden")
          .removeClass("moveToLeft");
        next();
      });
    $("#update-account")
      .removeClass("hidden")
      .addClass("moveFromRight");
  });

  //BACK TO CATEGORIES
  $(".back-toggle").click(function() {
    $("#update-account")
      .removeClass("moveFromRight")
      .addClass("moveToRight")
      .delay(1000)
      .queue(function(next) {
        $("#update-account")
          .addClass("hidden")
          .removeClass("moveToRight");
        next();
      });
    $("#discovery-home")
      .removeClass("hidden moveFromBottom")
      .addClass("moveFromLeft");
  });

  //START DISCOVERY
  $(".block-grid ul li").click(function() {
    $("#discovery-home")
      .removeClass("moveFromLeft moveFromBottom")
      .addClass("moveToTop")
      .delay(1000)
      .queue(function(next) {
        $("#discovery-home")
          .addClass("hidden")
          .removeClass("moveToTop");
        next();
      });
    $("#item-discovery")
      .removeClass("hidden")
      .addClass("moveFromBottom");
  });

  //END DISCOVERY
  $(".back-toggle, ._restart").click(function() {
    $("#item-discovery")
      .removeClass("moveFromBottom")
      .addClass("moveToRight")
      .delay(1000)
      .queue(function(next) {
        $("#item-discovery")
          .addClass("hidden")
          .removeClass("moveToRight");
        next();
      });
    $("#discovery-home")
      .removeClass("hidden moveFromBottom")
      .addClass("moveFromLeft");
  });

  //CARD DISCOVERY CONTROLS
  let questionCount = $(".card").length;
  let stepPercent = 100 / questionCount;
  $(".marker").css("width", stepPercent + "%");
  let progPercent = stepPercent;

  $(".card")
    .first()
    .addClass("_top");

  let questionPosition = 1;

  $(".question-control").click(function() {
    if (questionPosition == questionCount) {
      $("#question-view")
        .addClass("scaleDownCenter")
        .delay(400)
        .queue(function(next) {
          $("#question-view").attr("class", "row hidden");
          $("#answer-view").attr("class", "row scaleUpCenter");
          next();
        });
    } else {
      $("._top")
        .addClass("scaleDownCenter")
        .delay(400)
        .queue(function(next) {
          $(".scaleDownCenter._top").attr("class", "card hidden");
          next();
        })
        .next(".card")
        .attr("class", "card moveFromBottom _top");
      $(".marker").css({ width: (progPercent += stepPercent) + "%" });
      questionPosition++;
      console.log(questionPosition);
    }
  });
});
