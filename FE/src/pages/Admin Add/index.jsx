import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css"
import { MainContext } from "../../context/MainProvider";
import { useContext } from "react";

function AddimAdd() {
  const {url,postElement} = useContext(MainContext)
  return (
    <>
      <title>Admin Add Page</title>

      <Formik
        initialValues={{ name: "", price: "", image: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required"),
          price: Yup.number()
            .required("Required"),
          image: Yup.string()
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting,resetForm }) => {
         resetForm()
         alert("Ugurla gonderildi!!!")
          postElement(url,values)
        }}
      >
        <Form>
          <label htmlFor="name">Product Name</label>
          <Field name="name" type="text" className="inputAdmin"/>
          <ErrorMessage name="name" />

          <label htmlFor="price">Price</label>
          <Field name="price" type="text" className="inputAdmin"/>
          <ErrorMessage name="price" />

          <label htmlFor="image">Image URL</label>
          <Field name="image" type="text" className="inputAdmin"/>
          <ErrorMessage name="image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default AddimAdd;
