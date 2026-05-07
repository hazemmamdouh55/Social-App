import axios from "axios";
const Post_URL = "https://route-posts.routemisr.com/posts";


export async function createPostApi(formData) {
    const res = await axios.post(Post_URL, formData, {
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });
    return res.data;
}