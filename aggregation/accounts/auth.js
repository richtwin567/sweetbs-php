//This doesnt nothing yet
// async function authUsers(queryString) {
// 	console.log("ddd");
// 	let response = await fetch("https://sweetbs-backend.herokuapp.com/users"+queryString);
// 	if (response.ok){
//         return response.json();
//     }else{
//         const message = `An error has occured: ${response.status}`;
//         throw new Error(message);
//     } 
// }
/*async function authUsers(queryString){
	console.log("hhh");
   	let response = fetch("http://127.0.0.1:3000/users"+queryString);
    if (response.ok){
        return response.json();
    }else{
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    } 
}
*/
/*insertString = "username="+someusername+"&email="+someemail+"&password="+somepas+"&type="+sometype
async function insertUserintoDB(insertString) {
	return await fetch("https://sweetbs-backend.herokuapp.com/users"+insertString.json(), {
		method: "POST"
	})
}*/

function changePassword(){

}
//export {authUsers};
