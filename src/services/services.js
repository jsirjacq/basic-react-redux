const URLS = {
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    IMG: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
};

let getPostsDataPromise = null;

function getPostsData() {
    if (getPostsDataPromise === null) {
        getPostsDataPromise = getJsonDataFromUrl(URLS.POSTS);
    }
    return getPostsDataPromise;
}

let getImageDataPromise = null;

function getImageData() {
    if (getImageDataPromise === null) {
        getImageDataPromise = getJsonDataFromUrl(URLS.IMG);
    }
    return getImageDataPromise;
}

function createPostRequest(postData) {
    return postJsonDataFromUrl(URLS.POSTS, postData);
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

export default {getPostsData, createPostRequest, getImageData};
