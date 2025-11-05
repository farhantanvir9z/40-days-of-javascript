// Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint

const URL = "https://jsonplaceholder.typicode.com/posts";

const postId = 10;

const post = {
    userId: 1,
    postId: crypto.randomUUID(),
    title: "40 Days of Javascript || Day 24 || Async/Await",
    author: "Farhan",
    postDate: `${new Date()}`,
    body: 
        "When you land on a sample web page or open an email template and see content beginning with lorem ipsum , the page creator placed that apparent gibberish there on purpose. Page layouts look better with something in each section. Web page designers, content writers, and layout artists use lorem ipsum, also known as placeholder copy, to distinguish which areas on a page will hold advertisements, editorials, and filler before the final written content and website designs receive client approval."
}

async function updatePost(post) {
    try {
        const response = await fetch(URL, {
        method: "PUT", 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(post)
    });
    if (!response.ok) {
        throw new Error(`Failed to update the post. response status: ${response.status}`);
    } else {
        const result = await response.json();
        console.log(result);
    }
    } catch (error) {
        console.error(error);
    }
   
}

 updatePost(post);