import { Modal, Image } from 'semantic-ui-react';
import './modal-div.css';

export function ImageModal(props) {
    return (
        <div className='modal_div'>
            <Modal 
                open={props.open} 
                size={'fullscreen'}
                centered={true}
                closeOnDimmerClick={true}
            >
                <Modal.Header>
                    <span>{props.imageInfo.user.first_name}</span>
                    <span>{props.imageInfo.user.last_name}</span>
                </Modal.Header>
                <Modal.Content>
                    <Image src={props.imageInfo.urls.small} alt='Image' />
                </Modal.Content>
                <Modal.Actions>
                    <span>{props.imageInfo.description}</span>
                </Modal.Actions>
            </Modal>
        </div>
    );
}