let posts = [

{
title:"Top JavaScript Tricks",
category:"Tech",
content:"Improve your JavaScript skills with these useful tricks.",
likes:0,
dislikes:0,
comments:[]
},

{
title:"Backpacking in Himachal",
category:"Travel",
content:"An unforgettable adventure in the mountains.",
likes:0,
dislikes:0,
comments:[]
},

{
title:"Morning Routine for Success",
category:"Lifestyle",
content:"Start your day with productive habits.",
likes:0,
dislikes:0,
comments:[]
},

{
title:"Chocolate Brownie Recipe",
category:"Food",
content:"Craving satisfying chocolate brownie recipe at home.",
likes:0,
dislikes:0,
comments:[]
}

];


const container = document.getElementById("posts");

function displayPosts(data){

container.innerHTML="";

data.forEach((post,index)=>{

let div=document.createElement("div");
div.className="post";

div.innerHTML=`

<h3>${post.title}</h3>

<span class="category">${post.category}</span>

<p>${post.content}</p>


<div class="reactions">

<button onclick="likePost(${index})">👍 ${post.likes}</button>

<button onclick="dislikePost(${index})">👎 ${post.dislikes}</button>

</div>


<div class="comments">

<h4>Comments</h4>

<ul>

${post.comments.map(c=>`<li>${c}</li>`).join("")}

</ul>

<input type="text" id="comment-${index}" placeholder="Write a comment">

<button onclick="addComment(${index})">Post</button>

</div>

`;

container.appendChild(div);

});

}

displayPosts(posts);



/* ADD BLOG */

function addPost(){

let title=document.getElementById("title").value;
let category=document.getElementById("category").value;
let content=document.getElementById("content").value;

posts.push({
title,
category,
content,
likes:0,
dislikes:0,
comments:[]
});

displayPosts(posts);

document.getElementById("title").value="";
document.getElementById("category").value="";
document.getElementById("content").value="";

}



/* LIKE */

function likePost(index){

posts[index].likes++;

displayPosts(posts);

}


/* DISLIKE */

function dislikePost(index){

posts[index].dislikes++;

displayPosts(posts);

}



/* ADD COMMENT */

function addComment(index){

let input=document.getElementById(`comment-${index}`);

let text=input.value;

if(text.trim()!==""){

posts[index].comments.push(text);

input.value="";

displayPosts(posts);

}

}



/* TOGGLE BLOG FORM */

function toggleForm(){

document.getElementById("blogForm").classList.toggle("hidden");

}



/* SEARCH BLOG */

document.getElementById("search").addEventListener("input",function(){

let value=this.value.toLowerCase();

let filtered=posts.filter(post =>
post.title.toLowerCase().includes(value) ||
post.content.toLowerCase().includes(value)
);

displayPosts(filtered);

});



/* CATEGORY FILTER */

document.getElementById("categoryFilter").addEventListener("change",function(){

let cat=this.value;

if(cat==="all"){
displayPosts(posts);
}
else{

let filtered=posts.filter(post=>post.category===cat);

displayPosts(filtered);

}

});

