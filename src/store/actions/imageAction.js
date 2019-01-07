import types from "./types";

export function fetchImage(image) {
    return {
        type: types.FETCH_IMAGE,
        payload: image
    }
}
