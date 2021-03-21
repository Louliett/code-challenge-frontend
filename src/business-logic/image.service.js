import { imageData } from '../data-access/images.fetch';

export const imageService = {
    getImagesPerPage
}

async function getImagesPerPage(pageNumber) {
    let images_per_page = await imageData.fetchImagesPerPage(pageNumber);
    //console.log(images_per_page.length);
    return images_per_page;
}