import Wrapper from "../assets/wrappers/Contact";
import { Title, ContactHero, FormRow } from "../components";

const Contact = () => {
  return (
    <Wrapper>
      <Title title=" Contact" />
      <ContactHero />
      <form className="form" action="sricks@gmail.com" method="post">
        <FormRow type="text" name="name" defaultValue="Name" required />
        <FormRow type="email" name="email" defaultValue="Email" required />
        <FormRow type="text" name="title" defaultValue="Title" required />
        <textarea
          type="text"
          id="message"
          name="message"
          className="form-message"
          defaultValue="Message"
          required
        />

        <button type="submit"> {`Submit ${"<~>"} `} </button>
      </form>
    </Wrapper>
  );
};

export default Contact;
