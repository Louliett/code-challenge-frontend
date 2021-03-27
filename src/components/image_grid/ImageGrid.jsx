import {Grid, Ref, Loader} from 'semantic-ui-react';
import './image-grid.css';

export function ImageGrid(props) {
    return (
        <div className='image_grid'>
            <Grid centered stackable padded='horizontally'>
                {/* <Grid.Row> */}
                    {console.log(window.innerWidth, ' WIDTH')}
                    {(props.images).map((image, index) => {
                        if (props.images.length === index + 1) {
                            return (
                                <Ref key={image.id} innerRef={props.lastImageRef}>
                                    <Grid.Column key={image.id} computer={5} mobile={16}>
                                        {/* <div className='image_div'> */}
                                            <img
                                                className='image'
                                                src={image.urls.regular} 
                                                alt={image.alt_description} 
                                                onClick={ () => {props.onImageClick(image, index)}} 
                                            />
                                        {/* </div> */}
                                    </Grid.Column>
                                </Ref>
                            )
                        } else {
                            return (
                                <Grid.Column key={image.id} computer={5} mobile={16}>
                                    {/* <div className='image_div'> */}
                                        <img
                                            className='image'
                                            src={image.urls.regular} 
                                            alt={image.alt_description} 
                                            onClick={ () => {props.onImageClick(image, index)}} 
                                        />
                                    {/* </div> */}
                                </Grid.Column>
                            )
                        }
                    })}
                    <div>{props.loading && <Loader active inline='centered' />}</div>
                    <div>{props.error && <p>props.errorMessage</p>}</div>
                {/* </Grid.Row> */}
            </Grid>
        </div>
    );
}