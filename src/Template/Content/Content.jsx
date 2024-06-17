import ColorPalette from '../../Components/ColorPalette/ColorPalette';
import CarouselContainer from '../../Components/CustomCarousel/CarouselContainer';
import Reviews from '../../Components/Reviews/Reviews';
import Todo from '../../Components/Todo/Todo';
import UseEffectDemo from '../../Components/UseEffectDemo/UseEffectDemo';
import './Content.css';

import { Card } from 'primereact/card';

const Content = ({ activeProjectId }) => {
  const renderProject = () => {
    switch (activeProjectId) {
      case 1:
        return <Todo />;
      case 2:
        return <UseEffectDemo />;
      case 3:
        return <Reviews />;
      case 4:
        return <CarouselContainer />;
      case 5:
        return <ColorPalette />;

      default:
        break;
    }
  };
  return (
    <>
      <Card className="content-body p-3 me-3 my-3">{renderProject()}</Card>
    </>
  );
};

export default Content;
