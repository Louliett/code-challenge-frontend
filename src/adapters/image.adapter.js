const ACCESS_KEY = 'BCLphaiVtu7iU1ttolxvP3lk1uYjbNyCzMSfKi8OP-w';
const API_URL = 'https://api.unsplash.com/photos';

export const imageAdapter = {
    fetchImagesPerPage
}

async function fetchImagesPerPage(pageNumber) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Client-ID ${ACCESS_KEY}`);
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    
    let response = await fetch(`${API_URL}?page=${pageNumber}&per_page=30`, requestOptions);
    let message = await response.json();
    return message;
}