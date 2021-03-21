import {Grid, Image, Ref} from 'semantic-ui-react';
import './image-grid.css';

export function ImageGrid(props) {
    return (
        <div className='image_grid'>
            <Grid container columns={4} >
                {(props.images).map((image, index) => {
                    if (props.images.length === index + 1) {
                        return (
                            <Ref key={image.id} innerRef={props.lastImageRef}>
                                <Grid.Column>
                                    <Image src={image.urls.regular} onClick={ () => {props.onImageClick(image)} }/>
                                </Grid.Column> 
                            </Ref>                    
                        )
                    } else {
                        return (
                            <Grid.Column key={image.id} >
                                <Image src={image.urls.regular} onClick={ () => {props.onImageClick(image)} }/>
                            </Grid.Column>
                        )
                    }
                })}
                <div>{props.loading && 'Loading...'}</div>
                <div>{props.error && 'Error'}</div>
            </Grid>
        </div>
    );
}