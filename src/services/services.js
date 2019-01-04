const URLS = {
    POSTS: "https://jsonplaceholder.typicode.com/posts"
};

let getPostsDataPromise = null;

function getPostsData() {
    if (getPostsDataPromise === null) {
        getPostsDataPromise = getJsonDataFromUrl(URLS.POSTS);
    }
    return getPostsDataPromise;
}


let postPostDataPromise = null;

function createPost(postData) {
    if (postPostDataPromise === null) {
        postPostDataPromise = postJsonDataFromUrl(URLS.POSTS, postData);
    }
    return postPostDataPromise;
}

function getJsonDataFromUrl(url) {
    return fetch(url).then((resp) => {
        return resp.json()
    });
}

function postJsonDataFromUrl(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {
            return res.json()
        });
}

export default {getPostsData, createPost};