import { Outlet } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
      <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default App;
