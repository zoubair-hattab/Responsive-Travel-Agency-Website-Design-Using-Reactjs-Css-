import { galleries } from '../../utils/data';
import './gallery.css';
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span>g</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
      </h1>
      <div className="box-container">
        {galleries?.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt="" />
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.decription}</p>
              <a href="#" className="btn">
                see more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
