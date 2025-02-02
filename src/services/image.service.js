//import { imageAdapter } from '../adapters/image.adapter';

export const imageService = {
    //getImagesPerPage
    setImageInfoBasedOnIndex
}


// //The reason for this function to exist, is
// //to have a layer that manipulates fetched data.
// //In this way we have a layer that only fetches raw data
// //A layer that manipulates raw data
// //A layer that presents manipulated data on UI
// async function getImagesPerPage(pageNumber) {
//     let images_per_page = await imageData.fetchImagesPerPage(pageNumber);
//     //console.log(images_per_page.length);
//     return images_per_page;
// }

//this function is for switching between images withouth exiting the screen
function setImageInfoBasedOnIndex(oldIndex, direction, arr) {
    let newIndex = oldIndex + direction;
    return arr[newIndex];
}