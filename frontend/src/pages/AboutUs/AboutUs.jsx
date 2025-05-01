import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <header className="aboutus-header">
        <h1>About Us</h1>
      </header>

      <section className="aboutus-content">
        <h2>Our Mission</h2>
        <p>
          At <strong>On Demand Food Delivery</strong>, our mission is to provide
          fast, reliable, and convenient food delivery services. We aim to bring
          the best restaurants to your doorstep with a seamless ordering and
          delivery experience. Our focus is on quality, customer satisfaction,
          and making your life easier with every meal.
        </p>

        <h2>Who We Are</h2>
        <p>
          <strong>On Demand Food Delivery</strong> was founded in 2025 by
          Malaika. We are a passionate team of food enthusiasts and tech
          innovators dedicated to making food delivery faster, easier, and more
          enjoyable. With a deep understanding of both the food industry and
          customer needs, we've created a platform that connects customers with
          their favorite restaurants in a few simple clicks.
        </p>

        <h2>What We Do</h2>
        <p>
          We specialize in on-demand food delivery, providing customers with
          access to a wide range of restaurants, cuisines, and dishes. Whether
          you're craving pizza, sushi, or a healthy salad, we’ve got you
          covered. Our platform allows you to easily browse menus, place orders,
          and enjoy real-time tracking of your food as it's delivered to your
          door.
        </p>

        <h2>Our Values</h2>
        <ul className="aboutus-values">
          <li>
            <strong>Customer Satisfaction:</strong> We prioritize our customers
            by delivering excellent service and ensuring a seamless experience.
          </li>
          <li>
            <strong>Convenience:</strong> We aim to make food ordering simple,
            fast, and accessible to everyone, wherever they are.
          </li>
          <li>
            <strong>Quality:</strong> We work with top restaurants to ensure
            that you receive high-quality food, fresh and ready for delivery.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously improve our technology
            to provide the best possible experience for our users.
          </li>
        </ul>

        <h2>Why Choose Us</h2>
        <p>
          When you choose <strong>On Demand Food Delivery</strong>, you’re
          choosing a reliable, customer-focused food delivery service that
          guarantees quality and convenience. Our platform allows you to access
          the best food from a variety of local restaurants with just a few
          clicks. We deliver not only delicious meals but also peace of mind.
        </p>

        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Whether you have a question about your
          order, feedback for us, or a suggestion, feel free to get in touch.
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

export default AboutUs;
