import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3, "Your name is too short")
    .max(25, "your name is too long"),
  email: Yup.string().required().email(),
  password: Yup.string()
    .required()
    .min(5, "Your passord is too short")
    .max(25, "Your password is too long"),
  confirmPassword: Yup.string()
    .required("confirom password is required")
    .oneOf([Yup.ref("password"), null], "password must match")
});
export default FormSchema;


