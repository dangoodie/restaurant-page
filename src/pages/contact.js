import Navbar from "../components/navbar.js";

const Contact = () => {
  const contact = document.createElement("div");
  contact.appendChild(Navbar());

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");

  const card = document.createElement("div");
  card.classList.add("contact-card");

  const header = document.createElement("p");
  header.classList.add("contact-header");
  header.textContent = "Contact Us";

  const phoneNum = document.createElement("p");
  phoneNum.classList.add("contact-item");
  phoneNum.textContent = "Phone: +61 479 059 229";

  const email = document.createElement("p");
  email.classList.add("contact-item");
  email.textContent = "Email: info@mellowmozzarella.com.au";

  card.appendChild(header);
  card.appendChild(phoneNum);
  card.appendChild(email);
  contactDiv.appendChild(card);
  contact.appendChild(contactDiv);
  return contact;
};
export default Contact;
