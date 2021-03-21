import './home.css';
import { HeaderContainer } from '../header/HeaderContainer';
import { ImageGridContainer } from '../image_grid/ImageGridContainer';
import { ImageModalContainer } from '../modal/ImageModalContainer';


//This is a parent component
export function Home(props) {
    return (
        <div className='home_div'>
            <HeaderContainer />
            <ImageGridContainer />
            <ImageModalContainer />
        </div>
    );
}