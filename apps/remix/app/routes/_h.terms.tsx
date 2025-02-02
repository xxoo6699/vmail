import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms of Service" },
    {
      name: "description",
      content:
        "Virtual temporary Email. Privacy friendly, Valid for 1 day, AD friendly, 100% Run on Cloudflare",
    },
  ];
};

export default function Index() {
  return (
    <div className="mx-10 mt-24 text-white">
      <div className="max-w-[1400px] ">
        <h1 className="text-4xl font-bold" id="about">
          Terms of Service
        </h1>
        <p className="mt-8">
          Welcome to MAIL.NONULL! These Terms of Service ("Terms") govern your
          access to and use of our website and services. By accessing or using
          our services, you agree to be bound by these Terms. If you do not
          agree to these Terms, please do not use our services.
        </p>

        <h2 className="mt-8 text-2xl font-bold" id="Collection of Information">
          1. Description of Service
        </h2>
        <p className="mt-4">
          MAIL.NONULL is a minimalistic temporary email service that allows you to
          obtain a temporary email address without disclosing any personal
          information, ensuring the protection of your privacy. Our service
          supports the selection of multiple domain names, providing you with
          the convenience of using it in various scenarios. Additionally,
          MAIL.NONULL operates on the Cloudflare network, guaranteeing a
          super-fast experience.
        </p>

        <h2 className="mt-8 text-2xl font-bold" id="Storage of Emails">
          2. Usage Restrictions
        </h2>
        <p className="mt-4">
          2.1 Availability: Please note that MAIL.NONULL is not available in China
          Mainland. We apologize for any inconvenience caused.
        </p>

        <h2 className="mt-8 text-2xl font-bold" id="Deletion of Emails">
          3. User Responsibilities
        </h2>
        <p className="mt-4">
          3.1 Registration: You are not required to register or provide any
          personal information to use MAIL.NONULL. However, you are solely
          responsible for maintaining the confidentiality of any temporary email
          addresses generated through our service.
        </p>
        <p className="mt-4">
          3.2 Prohibited Activities: While using MAIL.NONULL, you agree not to
          engage in any activities that may violate any applicable laws,
          regulations, or these Terms. Prohibited activities include, but are
          not limited to:
        </p>
        <ul className="mt-4">
          <li>a) Sending spam or unsolicited emails. </li>
          <li>
            b) Interfering with or disrupting the operation of our services.
          </li>
          <li>
            c) Attempting to gain unauthorized access to our systems or
            networks.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-bold" id="Data Security">
          4. Disclaimer of Warranty
        </h2>
        <p className="mt-4">
          MAIL.NONULL is provided on an "as is" and "as available" basis. We do
          not warrant that our services will be uninterrupted, error-free, or
          secure. Your use of MAIL.NONULL is at your own risk, and we disclaim all
          warranties, whether express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>

        <h2 className="mt-8 text-2xl font-bold" id="Third-Party Services">
          5. Limitation of Liability
        </h2>
        <p className="mt-4">
          To the maximum extent permitted by law, in no event shall MAIL.NONULL or
          its affiliates be liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation, loss
          of profits, data, use, goodwill, or other intangible losses, resulting
          from your access to or use of MAIL.NONULL or any content or services
          provided through MAIL.NONULL.
        </p>

        <h2 className="mt-8 text-2xl font-bold" id="">
          6. Modification of Terms
        </h2>
        <p className="mt-4">
          We reserve the right to modify these Terms at any time, without prior
          notice. Any changes to the Terms will be effective immediately upon
          posting. Your continued use of MAIL.NONULL after the posting of any
          modified Terms constitutes your acceptance of such changes.
        </p>

        <h2 className="mt-8 text-2xl font-bold" id="Cookies">
          7. Governing Law and Jurisdiction
        </h2>
        <p className="mt-4">
          These Terms shall be governed by and construed in accordance with the
          laws of the jurisdiction where MAIL.NONULL is located. Any disputes
          arising out of or in connection with these Terms shall be subject to
          the exclusive jurisdiction of the courts in that jurisdiction.
        </p>

        <p className="mt-4">
          If you have any questions or concerns regarding these Terms, please
          contact us.
        </p>
        <p className="mt-8">Last updated: 1999-01-01</p>
      </div>
    </div>
  );
}
