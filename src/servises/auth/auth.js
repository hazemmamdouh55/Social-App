

import axios from "axios";

//login

export async function Signin() {
    const SignIN = await axios.post("https://route-posts.routemisr.com/users/signin", {
        headers: {
            token: localStorage.getItem("userToken"),
        },
    });


} 






//register
export async function Signup(data) {
    const Signup  = await axios.post("https://route-posts.routemisr.com/users/signup", {
        
    });


} 