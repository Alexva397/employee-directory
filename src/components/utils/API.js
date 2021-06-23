import axios from 'axios';

// const BASEURL = 'https://randomuser.me/api/?results=500'


export default {
    generateRandom: function() {
        return axios.get('https://randomuser.me/api/?results=200&nat=us');
    }
}