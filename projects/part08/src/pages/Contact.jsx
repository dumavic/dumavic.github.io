import { useState } from "react";
import './contact.css';

const Contact = () => {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f59f8399-7448-4088-bd48-292a40e4f84f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
<section id="contact-container">

<section className="info-section">
  <h2>Contact Us</h2>
  <p>Need help? Send us a message!</p>
    <form
    onSubmit={onSubmit}
      id="contact-form"
    >
      <p>
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          name="name"
          required
        />
      </p>
      <p>
        <label for="email">Email:</label>
        <input id="email" placeholder="email" type="email" name="email" required />
      </p>
      <p>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </p>

      <p>
        <button type="submit" id="log">Submit Form</button>
      </p>

      <p id="result">{result}</p>
    </form>
</section>

</section>
    );
  }

  export default Contact;