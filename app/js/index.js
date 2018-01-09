//document.getElementById("container").innerHTML="hello"
var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,

	},
});

$(".list1").hover(function() {
//	console.log("in")
	$(this).addClass("bg_color")
	var i = $(this).index()
//	console.log(i)
	$(".list_in").eq(i).show();

}, function() {
//	console.log("out")
	$(this).removeClass("bg_color")
	var i = $(this).index()
//	console.log(i)
	$(".list_in").eq(i).hide();
})

$(".list_in").hover(function() {
	$(this).show()
}, function() {
	$(this).hide()

})

$.get("http://localhost:3400/store",function (arr) {
	var html=baidu.template("list-temp",{data:arr})
	console.log(html)
	$("#seal").html(html);
})
