import Wrapper from "../assets/wrappers/FormRow";
import { Logo } from "../components";

const FormRow = ({ type, name, defaultValue }) => {
  return (
    <Wrapper>
      <div className="form-row">
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue || ""}
        />
      </div>
    </Wrapper>
  );
};

export default FormRow;
