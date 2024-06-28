import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import css from "./ContactForm.module.css"

export default function ContactForm({ onAdd }) {
      const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };

    const UserSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Minimum 3 letters")
            .max(3, "Maximum 30 letters")
            .required("This field is required"),
        phoneNumber: Yup.string()
        .max(7, "Phone number must")
        .required("This field is required"),
    });
//     const handleSubmit = (values, actions) => {
//     console.log(values);
//     actions.resetForm();
// };

    return (
        <Formik
            initialValues={{
                username: "",
                phoneNumber:"",
            }}
            validationSchema={UserSchema}
        onSubmit={handleSubmit}>
            
            
            <Form className={css.container}>
                <div className={css.inputWrap}>
                    <label className={css.labelText} htmlFor="username" >Name</label>
                    <Field className={css.fieldInput} type="text" name="username" />
                    <ErrorMessage name="username" component="div"/>
                </div>
                <div className={css.inputWrap}>
                    <label className={css.labelText} htmlFor="phoneNumber" >Number</label>
                    <Field className={css.fieldInput} type="text" name="phoneNumder" />
                    <ErrorMessage name="phoneNumber" component="div"/>
                </div>
                <button className={css.button} type="submit">Add Contact</button>
            </Form>
        </Formik>
    )
}