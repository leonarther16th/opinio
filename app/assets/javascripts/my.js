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



$(".vote").click(function(){
	
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


$(function(){
$("#statement_textarea").characterCounter({
limit: 150, // characters limit
counterSelector: false, // allow one or more counters to be specified by a jQuery selector
counterWrapper: 'span', // the element you wish to wrap your counter in.
counterCssClass: 'text-counters', // the CSS class to apply to your counter.
counterFormat: 'Characters Remaining: %1', // the format of your counter text where '%1' will be replaced with the remaining character count.
counterExceededCssClass: 'text-counters-error', // the CSS class to apply when your limit has been exceeded.
onExceed: function(count) {},
onDeceed: function(count) {},
customFields: {},}); // key value pairs of custom options to be added to the counter such as class, data attributes etc.
});

$(function(){
$(".option_field").characterCounter({
limit: 20, // characters limit
counterSelector: false, // allow one or more counters to be specified by a jQuery selector
counterWrapper: 'span', // the element you wish to wrap your counter in.
counterCssClass: 'text-counters', // the CSS class to apply to your counter.
counterFormat: 'Characters Remaining: %1', // the format of your counter text where '%1' will be replaced with the remaining character count.
counterExceededCssClass: 'text-counters-error', // the CSS class to apply when your limit has been exceeded.
onExceed: function(count) {},
onDeceed: function(count) {},
customFields: {},}); // key value pairs of custom options to be added to the counter such as class, data attributes etc.
});