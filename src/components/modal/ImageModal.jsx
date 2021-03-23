import { Modal, Image, Icon } from 'semantic-ui-react';
import './modal-div.css';

export function ImageModal(props) {
    return (
        <div className='modal_div'>
            <Modal
                closeIcon
                open={props.open} 
                size={'large'}
                centered={false}
                onClose={props.onClose}
            >
                <Modal.Header>
                    <span>{props.imageInfo.user.first_name}</span>
                    <span>{props.imageInfo.user.last_name}</span>
                </Modal.Header>
                <Modal.Content>
                    <Icon large corner='top left' name='angle left' />
                    <Image src={props.imageInfo.urls.small} alt='Image' />
                    <Icon large corner='top right' name='angle right' />
                </Modal.Content>
                <Modal.Actions>
                    <span>{props.imageInfo.description}</span>
                </Modal.Actions>
            </Modal>
        </div>
    );
}