import React from "react";
import { Formik, useFormik } from "formik";
import './Loginform.css'

const initialValues = {
  email: "",      
  pass: "",
  newobject: "",
};

const validate = (values) => {
  let error = {};
 
  if (!values.email) {
    error.email = "* Required Field";
  }
  if (!values.pass) {
    error.pass = "* Required Field";
  }
  return error;
};

function Loginform(props) {
  
  const onSubmit = async (values) => {
    values.add = {
      email: values.email,
      pass: values.pass,
    };

    console.log(values.add)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  

  return (
    <form  onSubmit={formik.handleSubmit}>
      <body >
        <div className='login-form'>
      <div className='content'>
      
      <div >
        <div>
          <label className='dest' forhtml="email" >Email:
          </label>{" "}
        </div>{" "}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="box-log"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div  className='required'> {formik.errors.email} </div>
        ) : null}{" "}
              </div>{" "}
      <br></br>

      <div >
        <div>
          <label className='dest' forhtml="pass" >
            Password:
          </label>{" "}
        </div>{" "}
        <input
          type="password"
          name="pass"
          placeholder="Your Password"
          className="box-log"
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div  className='required'> {formik.errors.pass} </div>
        ) : null}{" "}
        
      </div>{" "}
      <br></br>

      
      <button  type="submit" className='login-submit'>
        {" "}
        Login{" "}
      </button>{" "}
      </div>
      </div>
    </body>
    </form>
  );
}

export default Loginform;
