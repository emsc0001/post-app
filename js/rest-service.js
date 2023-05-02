import { prepareData } from "./helpers";
const endpoint = "https://crud-41c36-default-rtdb.europe-west1.firebasedatabase.app/";


async function createPost(title, body, image) {
  const newPost = { title, body, image }; // create new post object
  const json = JSON.stringify(newPost); // convert the JS object to JSON string
  // POST fetch request with JSON in the body
  const response = await fetch(`${endpoint}/posts.json`, {
    method: "POST",
    body: json,
  });
    return response;
  }


async function updatePost(id, title, body, image) {
  const postToUpdate = { title, body, image }; // post update to update
  const json = JSON.stringify(postToUpdate); // convert the JS object to JSON string
  // PUT fetch request with JSON in the body. Calls the specific element in resource
  const response = await fetch(`${endpoint}/posts/${id}.json`, {
    method: "PUT",
    body: json,
  });
    return response;
  }


async function getUser(id) {
  const response = await fetch(`${endpoint}/users${id}.json`);
  const user = await resposon.json();
  return user;

}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`); // fetch request, (GET)
  const data = await response.json(); // parse JSON to JavaScript
  const posts = prepareData(data); // convert object of object to array of objects
  return posts; // return posts
}

function showPosts(listOfPosts) {
  document.querySelector("#posts").innerHTML = ""; // reset the content of section#posts

  for (const post of listOfPosts) {
    showPost(post); // for every post object in listOfPosts, call showPost
  }
}

function showPost(postObject) {
  const html = /*html*/ `
        <article class="grid-item">
            <img src="${postObject.image}" />
            <h3>${postObject.title}</h3>
            <p>${postObject.body}</p>
            <div class="btns">
                <button class="btn-delete">Delete</button>
                <button class="btn-update">Update</button>
            </div>
        </article>
    `; // html variable to hold generated html in backtick
  document.querySelector("#posts").insertAdjacentHTML("beforeend", html); // append html to the DOM - section#posts

  // add event listeners to .btn-delete and .btn-update
  document.querySelector("#posts article:last-child .btn-delete").addEventListener("click", () => deleteClicked)(postObject);
  document.querySelector("#posts article:last-child .btn-update").addEventListener("click", () => updateClicked)(postObject);
}

function showPosts(listOfPosts) {
  document.querySelector("#posts").innerHTML = ""; // reset the content of section#posts

  for (const post of listOfPosts) {
    showPost(post); // for every post object in listOfPosts, call showPost
  }
}

// Update an existing post - HTTP Method: DELETE
async function deletePost(id) {
    const response = await fetch(`${endpoint}/posts/${id}.json`, {
        method: "DELETE"
    });

        return response; // update the post grid to display all posts and the new post
    }

    
function prepareData(dataObject) {
  const array = []; // define empty array
  // loop through every key in dataObject
  // the value of every key is an object
  for (const key in dataObject) {
    const object = dataObject[key]; // define object
    object.id = key; // add the key in the prop id
    array.push(object); // add the object to array
  }
  return array; // return array back to "the caller"
}

export { createPost, getPosts, showPosts, updatePost, deletePost, getUser };