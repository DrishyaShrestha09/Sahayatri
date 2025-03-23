import '../../index.css';

import Banner from './Banner';
import Featured from './Featured';
import Recommended from './Recommended';

const Home = () => {
  return (
    <>
      <Banner/>
      <Featured />
      <Recommended />
    </>
  );
};

export default Home;
