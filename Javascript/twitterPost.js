const post = {
    username : "@",
    content: "This is my #firstPost",
    likes : 150,
    repost:5,
    tags:["@delta"]
};

console.log(post["likes"])
console.log(post.likes)

post.likes = 5;