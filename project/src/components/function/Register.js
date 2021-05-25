import React from "react";
import { Formik, useFormik } from "formik";
import './Register.css'

const initialValues = {
  name: "",
  birthday: "",
  phone: "",
  email: "",      
  pass: "",
  address: "",
  add: "",
  newobject: "",
};

const validate = (values) => {
  let error = {};
  if (!values.name) {
    error.name = "Required Field";
  }
  if (!values.birthday) {
    error.birthday = "Required Field";
  }
  if (!values.phone) {
    error.phone = "Required Field";
  }
  if (!values.email) {
    error.email = "Required Field";
  }
  if (!values.pass) {
    error.pass = "Required Field";
  }
  return error;
};

function Loginss(props) {
  
  const onSubmit = async (values) => {
    values.add = {
      name: values.name,
      birthday: values.birthday,
      phone: values.phone,
      email: values.email,
      pass: values.pass,
      address: values.address,
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
      <body className='log'>
      <div >
        <div>     
          <label className='head' forhtml="name" >
            Name:                            
          </label>{" "}
        </div>{" "}
        <input
        className="in"
          type=" "
          name="name"
          placeholder="Your Name"    
         
          onChange={formik.handleChange} 
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />{" "}
         {formik.touched.name && formik.errors.name ? (
          <div className='req'> {formik.errors.name} </div>
        ) : null}{" "}
      </div>{" "}
      <br></br>

      <div >
        <div>
          <label className='head' forhtml="birthday" >
            DateOfBirth:
          </label>{" "}
        </div>{" "}
        <input
          type="date"
          id="birthday"
          name="birthday"
          className="in"
          onChange={formik.handleChange}
          value={formik.values.birthday}
          onBlur={formik.handleBlur}
        />{" "}
         {formik.touched.birthday && formik.errors.birthday ? (
          <div  className='req'> {formik.errors.birthday} </div>
        ) : null}{" "}
      </div>{" "}
      <br></br>

      <div >
        <div>
          <label className='head' forhtml="phone" >
            Contact Number:
          </label>{" "}
        </div>{" "}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="0123456789"
          className="in"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        
        />{" "}
        {formik.touched.phone && formik.errors.phone ? (
          <div  className='req'> {formik.errors.phone} </div>
        ) : null}{" "}
        </div>{" "}
      <br></br>

      <div >
        <div>
          <label className='head' forhtml="email" >Email:
          </label>{" "}
        </div>{" "}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="in"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div  className='req'> {formik.errors.email} </div>
        ) : null}{" "}
              </div>{" "}
      <br></br>

      <div >
        <div>
          <label className='head' forhtml="pass" >
            Password:
          </label>{" "}
        </div>{" "}
        <input
          type="password"
          name="pass"
          placeholder="Set Password"
          className="in"
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div  className='req'> {formik.errors.pass} </div>
        ) : null}{" "}
        
      </div>{" "}
      <br></br>

      
      <button  type="submit" className='sub'>
        {" "}
        REGISTER{" "}
      </button>{" "}
    </body>
    </form>
  );
}

export default Loginss;
