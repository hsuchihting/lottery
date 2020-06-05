$(document).ready(function () {
	destiny_txt = new Array(6);
	destiny_txt[0] = "大吉";
	destiny_txt[1] = "中吉";
	destiny_txt[2] = "小吉";
	destiny_txt[3] = "凶";
	destiny_txt[4] = "平";
	destiny_txt[5] = "大凶";

	index = Math.floor(Math.random() * destiny_txt.length); //js亂數程式

	$(".btn").on("click", function (e) {
		$(".result").append(destiny_txt[index]);
		$(this).remove();
		$(".restart").show();
	});
	$(".restart").on("click", function (e) {
		location.reload(true); //刷新網頁
	});
});
