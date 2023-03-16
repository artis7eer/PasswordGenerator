import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home, About, PrivacyPolicy, Terms, Contact } from "./pages/Index";
import { Text,Center} from '@chakra-ui/react';

function Error(){
  return <Center>
    <Text as='b'>404 Page Not Found</Text>
  </Center>
}

const Footer = () =>{
  return <Center>Created By Abdul Razaq A</Center>
}

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
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer/>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
