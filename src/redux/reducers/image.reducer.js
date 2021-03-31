import { imageConstant } from '../constants';

const defaultState = {
    images: [],
    loading: true,
    error: false,
    errorMessage: '',
    pageNumber: 1,
    apiHasMoreImgs: false,
    openImageModal: false,
    openInfoModal: false,
    imageInfo: {
        description: 'Loading...',
        urls: {
            raw: 'Loading',
        },
        user: {
            first_name: 'Loading...',
            last_name: 'Loading...'
        }
    },
    imageIndex: null
}

export function imageReducer(state = defaultState, action) {
    switch (action.type) {
        case imageConstant.GET_IMAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: '' 
            }
        case imageConstant.GET_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                erorr: false,
                errorMessage: '',
                images: [...state.images, ...action.payload.images],
                apiHasMoreImgs: action.payload.hasMore
            }
        case imageConstant.GET_IMAGES_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
                loading: false,
                apiHasMoreImgs: false
            }
        case imageConstant.SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            }
        case imageConstant.OPEN_IMAGE_MODAL:
            return {
                ...state,
                openImageModal: true,
                imageInfo: action.payload.imageInfo,
                imageIndex: action.payload.imageIndex
            }
        case imageConstant.CLOSE_IMAGE_MODAL:
            return {
                ...state,
                openImageModal: false,
                imageInfo: defaultState.imageInfo
            }
        case imageConstant.SET_NEW_IMAGE_INFO:
            const firstIndex = 0;
            const lastIndex = state.images.length - 1;
            if (action.payload < firstIndex) {
                return {
                    ...state,
                    imageInfo: state.images[firstIndex],
                    imageIndex: firstIndex
                }       
            } else if (action.payload > lastIndex) {
                return {
                    ...state,
                    imageInfo: state.images[lastIndex],
                    imageIndex: lastIndex,
                    pageNumber: state.pageNumber + 1
                }  
            } else {
                return {
                    ...state,
                    imageInfo: state.images[action.payload],
                    imageIndex: action.payload
                }
            }

        default:
            return state;
    }
}