import { list } from '../../assets/data/carousel.data.js';
import ContentHeader from '../../Template/ContentHeader/ContentHeader.jsx';
import Carousel from './Carousel/Carousel.jsx';

function CarouselContainer() {
  return (
    <>
      <center>
        <ContentHeader title="Custom Carousel" />
        <div className="mt-5">
          <Carousel list={list} />
        </div>
      </center>
    </>
  );
}
export default CarouselContainer;
