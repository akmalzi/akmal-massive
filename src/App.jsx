// import Footer from "./component/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import Katalog from "./pages/Katalog.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import DetailKatalog from "./pages/DetailKatalog.jsx";
import Edukasi from "./pages/Edukasi.jsx";
import Fasilitas from "./pages/Fasilitas.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/katalog/:parameter" element={<DetailKatalog />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
