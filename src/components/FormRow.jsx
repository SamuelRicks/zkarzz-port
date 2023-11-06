import Wrapper from "../assets/wrappers/FormRow";

const FormRow = ({ type, name, text, required }) => {
  return (
    <Wrapper>
      <div className="form-row">
        <div className="input-group">
          <input
            type={type}
            id={name}
            name={name}
            className="form-input"
            required
          />
          <label htmlFor={name}> {name} </label>
        </div>
      </div>
    </Wrapper>
  );
};

export default FormRow;
