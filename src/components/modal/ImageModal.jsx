import { Modal, Image, Icon } from 'semantic-ui-react';
import './modal-div.css';

export function ImageModal(props) {
    return (
        <div className='modal_div'>
            {/* <Modal
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
                    <div className='modal_content'>
                        <button className='left_chevron'>
                            <Icon size='huge' name='chevron left' />
                        </button>
                        <img className='image_modal' src={props.imageInfo.urls.small} alt={props.imageInfo.alt_description} />
                        <button className='right_chevron'>
                            <Icon size='huge' name='chevron right' />
                        </button>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <span>{props.imageInfo.description}</span>
                </Modal.Actions>
            </Modal> */}
            <Modal closeIcon open={props.open} centered={false} onClose={props.onClose} className='modal_content' >

                <button className='left_chevron'><Icon size='huge' color='grey' name='chevron left' /></button>
                <img className='image_modal' src={props.imageInfo.urls.regular} alt={props.imageInfo.alt_description} />
                <button className='right_chevron'><Icon size='huge' color='grey' name='chevron right' /></button>

            </Modal>
        </div>
    );
}