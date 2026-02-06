"use strict"

// renaming named export 

import {posts as contents, createPost as cP} from "./post.js"

// import {default as login} from "./user.js"

// Same as:

import login from "./user.js"

contents.forEach((content) => {
	cP(content);
})

const user1 = {
	name: "yohan",
	email: "yohan@email.com"
}

const {name, email} = user1;

login(name, email)