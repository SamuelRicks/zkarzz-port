import Wrapper from "../assets/wrappers/Contact";
import { Title, ContactHero, FormRow } from "../components";
import { BsPerson } from "react-icons/bs";

const Contact = () => {
  return (
    <Wrapper>
      <Title title=" Contact" />
      <ContactHero />
      <form className="form" action="sricks@gmail.com" method="post">
        <FormRow type="text" name="name" />
        <FormRow type="email" name="email" />
        <FormRow type="text" name="title" />
        <div className="input-group">
          <textarea
            type="text"
            id="message"
            name="message"
            className="form-message"
            required
          />
          <label htmlFor="message"> Message </label>
        </div>

        <button type="submit"> {`Submit ${"<~>"} `} </button>
      </form>
    </Wrapper>
  );
};

export default Contact;
