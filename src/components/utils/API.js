import axios from 'axios';

const generateRandom = () => {
    return axios.get('https://randomuser.me/api/?results=200&nat=us');
};

// export default {
//     generateRandom: function() {
//         return axios.get('https://randomuser.me/api/?results=200&nat=us');
//     }
// }

export default generateRandom;