import React from 'react'
import Form from "../../components/Shared/Form/Form";
import Spinner from "../../components/Shared/Spinner";
import {useSelector} from "react-redux";

const Login = () => {
  const {loading,error} = useSelector((state)=>state.auth);
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading?(<Spinner/>):(
    <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./src/images/register.webp" alt="" />
        </div>
        
          <div className="col-md-4 form-container ">
            <Form formTitle={" Login Page "} submitBtn={"Login"} formType={'login'}/>
          </div>
      </div>
      )}
    </>
  );
}

export default Login
