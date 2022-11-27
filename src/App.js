import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "./Components/Layout/Layout.Component";
import HomeComponent from "./Components/Home/Home.Component";
import AboutComponent from "./Components/About/AboutComponent";
import ContactComponent from "./Components/Contact/ContactComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomeComponent />} />
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
