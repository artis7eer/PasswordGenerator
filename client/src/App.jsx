import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home, About, PrivacyPolicy, Terms, Contact } from "./pages/Index";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="" element={<Contact />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
