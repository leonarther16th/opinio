//$(".post-action").toggleClass("hider");
var post_func = $(".btn-group").toggleClass("hider");
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
	//$(this).html(counter);
	$(this).attr('disabled','disabled').append(" <span class='glyphicon glyphicon-ok'></span> <span class='badge pull-right'>70%</span>").addClass('btn-success');
	$(this).prev().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>65%</span>").addClass('btn-danger');
	$(this).next().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>31%</span>").addClass('btn-danger');
	$(this).prev().prev().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>42%</span>").addClass('btn-danger');
	$(this).next().next().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>21%</span>").addClass('btn-danger');
});

$("#new-post").addClass('hider');

$("#new-post-btn").click(function(){
	$(this).addClass('hider');
	$("#new-post").removeClass('hider');
});