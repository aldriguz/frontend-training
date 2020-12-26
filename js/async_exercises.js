// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then(console.log);

//solution
const solution1 = async function () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/")
    const data = await response.json()
    console.info(data)
}




// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];


//solution
const fetchSingleUrl = async function (url) {
    const response = await fetch(url)
    const data = await response.json()
    //console.info(data)
    return data
}

const getData = async function () {
    const [users, posts, albums] = await Promise.all(
        urls.map((url) => fetchSingleUrl(url))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];

//solution, take from solutions file
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(async function (url) {
                const response = await fetch(url);
                return response.json();
            }),
        );
        console.log("users", users);
        console.log("posta", posts);
        console.log("albums", albums);
    }
    catch (e) {
        console.error('oops', e);
    }
};