$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipientInput = $("input#recipient").val();
    var senderInput = $("input#sender").val();

    $(".recipient").text(recipientInput);
    $(".sender").text(senderInput);

    $("#letter").show();

    event.preventDefault();
  });
});
