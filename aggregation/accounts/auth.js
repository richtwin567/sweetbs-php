//This doesnt nothing yet
async function authUsers(queryString) {
	return await fetch("https://sweetbs-backend.herokuapp.com/users"+queryString, {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
		},
    })
	.then((res) => (res.status == 200 ? true : false))
	.then(res => console.log(res.status))
	.catch((err) => {
		console.log(err);
		return;
	});
}

insertString = "username="+someusername+"&email="+someemail+"&password="+somepas+"&type="+sometype
async function insertUserintoDB(insertString) {
	return await fetch("https://sweetbs-backend.herokuapp.com/users"+insertString.json(), {
		method: "POST"
	})
}

function changePassword(){

}
export {authUsers, insertUserintoDB};
