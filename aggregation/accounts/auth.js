//This doesnt nothing yet
async function authUsers(queryString) {
	return await fetch("http://127.0.0.1:3000/users"+queryString, {
		method: "GET"
	})
	.then((res) => (res.status == 200 ? true : false))
	.then(res => console.log(res.status))
	.catch((err) => {
		console.log(err);;
		return;
	});
}

insertString = "username="+someusername+"&email="+someemail+"&password="+somepas+"&type="+sometype
async function insertUserintoDB(insertString) {
	return await fetch("http://127.0.0.1:3000/users"+insertString.json(), {
		method: "POST"
	})
}

function changePassword(){

}
export {authUsers, insertUserintoDB};
