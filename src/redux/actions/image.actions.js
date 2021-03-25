import { imageConstant } from '../constants';
import { imageAdapter } from '../../adapters';

export const imageAction = {
    getImagesPerPage,
    setPageNumber,
    setImageInfo,
    setNewImageInfo,
    openImageModal,
    closeImageModal
}

function getImagesPerPage(pageNumber) {
    return dispatch => {
        dispatch(request());

        imageAdapter.fetchImagesPerPage(pageNumber)
        .then(images => {
            const hasMore = (images.length > 0);
            dispatch(success(images, hasMore));
        })
        .catch(error => dispatch(failure(error)) );
    }

    function request() { return { type: imageConstant.GET_IMAGES_REQUEST } }
    function success(images, hasMore) {
        return { 
            type: imageConstant.GET_IMAGES_SUCCESS, 
            payload: { 
                images,
                hasMore
            }
        }
    }
    function failure(error) { return { type: imageConstant.GET_IMAGES_FAILURE, payload: error } }
}

function setPageNumber() {
    return { type: imageConstant.SET_PAGE_NUMBER }
}

function openImageModal(imageInfo, imageIndex) {
    return { 
        type: imageConstant.OPEN_IMAGE_MODAL,
        payload: { imageInfo, imageIndex }
    }
}

function closeImageModal() {
    return { type: imageConstant.CLOSE_IMAGE_MODAL }
}

function setImageInfo(image) {
    return { 
        type: imageConstant.SET_IMAGE_INFO,
        payload: image
    }
}

function setNewImageInfo(newIndex) {
    return {
        type: imageConstant.SET_NEW_IMAGE_INFO,
        payload: newIndex
    }
}