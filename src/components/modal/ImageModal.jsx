import { Modal, Icon } from 'semantic-ui-react';
import './image-modal.css';

export function ImageModal(props) {
    return (
            <Modal closeIcon open={props.open} centered={false} onClose={props.onClose} className='modal_content' >
                
                    <div className='left_chevron' onClick={() => {props.onChevronClick(-1)}}>
                        <Icon size='huge' color='grey' name='chevron left' />
                    </div>
                    <img className='image_modal' src={props.imageInfo.urls.regular} alt={props.imageInfo.alt_description} />
                    <div className='right_chevron' onClick={() => {props.onChevronClick(1)}}>
                        <Icon size='huge' color='grey' name='chevron right' />
                    </div>                
            </Modal>
        
    );
}