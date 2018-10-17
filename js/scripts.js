$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipientInput = $("input#recipient").val();
    var senderInput = $("input#sender").val();

    $(".recipient").text(recipientInput.toUpperCase());
    $(".sender").text(senderInput.toUpperCase());

    $("#letter").show();

    event.preventDefault();
  });
});
