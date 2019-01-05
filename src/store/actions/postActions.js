import types from "./types";

export function fetchPosts(posts) {
    return {
        type: types.FETCH_POSTS,
        payload: posts
    }
}

export function createPost(postData) {
    return {
        type: types.NEW_POST,
        payload: postData
    }
}
