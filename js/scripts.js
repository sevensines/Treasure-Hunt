$(function() {
  console.log("Ready");

  //SIGN IN
  $(".main-signin").click(function() {
    $("#landing")
      .attr("class", "moveToTop")
      .delay(650)
      .queue(function(next) {
        $("#landing").attr("class", "hidden");
        next();
      });

    $("#discovery-home").attr("class", "moveFromBottom");
  });

  //CREATE
  $(".main-create").click(function() {
    $("#landing")
      .attr("class", "moveToLeft")
      .delay(650)
      .queue(function(next) {
        $("#landing").attr("class", "hidden");
        next();
      });
    $("#create-account").attr("class", "moveFromRight");
  });

  //ACCOUNT CREATE
  $(".confirm-create").click(function() {
    $("#create-account")
      .addClass("moveToTop")
      .delay(650)
      .queue(function(next) {
        $("#create-account").attr("class", "hidden");
        next();
      });

    $("#discovery-home").attr("class", "moveFromBottom");
  });

  //CANCEL CREATE
  $(".cancel-create").click(function() {
    $("#create-account")
      .attr("class", "moveToRight")
      .delay(650)
      .queue(function(next) {
        $("#create-account").attr("class", "hidden");
        next();
      });

    $("#landing").attr("class", "moveFromLeft");
  });

  //SETTINGS
  $(".settings-toggle").click(function() {
    $("#discovery-home")
      .attr("class", "moveToLeft")
      .delay(650)
      .queue(function(next) {
        $("#discovery-home").attr("class", "hidden");
        next();
      });
    $("#update-account").attr("class", "moveFromRight");
  });

  //SIGN OUT
  $(".main-signout").click(function() {
    $("#update-account")
      .attr("class", "moveToBottom")
      .delay(650)
      .queue(function(next) {
        $("#update-account").attr("class", "hidden");
        next();
      });
    $("#landing").attr("class", "moveFromTop");
  });

  //BACK TO CATEGORIES
  $("._return").click(function() {
    $("#update-account")
      .attr("class", "moveToRight")
      .delay(650)
      .queue(function(next) {
        $("#update-account").attr("class", "hidden");
        next();
      });
    $("#discovery-home").attr("class", "moveFromLeft");
  });

  //START DISCOVERY
  $(".block-grid ul li").click(function() {
    $("#discovery-home")
      .attr("class", "moveToTop")
      .delay(650)
      .queue(function(next) {
        $("#discovery-home").attr("class", "hidden");
        next();
      });
    $("#item-discovery").attr("class", "moveFromBottom");
  });

  //END DISCOVERY
  $("._restart").click(function() {
    $("#item-discovery")
      .attr("class", "moveToRight")
      .delay(650)
      .queue(function(next) {
        $("#item-discovery").attr("class", "hidden");
        next();
      });
    $("#discovery-home").attr("class", "moveFromLeft");
  });

  //BUILD PROGRESS BAR
  let questionCount = $(".card").length;
  let stepPercent = 100 / questionCount;
  $(".marker").css("width", stepPercent + "%");
  let progPercent = stepPercent;

  //CARD DISCOVERY CONTROLS
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
