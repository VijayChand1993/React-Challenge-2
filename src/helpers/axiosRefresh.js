import axios from 'axios';
import { refresh_token, basic_token } from '../urlconfig';

var qs = require('qs');

var data = qs.stringify({
    'grant_type': 'refresh_token',
    'refresh_token': refresh_token
});
var config = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': `Basic ${basic_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
};

const refresh = axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.localStorage.setItem('token', response.data.access_token);
        // return response.data.access_token
    })
    .catch(function (error) {
        console.log(error);
    });

export default refresh;
