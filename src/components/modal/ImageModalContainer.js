import { useDispatch, useSelector } from 'react-redux';
import { ImageModal } from './ImageModal';
import { imageAction } from '../../redux/actions';
import { useState } from 'react';


export function ImageModalContainer(props) {

    const dispatch = useDispatch();
    const openImageModal = useSelector(state => (state.imageReducer.openImageModal));
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const imageInfo = useSelector(state => (state.imageReducer.imageInfo));
    const imageIndex = useSelector(state => (state.imageReducer.imageIndex));

    function handleImageModalClose() {
        dispatch(imageAction.closeImageModal());
    }

    function handleInfoModalClose() {
        setOpenInfoModal(false);
    }

    function handleInfoClick() {
        setOpenInfoModal(true);
    }

    function handleChevronClick(direction) {
        let newIndex = imageIndex + direction;
        dispatch(imageAction.setNewImageInfo(newIndex));
    }

    function handleDownload(image_src) {

        fetch(image_src).then(async function(file) {
            const blob = await file.blob();
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute("download", 'image.jpg');
            link.click();
        });

    }

    return (
        <ImageModal 
            openImageModal={openImageModal}
            closeImageModal={handleImageModalClose}
            openInfoModal={openInfoModal}
            closeInfoModal={handleInfoModalClose}
            imageInfo={imageInfo}
            onChevronClick={handleChevronClick}
            onInfoClick={handleInfoClick}
            onDownload={handleDownload}
        />
    );
}