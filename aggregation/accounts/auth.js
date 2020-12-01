import {User} from '../data_classes/user.js';
//This doesnt nothing yet
async function authUsers(queryString) {
	return await fetch("http://127.0.0.1:3000/users"+queryString, {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
		},
    })
    

    }