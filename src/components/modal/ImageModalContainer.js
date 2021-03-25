import { useDispatch, useSelector } from 'react-redux';
import { ImageModal } from './ImageModal';
import { imageAction } from '../../redux/actions';


export function ImageModalContainer(props) {

    const dispatch = useDispatch();
    const openModal = useSelector(state => (state.imageReducer.openModal));
    const imageInfo = useSelector(state => (state.imageReducer.imageInfo));
    const imageIndex = useSelector(state => (state.imageReducer.imageIndex));

    function handleClose() {
        dispatch(imageAction.closeImageModal());
    }

    function handleChevronClick(direction) {
        let newIndex = imageIndex + direction;
        dispatch(imageAction.setNewImageInfo(newIndex));
    }

    return (
        <ImageModal 
            open={openModal}
            onClose={handleClose}
            imageInfo={imageInfo}
            onChevronClick={handleChevronClick}
        />
    );
}