import { Helmet } from "react-helmet";
import { Text,Link } from "@chakra-ui/react";

export default function About() {
  return (
    <div className="page-content">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Text as="b" fontSize={20} marginBottom={6} className="page-title">
       About
      </Text>
      <div>
        <b>Secure Password Generator</b> is a website created by <Link href='https://artis7eer.live'>Abdul Razaq</Link>.
        This website generates secure random passwords.<br/>
        <b>Passwords</b> created by the website are not stored on any servers and are generated random.
        <br/>
        <br/>
        If you like the project please donate <br/>
         <Text as='i'>UPI : artis7eers@ybl</Text> <br/>
         <a href='https://paypal.me/artis7eers' as='i'>Paypal: https://paypal.me/artis7eers</a>
         
      </div>
    </div>
  );
}
