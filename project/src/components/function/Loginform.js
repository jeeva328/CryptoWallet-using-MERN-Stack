import React from "react";
import { Formik, useFormik } from "formik";
import './Loginform.css'
import axios from "axios"
import { Redirect } from "react-router-dom";
var login = false;
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
    var Data = await axios.post("http://localhost:2000/login", values.add)
    console.log("data", Data)
    console.log("dataaaaaaaa", Data.data.err)
    if (Data.data.err == null) {
      console.log("it is not err")
      login = true
    }
    console.log(values.add)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  if (login == true) {
    return <Redirect to={"/Profile"} />
  }

  return (
    <form onSubmit={formik.handleSubmit}>
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
                <div className='required'> {formik.errors.email} </div>
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
                <div className='required'> {formik.errors.pass} </div>
              ) : null}{" "}

            </div>{" "}
            <br></br>


            <button type="submit" className='login-submit'>
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
