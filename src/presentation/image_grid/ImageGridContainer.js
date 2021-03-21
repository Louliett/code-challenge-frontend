import { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ImageGrid } from './ImageGrid';
import { imageService } from '../../business-logic/image.service';
import { imageAction } from '../../redux/actions';

export function ImageGridContainer() {

    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false);

    const observer = useRef()
    const lastImageRef = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        });
        if(node) observer.current.observe(node);
        console.log(node);
    }, [loading, hasMore])

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(false);
            const result = await imageService.getImagesPerPage(pageNumber);
            console.log(result, ' res');

            if (result.length > 0) {
                console.log(' more');
                console.log(result, ' res');
                setImages([...images, ...result]);
                setHasMore(true);
                setLoading(false);
            } else {
                console.log(' less');
                setHasMore(false);
                setLoading(false);
            }
            
             
        }
        fetchImages();
        console.log(images, ' after');
    }, [pageNumber]);


    function handleImageClick(imageInfo) {
        //console.log(image);
        dispatch(imageAction.openImageModal(imageInfo));
    }

    return(
        <ImageGrid
            images={images}
            loading={loading}
            error={error}
            lastImageRef={lastImageRef}
            onImageClick={handleImageClick}
        />
    );
}