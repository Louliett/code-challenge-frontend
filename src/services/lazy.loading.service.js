import { useCallback, useRef } from "react";


export function ObserveLastElement(loading, action, dispatch, apiHasMoreImgs) {
    const observer = useRef();
    const lastImageRef = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && apiHasMoreImgs) {
                dispatch(action.setPageNumber());
            }
        });
        if(node) observer.current.observe(node);
    }, [loading, apiHasMoreImgs]);

    return lastImageRef;
}