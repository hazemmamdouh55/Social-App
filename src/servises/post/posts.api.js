import axios from "axios";

const Post_URL = "https://route-posts.routemisr.com/posts"

export async function getAllposts() {
    return axios.request({
        method: "GET",
        url: Post_URL,
        headers: {
            token: localStorage.getItem("userToken"),
        }
    })
}
export async function getSinglepost(id) {
    return await axios.request({
        method: "GET",
        url: `${Post_URL}/${id}`,
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });
}
export async function getpostlikes(id) {
    return await axios.request({
        method: "GET",
        url: `${Post_URL}/${id}/likes`,
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });
}
export async function makepostlikes(id) {
    return await axios.request({
        method: "post",
        url: `${Post_URL}/${id}/likes`,
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });
}
