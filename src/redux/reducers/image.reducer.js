import { imageConstant } from '../constants';

const defaultState = {
    openModal: false,
    imageInfo: {
        description: 'Loading...',
        urls: {
            raw: 'Loading',
        },
        user: {
            first_name: 'Loading...',
            last_name: 'Loading...'
        }
    }
}

export function imageReducer(state = defaultState, action) {
    switch (action.type) {
        case imageConstant.OPEN_IMAGE_MODAL:
            return {
                ...state,
                openModal: true,
                imageInfo: action.payload
            }
        case imageConstant.CLOSE_IMAGE_MODAL:
            return {
                ...state,
                openModal: false,
                imageInfo: defaultState.imageInfo
            }
        default:
            return state;
    }
}