import axios from "axios";

export const sendContactMessage = async (data) => {
  try {
    const res = await axios.post("/contact", data);
    return res.data;
  } catch (error) {
    
    throw error?.response?.data || error;
  }
};