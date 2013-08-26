$(document).ready(function () {

	$("#login").show().animate({
		opacity: 1
	}, 2e3);

	$(".formLogin").show().animate({
		opacity: 1
	}, 2e3,  function () {
			$("#versionBar").animate({
				opacity: 1,
			}, 2e3);
	})
});


function Login() {
	$("#login").animate({
		opacity: 1,
		top: "50%"
	}, 400, function () {
			$(this).fadeOut(200, function () {
				$(".text_success").fadeIn();
			})
		}
	);
	setTimeout("window.location.href='http://127.0.0.1:8000/komatsu/login/dashboard.html'", 3e3)
}

$("#but_login").click(function (a) {
	if (document.formLogin.username.value == "" || document.formLogin.password.value == "") {
		$(".inner").jrumble({
			x: 4,
			y: 0,
			rotation: 0
		});
		$(".inner").trigger("startRumble");
		setTimeout('$(".inner").trigger("stopRumble")', 500);
		return false
	}
	setTimeout("Login()", 400)
});

