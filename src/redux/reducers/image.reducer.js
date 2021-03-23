import { imageConstant } from '../constants';

const defaultState = {
    images: [],
    loading: true,
    error: false,
    errorMessage: '',
    pageNumber: 1,
    apiHasMoreImgs: false,
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
        case imageConstant.GET_IMAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case imageConstant.GET_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: [...state.images, ...action.payload.images],
                apiHasMoreImgs: action.payload.hasMore
            }
        case imageConstant.GET_IMAGES_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload
            }
        case imageConstant.SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
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