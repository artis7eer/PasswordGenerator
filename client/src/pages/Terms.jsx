import { Helmet } from "react-helmet";
import { Text, Link } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

export default function Terms() {
  return (
    <div className="page-content">
      <Helmet>
        <title>Terms Of Service</title>
      </Helmet>
      <Text as="b" fontSize={20} marginBottom={6} className="page-title">
        Website Terms and Conditions of Use
      </Text>
      <br />
      <br/>
      <b>1. Terms</b>

      <p>
        By accessing this Website, accessible from
        passwordgenerator.artis7eer.live, you are agreeing to be bound by these
        Website Terms and Conditions of Use and agree that you are responsible
        for the agreement with any applicable local laws. If you disagree with
        any of these terms, you are prohibited from accessing this site. The
        materials contained in this Website are protected by copyright and trade
        mark law.
      </p>

      <br />
      <b>2. Use License</b>

      <p>
        Permission is granted to temporarily download one copy of the materials
        on Secure Password Generator's Website for personal, non-commercial
        transitory viewing only. This is the grant of a license, not a transfer
        of title, and under this license you may not:
      </p>

      <ul>
        <li>modify or copy the materials;</li>
        <li>
          use the materials for any commercial purpose or for any public
          display;
        </li>
        <li>
          attempt to reverse engineer any software contained on Secure Password
          Generator's Website;
        </li>
        <li>
          remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li>
          transferring the materials to another person or "mirror" the materials
          on any other server.
        </li>
      </ul>

      <p>
        This will let Secure Password Generator to terminate upon violations of
        any of these restrictions. Upon termination, your viewing right will
        also be terminated and you should destroy any downloaded materials in
        your possession whether it is printed or electronic format.
      </p>
      <br />
      <b>3. Disclaimer</b>

      <p>
        All the materials on Secure Password Generator's Website are provided
        "as is". Secure Password Generator makes no warranties, may it be
        expressed or implied, therefore negates all other warranties.
        Furthermore, Secure Password Generator does not make any representations
        concerning the accuracy or reliability of the use of the materials on
        its Website or otherwise relating to such materials or any sites linked
        to this Website.
      </p>
      <br />
      <b>4. Limitations</b>

      <p>
        Secure Password Generator or its suppliers will not be hold accountable
        for any damages that will arise with the use or inability to use the
        materials on Secure Password Generator's Website, even if Secure
        Password Generator or an authorize representative of this Website has
        been notified, orally or written, of the possibility of such damage.
        Some jurisdiction does not allow limitations on implied warranties or
        limitations of liability for incidental damages, these limitations may
        not apply to you.
      </p>
      <br />
      <b>5. Revisions and Errata</b>

      <p>
        The materials appearing on Secure Password Generator's Website may
        include technical, typographical, or photographic errors. Secure
        Password Generator will not promise that any of the materials in this
        Website are accurate, complete, or current. Secure Password Generator
        may change the materials contained on its Website at any time without
        notice. Secure Password Generator does not make any commitment to update
        the materials.
      </p>
      <br />
      <b>6. Links</b>

      <p>
        Secure Password Generator has not reviewed all of the sites linked to
        its Website and is not responsible for the contents of any such linked
        site. The presence of any link does not imply endorsement by Secure
        Password Generator of the site. The use of any linked website is at the
        user's own risk.
      </p>

      <b>7. Site Terms of Use Modifications</b>

      <p>
        Secure Password Generator may revise these Terms of Use for its Website
        at any time without prior notice. By using this Website, you are
        agreeing to be bound by the current version of these Terms and
        Conditions of Use.
      </p>
      <br />

      <b>8. Your Privacy</b>

      <p>
        Please read our{" "}
        <Link as={RLink} to="/privacy-policy">
          Privacy Policy
        </Link>
        .
      </p>
      <br />

      <b>9. Governing Law</b>

      <p>
        Any claim related to Secure Password Generator's Website shall be
        governed by the laws of in without regards to its conflict of law
        provisions.
      </p>
    </div>
  );
}
