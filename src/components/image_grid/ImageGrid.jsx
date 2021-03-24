import {Grid, Ref, Loader} from 'semantic-ui-react';
import './image-grid.css';

export function ImageGrid(props) {
    return (
        <div className='image_grid'>
            <Grid centered padded='horizontally' columns={3}>
                <Grid.Row >
                    {(props.images).map((image, index) => {
                        if (props.images.length === index + 1) {
                            return (
                                <Ref key={image.id} innerRef={props.lastImageRef}>
                                    <Grid.Column key={image.id}>
                                        <div className='image_div'>
                                            <img
                                                className='grid_image'
                                                src={image.urls.regular} 
                                                alt={image.alt_description} 
                                                onClick={ () => {props.onImageClick(image)}} 
                                            />
                                        </div>
                                    </Grid.Column>
                                </Ref>                    
                            )
                        } else {
                            return (
                                <Grid.Column key={image.id}>
                                    <div className='image_div'>
                                        <img
                                            className='grid_image'
                                            src={image.urls.regular} 
                                            alt={image.alt_description} 
                                            onClick={ () => {props.onImageClick(image)}} 
                                        />
                                    </div>
                                </Grid.Column>
                            )
                        }
                    })}
                    <div>{props.loading && <Loader active inline='centered' />}</div>
                    <div>{props.error && <p>props.errorMessage</p>}</div>
                </Grid.Row>
            </Grid>
        </div>
    );
}