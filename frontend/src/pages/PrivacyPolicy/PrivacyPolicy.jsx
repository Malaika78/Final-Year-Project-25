import React from "react";
import "./PrivacyPolicy.css"; // Include the CSS for styles

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-policy-header">
        <h1>Privacy Policy</h1>
      </header>

      <section className="privacy-policy-content">
        <p>
          <strong>Effective Date:</strong> ...........
        </p>
        <p>
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          protect your personal data when you use our website and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information when you visit our website, register, place an
          order, subscribe to our newsletter, or interact with our services. The
          types of personal data we may collect include:
        </p>
        <ul className="privacy-policy-list">
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Billing and Shipping Address</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Your personal data is used to:</p>
        <ul className="privacy-policy-list">
          <li>Process and fulfill your orders</li>
          <li>
            Communicate with you regarding your orders, inquiries, or promotions
          </li>
          <li>Improve our website and services</li>
          <li>Send marketing emails, if you have opted in</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. How We Protect Your Information</h2>
        <p>
          We use industry-standard security measures to protect your personal
          information, including encryption, secure servers, and regular audits.
          However, no method of transmission over the internet is completely
          secure, and we cannot guarantee 100% security.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We may share your information with third-party service providers who
          assist us in operating our website, processing payments, or delivering
          products. These third parties are obligated to keep your data secure
          and only use it for specific purposes related to our services.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal data. If
          you wish to exercise any of these rights, please contact us at
          talkwithmalaika@gmail.com.
        </p>

        <h2>6. Cookies</h2>
        <p>
          We use cookies to enhance your experience on our website. Cookies are
          small files stored on your device that help us remember your
          preferences and improve site performance. You can control cookie
          settings through your browser.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Effective Date." Please review
          this page periodically for the latest information.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy practices,
          please contact us at:
        </p>
        <p>
          <strong>On Demand Food Delivery</strong>
          <br />
          talkwithmalaika@gmail.com
          <br />
          +92 3244914082
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
