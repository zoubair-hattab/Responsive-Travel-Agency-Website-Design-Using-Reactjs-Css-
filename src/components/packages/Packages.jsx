import './packages.css';
import p1 from '../../assets/images/p-1.jpg';
import { packages } from '../../utils/data';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegStar, FaStar } from 'react-icons/fa';
const Packages = () => {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>p</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div className="box-container">
        {packages?.map((item) => (
          <div className="box" key={item.id}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="content">
              <h3>
                <IoLocationOutline className="location" />
                {item.location}
              </h3>
              <p>
                {item.decription?.length > 50
                  ? item.decription.slice(0, 50) + '...'
                  : item.decription}
              </p>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((i, index) =>
                  index + 1 <= item.starts ? (
                    <FaStar className="star" key={index} />
                  ) : (
                    <FaRegStar className="star" key={index} />
                  )
                )}
              </div>
              <div className="price">
                {item.price}
                <span>{item.oldPrice}</span>
              </div>
              <a href="#" className="btn">
                book now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
