import { Container } from './style';

const FormCheckbox = ({ label, type, name, id, htmlFor }) => {
  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} name={name} id={id} required />
    </Container>
  );
};

export default FormCheckbox