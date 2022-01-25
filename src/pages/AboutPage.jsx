import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et doloribus
          fugiat unde, a, dicta odit necessitatibus commodi eveniet sint
          temporibus, aliquid veniam in. Possimus consequatur quod sed eius.
          Sit, facere.
        </p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
