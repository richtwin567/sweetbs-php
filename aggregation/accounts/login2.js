var form = document.getElementById("Loginform");
form.addEventListener("submit", login);

async function login(e) {
	e.preventDefault();
	//Variables from the log-in form
	var logusername = document.getElementById("logusername").value;
	var logpassword = document.getElementById("logpassword").value;
	let queryString = "?username=" + logusername + "&password=" + logpassword;
	await fetch("https://sweetbs-backend.herokuapp.com/users" + queryString, {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
		},
	})
		.then((res) => (res.ok ? res.json() : null))
		.then((data) => {
			if (data != null) {
				console.log(data[0]);
				fetch("../../aggregation/accounts/session_handler.php", {
					method: "POST",
					body: JSON.stringify(data[0]),
				})
					.then((res) => res.text())
					.then((data) => console.log(data))
					.then((_) => (window.location.href = "index.php"))
					.catch((_) => {
						var passwordfield = document.getElementById(
							"logpassword"
						);
						passwordfield.classList.add("invalid");
					});
			} else {
				var passwordfield = document.getElementById("logpassword");
				passwordfield.classList.add("invalid");
			}
		})
		.catch((_) => {
			var passwordfield = document.getElementById("logpassword");
			passwordfield.classList.add("invalid");
		});
}
