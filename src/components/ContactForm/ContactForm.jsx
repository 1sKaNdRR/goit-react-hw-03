import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import css from "./ContactForm.module.css"

export default function ContactForm() {

    const UserSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Minimum 3 letters")
            .max(3, "Maximum 30 letters")
            .required("This field is required"),
        phoneNumber: Yup.string()
        .max(7, "Phone number must")
        .required("This field is required"),
    });
    const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
};

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
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

// return (
//     <Formik
//       initialValues={{
//         username: "",
//         email: "",
//         role: "user",
//         comment: "",
//         opts: [],
//       }}
//       validationSchema={UserSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form className={css.form}>
//         <div className={css.formGroup}>
//           <label>Username:</label>
//           <Field className={css.input} type="text" name="username" />
//           <ErrorMessage
//             className={css.error}
//             name="username"
//             component="span"
//           />
//         </div>

//         <div className={css.formGroup}>
//           <label>Email:</label>
//           <Field className={css.input} type="email" name="email" />
//           <ErrorMessage className={css.error} name="email" component="span" />
//         </div>

//         <div className={css.formGroup}>
//           <label>Role:</label>
//           <Field as="select" className={css.input} name="role">
//             <option value="guest">Guest</option>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </Field>
//           <ErrorMessage className={css.error} name="role" component="span" />
//         </div>