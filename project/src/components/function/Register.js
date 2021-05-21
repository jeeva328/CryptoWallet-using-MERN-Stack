import React from "react";
import { Formik, useFormik } from "formik";




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
    error.name = "Required";
  }
  if (!values.birthday) {
    error.birthday = "Required";
  }
  if (!values.phone) {
    error.phone = "required";
  }
  if (!values.email) {
    error.email = "required";
  }
  if (!values.pass) {
    error.pass = "required";
  }
  if (!values.address) {
    error.address = "required";
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
      <div >
        <div>
            
          <label forhtml="name" >
            Name:                            
          </label>{" "}
        </div>{" "}
        <input
          type=" "
          name="name"
          placeholder="your name"    
         
          onChange={formik.handleChange} 
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.name && formik.errors.name ? (
          <div> {formik.errors.name} </div>
        ) : null}{" "}
      </div>{" "}
      <div >
        <div>
          <label forhtml="birthday" >
            Birthday:
          </label>{" "}
        </div>{" "}
        <input
          type="date"
          id="birthday"
          name="birthday"
        
          onChange={formik.handleChange}
          value={formik.values.birthday}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.birthday && formik.errors.birthday ? (
          <div> {formik.errors.birthday} </div>
        ) : null}{" "}
      </div>{" "}
      <div >
        <div>
          <label forhtml="phone" >
            Phone number:
          </label>{" "}
        </div>{" "}
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="0123456789"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        
        />{" "}
        {formik.touched.phone && formik.errors.phone ? (
          <div> {formik.errors.phone} </div>
        ) : null}{" "}
      </div>{" "}
      <div >
        <div>
          <label forhtml="email" >email
          </label>{" "}
        </div>{" "}
        <input
          type="email"
          name="email"
          placeholder="your mail"
     
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.email && formik.errors.email ? (
          <div> {formik.errors.email} </div>
        ) : null}{" "}
      </div>{" "}
      <div >
        <div>
          <label forhtml="pass" >
            Password:
          </label>{" "}
        </div>{" "}
        <input
          type="password"
          name="pass"
          placeholder="set password"
          
          onChange={formik.handleChange}
          value={formik.values.pass}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.pass && formik.errors.pass ? (
          <div> {formik.errors.pass} </div>
        ) : null}{" "}
      </div>{" "}
      <div >
        <div>
          <label forhtml="address" >
            Address:
          </label>{" "}
        </div>{" "}
        <textarea
          type="text"
          name="address"
          
          rows="3"
          cols="10"
          placeholder="your address"
          onChange={formik.handleChange}
          value={formik.values.address}
          onBlur={formik.handleBlur}
        />{" "}
        {formik.touched.address && formik.errors.address ? (
          <div> {formik.errors.address} </div>
        ) : null}{" "}
      </div>{" "}
      <button  type="submit">
        {" "}
        submit{" "}
      </button>{" "}
    </form>
  );
}

export default Loginss;
