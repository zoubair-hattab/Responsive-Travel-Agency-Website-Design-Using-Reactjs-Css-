import './services.css';
import {
  FaBullhorn,
  FaGlobeAsia,
  FaHiking,
  FaHotel,
  FaPlane,
  FaUtensils,
} from 'react-icons/fa';
const Services = () => {
  const services = [
    {
      icon: <FaHotel />,
      title: 'affordable htoles',
      decription:
        ' He has curly, brown hair, has a stocky torso with defined chest muscles, and a muscular neck, and he seems friendly.',
    },
    {
      icon: <FaUtensils />,
      title: 'food and drinks',
      decription:
        ' He has curly, brown hair, has a stocky torso with defined chest muscles, and a muscular neck, and he seems friendly.',
    },
    {
      icon: <FaBullhorn />,
      title: 'safty guide',
      decription:
        ' He has curly, brown hair, has a stocky torso with defined chest muscles, and a muscular neck, and he seems friendly.',
    },
    {
      icon: <FaGlobeAsia />,
      title: 'arround the world',
      decription:
        ' He has curly, brown hair, has a stocky torso with defined chest muscles, and a muscular neck, and he seems friendly.',
    },
    {
      icon: <FaPlane />,
      title: 'faster travel',
      decription:
        ' He has curly, brown hair, has a stocky torso with defined chest muscles, and a muscular neck, and he seems friendly.',
    },
    {
      icon: <FaHiking />,
      title: 'addventure',
      decription:
        ' He has curly, brown hair, has a stocky torso with defined chest muscles, and a muscular neck, and he seems friendly.',
    },
  ];
  return (
    <section className="services" id="services">
      <h1 className="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>
      <div className="box-container">
        {services?.map((item, index) => (
          <div className="box" key={index}>
            <i>{item.icon}</i>
            <h3>{item.title}</h3>
            <p>{item.decription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
