import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
