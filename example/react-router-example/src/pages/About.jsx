import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Obtuve nuevos datos del servidor');
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Ir al home</Link>
    </div>
  );
};

export default AboutPage;
