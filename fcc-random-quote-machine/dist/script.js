// uses some jQuery
$(function () {
  var quoteArr = ["Seize the moment, 'cause tomorrow you might be dead.", "I Hope We're Still Friends After I Taser You.", "I get productive when I'm nervous.", "Welcome to the No Options Club", "What Kind Of Woman Doesn’t Have An Ax?", "Keep listening, there might be more here than you thought.", "It turns out life isn’t a puzzle that can be solved one time and it’s done. You wake up every day, and you solve it again.", "I'm too young to die and too old to eat off the kids menu! What a stupid age I am."];
  var authorArr = ["Buffy Summers", "Veronica Mars", "Burton 'Gus' Guster", "Amy Sosa", "Rosa Diaz", "Robyn 'Rob' Brooks", "Chidi Anagonye", "Jason Mendoza"];
  var random = Math.floor(Math.random() * quoteArr.length);
  htmlQuote(quoteArr[random], authorArr[random]);
  $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?text="' + quoteArr[random] + '" -' + authorArr[random]);

  function htmlQuote(quote, author) {
    $("#text").html("&quot;" + quote + "&quot;");
    $("#author-input").html(author);
    $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?text="' + quote + '" -' + author);
  }

  $("#new-quote").click(function () {
    var random = Math.floor(Math.random() * quoteArr.length);
    htmlQuote(quoteArr[random], authorArr[random]);
  });

});