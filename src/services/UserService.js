import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/person';

class UserService {

    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }
    getUserById(employeeId){
        return axios.get(USERS_REST_API_URL + '/' + employeeId);
    }
    // uploadExcel(file){
    //     return axios.post(USERS_REST_API_URL + '/api/person/upload', file);
    // }
}

export const uploadExcel = (file) => async dispatch => {
    if (file.entries().next().value[1] !== null) {
        const response = await axios.post(USERS_REST_API_URL + `/api/person/upload`, file, {
            onUploadProgress:progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            }
        });
        dispatch({
            type: "UPLOAD_EXCEL",
            payload: response.data
        });
    }
};

export default new UserService();