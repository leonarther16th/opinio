//$(".post-action").toggleClass("hider");
$(".btn-group").toggleClass("hider");
$(".well").hover(function(){
	$(this).addClass("focus");
	//$(this).children(".post-action").toggleClass("hider");
	$(this).children(".btn-group").toggleClass("hider");
	console.log("in");

	
}, function(){
	$(this).removeClass("focus");
	//$(this).children(".post-action").toggleClass("hider");
	$(this).children(".btn-group").toggleClass("hider");
	console.log("out");
});

var counter = 0;

$(".btn-primary").click(function(){
	counter += 1;
	$(this).html(counter);
});

$("#new-post").addClass('hider');

$("#new-post-btn").click(function(){
	$(this).addClass('hider');
	$("#new-post").removeClass('hider');
});