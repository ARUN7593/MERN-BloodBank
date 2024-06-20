import React from 'react'
import Form from "../../components/Shared/Form/Form";

const Register = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./images/register.webp" alt="" />
        </div>
        
          <div className="col-md-4 form-container ">
            <Form formTitle={" Register Page "} submitBtn={"Register"} formType={'register'}/>
          </div>
        
      </div>
    </div>
  );
}

export default Register
