//$(".post-action").toggleClass("hider");
var post_func = $(".btn-group").toggleClass("hider");
$(".well").hover(function(){
	$(this).addClass("focus");
	//$(this).children(".post-action").toggleClass("hider");
	$(this).children(".btn-group").toggleClass("hider");
	

	
}, function(){
	$(this).removeClass("focus");
	//$(this).children(".post-action").toggleClass("hider");
	$(this).children(".btn-group").toggleClass("hider");
	
});



$(".btn-primary").click(function(){
	
	//$(this).html(counter);
	$(this).attr('disabled','disabled').append(" <span class='glyphicon glyphicon-ok'></span> <span class='badge pull-right'>70%</span>").addClass('btn-success');
	$(this).prev().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>65%</span>").addClass('btn-danger');
	$(this).next().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>31%</span>").addClass('btn-danger');
	$(this).prev().prev().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>42%</span>").addClass('btn-danger');
	$(this).next().next().attr('disabled','disabled').append(" <span class='glyphicon glyphicon-remove'></span> <span class='badge pull-right'>21%</span>").addClass('btn-danger');
});

$("#new-post").addClass('hider');

$("#new-post-btn").click(function(){
	
	$("#new-post").toggleClass('hider');
});

$(".test").removeClass("hider");