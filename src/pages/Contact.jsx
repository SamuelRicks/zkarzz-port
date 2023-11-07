import Wrapper from "../assets/wrappers/Contact";
import { Title, ContactHero, FormRow } from "../components";

const Contact = () => {
  return (
    <Wrapper>
      <Title title=" Contact" />
      <div className="contact-area">
        <ContactHero />
        <form
          className="form form-area"
          action="sricks@gmail.com"
          method="post"
        >
          <div className="inside-elements">
            <div className="two-inputs">
              <FormRow type="text" name="name" className="inside-flex" />
              <FormRow type="email" name="email" className="inside-flex" />
            </div>
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
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
