import { imageConstant } from '../constants';

export const imageAction = {
    openImageModal,
    closeImageModal,
    setImageInfo
}

function openImageModal(imageInfo) {
    return { 
        type: imageConstant.OPEN_IMAGE_MODAL,
        payload: imageInfo
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