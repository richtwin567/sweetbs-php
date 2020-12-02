import {User} from '../data_classes/user.js';
//This doesnt nothing yet
async function authUsers(queryString) {
	return await fetch("https://sweetbs-backend.herokuapp.com/users"+queryString, {
		method: "GET",
		headers: {
			"Content-Type": "Application/json",
		},
    })
    

    }