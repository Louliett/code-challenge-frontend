import { Modal, Icon } from 'semantic-ui-react';
import './image-modal.css';

export function ImageModal(props) {
    return (
            <Modal closeIcon open={props.openImageModal} centered={false} onClose={props.closeImageModal} className='modal_content' >
                <div className='left_chevron' onClick={() => {props.onChevronClick(-1)}}>
                    <Icon size='huge' color='grey' name='chevron left' />
                </div>
                <img className='image_modal' src={props.imageInfo.urls.regular} alt={props.imageInfo.alt_description} />
                <div className='right_chevron' onClick={() => {props.onChevronClick(1)}}>
                    <Icon size='huge' color='grey' name='chevron right' />
                </div>
                <div className='info_circle' onClick={() => {props.onInfoClick()}}>
                    <Icon size='huge' color='grey' name='info circle' />
                </div>
                <Modal dimmer='inverted' closeIcon open={props.openInfoModal} onClose={props.closeInfoModal} size='small' className='modal_info'>
                    <div className='top_half'>
                        <img src={props.imageInfo.urls.regular} alt={props.imageInfo.alt_description} className='info_image'></img>
                        <div className='description_username'>
                            <h2> Title: {props.imageInfo.description || 'Splash!'} </h2>
                            <h3> Author: {props.imageInfo.user.username} </h3>
                        </div>                        
                    </div>
                    <hr className='modal_divider'/>
                    <div className='bottom_half'>
                        <div className='meta_info'>
                            <p>
                                Width: {props.imageInfo.width}
                            </p>
                            <p>
                                Height: {props.imageInfo.height}
                            </p>
                            <p>
                                Created On: { new Date(props.imageInfo.created_at).toLocaleDateString() }
                            </p>
                            <p>
                                Sponsored By: {props.imageInfo.sponsorship === null || props.imageInfo.sponsorship === undefined  ? 'N/A' : props.imageInfo.sponsorship.sponsor.name}
                            </p>
                        </div>
                        <div className='like_icon'>
                            <Icon name='like' color='red' size='large'/> {props.imageInfo.likes}
                        </div>
                        <div className='download_icon' onClick={() => {props.onDownload(props.imageInfo.urls.raw)}}>
                            <Icon name='download' color='black' size='large' colo='grey' />
                        </div>
                    </div>
                </Modal>
            </Modal>
        
    );
}