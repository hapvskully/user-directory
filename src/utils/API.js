import axios from "axios"

export default {
    randUser: function(){
        return axios.get("https://randomuser.me/api/?results=30&nat=us")
    }
}