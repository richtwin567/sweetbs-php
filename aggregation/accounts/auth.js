//This doesnt nothing yet
async function authUsers(queryString) {
	return await fetch("https://sweetbs-backend.herokuapp.com/users"+queryString, {
		method: "GET",
		headers: {
			"Access-Control-Allow-Headers": "*",
			'Content-Type': 'application/json'
		  },
	})
	.then((res) => (res.status == 200 ? true : false))
	.then(res => console.log(res.status))
	.catch((err) => {
		console.log(err);;
		return;
	});
}

/*insertString = "username="+someusername+"&email="+someemail+"&password="+somepas+"&type="+sometype
async function insertUserintoDB(insertString) {
	return await fetch("http://127.0.0.1:3000/users"+insertString.json(), {
		method: "POST"
	})
}

async function fetchMenuItem(itemID){
    let response = await fetch(`https://sweetbs-backend.herokuapp.com/orders?_id=${itemID}`);
    if (response.ok){
        return response.json();
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}

function changePassword(){

}
async function authUsers(queryString) {
	let response = await fetch("https://sweetbs-backend.herokuapp.com/users"+queryString);
	if (response.ok){
        return response.json();
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    } 
}
*/

export {authUsers};
