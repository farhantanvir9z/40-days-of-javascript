"use strict"

import {posts, blogContainer, createPost} from "./post.js"
import login from "./user.js"

posts.forEach((post) => {
	createPost(post);
})

const user1 = {
	name: "yohan",
	email: "yohan@email.com"
}

const {name, email} = user1;

login(name, email)