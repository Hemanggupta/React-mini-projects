import { useEffect, useState } from 'react';
import './Carousel.css';

function Carousel({ list }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const AutoNext = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      const interval = setInterval(() => {
        setActiveItemIndex(prevIndex => {
          const newIndex = (prevIndex + 1) % list.length;
          // console.log(newIndex, new Date().getSeconds());
          return newIndex;
        });
      }, 5000);
      setIntervalId(interval);
      return () => clearInterval(interval);
    };
    AutoNext();
  }, [activeItemIndex]);

  const HandleNext = () => {
    setActiveItemIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % list.length;
      return newIndex;
    });
  };

  const HandlePrev = () => {
    setActiveItemIndex(prevIndex => {
      const newIndex = (prevIndex - 1 + list.length) % list.length;
      return newIndex;
    });
  };

  return (
    <>
      <section className="carousel-container">
        {list.map((item, index) => {
          const { id, name, image, quote, title } = item;
          const style = {
            transform: `translateX(${(index - activeItemIndex) * 100}%)`,
            visibility: index === activeItemIndex ? 'visible' : 'hidden',
            opacity: index === activeItemIndex ? 1 : 0
          };

          return (
            <article key={id} style={style} className="custom-carousel-item">
              <img src={image} alt={name} className="carousel-img" />
              <h3 className="name">{name}</h3>
              <h5 className="title">{title}</h5>
              <p className="quote">{quote}</p>
            </article>
          );
        })}
        <button onClick={HandlePrev} className="btn pi pi-angle-left prev"></button>
        <button onClick={HandleNext} className="btn pi pi-angle-right next"></button>
      </section>
    </>
  );
}
export default Carousel;
