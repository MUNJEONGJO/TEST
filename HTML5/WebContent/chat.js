
var webSocket = new WebSocket("ws://localhost:8000/");

webSocket.onopen = function(event){
	$("#chat").append("<br>Connected to the server");
};

webSocket.onmessage = function(event){
	$("#chat").append("<br>"+event.data);
	$("#chat").animate()({scrollTop: $("#chat").height()});
};

webSocket.onclose = function(event){
	$("#chat").append("<br>Connection closed");
};

$(function(){
	$("form#chat_form").submit(function (e){
		e.preventDefault();
		var textfield = $("#message");
		webSocket.send(textfield.val());
		textfield.val("");
	});
});

$("form#nick_form").submit(function (e){
	e.preventDefault();
	var textfield = $("nickname");
	webSocket.send("/nick"+textfield.val());
});