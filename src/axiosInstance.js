import axios from "axios";

const Instance = axios.create({
    baseURL: "https://myshoppizza.firebaseio.com"
});

export default Instance;