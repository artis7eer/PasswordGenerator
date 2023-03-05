import { Helmet } from "react-helmet";
import { Text } from "@chakra-ui/react";

export default function Contact() {
    return <div className="page-content">
    <Helmet>
        <title>Contact US</title>
      </Helmet>
    <Text as='b' className="page-title">Contact US</Text><br/>
    <b> Have any Suggestions contact us at artis7eer+passgen[at]gmail[dot]com</b>
    </div>
}