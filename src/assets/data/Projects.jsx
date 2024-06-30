import ColorPalette from '../../Components/ColorPalette/ColorPalette';
import CarouselContainer from '../../Components/CustomCarousel/CarouselContainer';
import Reviews from '../../Components/Reviews/Reviews';
import Todo from '../../Components/Todo/Todo';
import UberQuestion from '../../Components/UberQuestion/UberQuestion';
import UseEffectDemo from '../../Components/UseEffectDemo/UseEffectDemo';

export const projectList = [
  { id: 1, name: 'Todo List', isActive: false, component: <Todo /> },
  { id: 2, name: 'User List', isActive: false, component: <UseEffectDemo /> },
  { id: 3, name: 'Reviews', isActive: false, component: <Reviews /> },
  { id: 4, name: 'Carousel', isActive: false, component: <CarouselContainer /> },
  { id: 5, name: 'Color Palette', isActive: false, component: <ColorPalette /> },
  { id: 6, name: 'Uber Question', isActive: true, component: <UberQuestion /> }
];
