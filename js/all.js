$(document).ready(function () {
	destiny_txt = new Array(6);
	destiny_txt[0] = "Charlie, Mercedes";
	destiny_txt[1] = "Brandon, Linda";
	destiny_txt[2] = "俊哲，岱娜";
	destiny_txt[3] = "智庭，旻旻";
	destiny_txt[4] = "Marc，亮亮";
	destiny_txt[5] = "東岳，淑玲";

	index = Math.floor(Math.random() * destiny_txt.length); //js亂數程式

	$(".jq-result").on("click", function (e) {
		$(".result").append(destiny_txt[index]);
		$(this).remove();
		$(".restart").show();
	});
	$(".restart").on("click", function (e) {
		location.reload(true); //刷新網頁
	});
});
