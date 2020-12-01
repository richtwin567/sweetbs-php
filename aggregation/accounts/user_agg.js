async function getUsername() {
	return await fetch("../../aggregation/accounts/user_php_to_js.php")
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
			return "";
		});
}

export { getUsername };
