import axios from "axios";

const Post_URL = "https://route-posts.routemisr.com/users/profile-data";

export async function getprofile() {
    const res = await axios.get(Post_URL, {
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });


    return res.data.data.user;
}

export async function getuserprofile(id) {
    const res = await axios.get(`https://route-posts.routemisr.com/users/${id}/profile`, {
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });


    return res.data.data.user;
}
export async function getprofilepost(id) {
    const res = await axios.get(`https://route-posts.routemisr.com/users/${id}/posts`, {
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });

    // الخيار الأفضل: ارجع الرد كاملاً
    return res;
}