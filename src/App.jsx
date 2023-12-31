//* Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  //* The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <NavBar />
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
