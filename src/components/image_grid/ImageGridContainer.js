import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ObserveLastElement } from '../../services';
import { ImageGrid } from './ImageGrid';
import { imageAction } from '../../redux/actions';

export function ImageGridContainer() {

    const dispatch = useDispatch();
    const images = useSelector(state => (state.imageReducer.images));
    const loading = useSelector(state => (state.imageReducer.loading));
    const error = useSelector(state => (state.imageReducer.error));
    const errorMessage = useSelector(state => (state.imageReducer.errorMessage));
    const apiHasMoreImgs = useSelector(state => (state.imageReducer.apiHasMoreImgs));
    const pageNumber = useSelector(state => (state.imageReducer.pageNumber));
    const lastImageRef = ObserveLastElement(loading, imageAction, dispatch, apiHasMoreImgs);


    useEffect(() => {
        dispatch(imageAction.getImagesPerPage(pageNumber));
    }, [pageNumber]);


    function handleImageClick(imageInfo) {
        dispatch(imageAction.openImageModal(imageInfo));
    }

    return(
        <ImageGrid
            images={images}
            loading={loading}
            error={error}
            errorMessage={errorMessage}
            lastImageRef={lastImageRef}
            onImageClick={handleImageClick}
        />
    );
}