import React,{useState} from "react"
import {Link} from "react-router-dom";
import InputType from "./InputType";
import { handleLogin,handleRegister } from "../../../services/authService";

const Form = ({formType,submitBtn,formTitle}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const [name,setName] = useState("");
    const [organisationName,setOrganisationName] = useState("");
    const [hospitalName,setHospitalName] = useState("");
    const [website,setWebsite] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
  return (
    <div>
      <form onSubmit={(e)=>{
        if(formType==="login") return handleLogin(e,email,password,role)
        else if(formType==="register") return handleRegister(e,name,role,email,password,phone,organisationName,hospitalName,website)
      }}>
        <h1 className="text-center">{formTitle}</h1>
        <hr/>
        <div className="d-flex mb-3">
          <div className="form-check ms-2" >
            <input type="radio" className="form-check-input" name="role"
              id="adminRadio" value={"admin"} onChange={(e)=>setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">Admin</label>
          </div>
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input" name="role"
              id="donarRadio" value={role} onChange={(e)=>setRole(e.target.value)} defaultChecked
            />
            <label htmlFor="donorRadio" className="form-check-label">Doror</label>
          </div>
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input" name="role"
              id="organisationRadio" value={"organisation"} onChange={(e)=>setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">Organisation</label>
          </div>
          <div className="form-check ms-2">
            <input type="radio" className="form-check-input" name="role"
              id="hospitalRadio" value={"hospital"} onChange={(e)=>setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">Hospital</label>
          </div>
        </div>
        {(()=>{
          // eslint-disable-next-line default-case
          switch (true){
            case formType==="login":{
              return (
                <>
                <InputType labelFor={"forEmail"} labelText={"Email"} inputType={"email"}
                name={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} />
                <InputType labelFor={"forPassword"} labelText={"Password"} inputType={"password"}
                name={"password"} value={password} onChange={(e)=>setPassword(e.target.value)} />
                </>
              );
            }
            case formType==="register":{
             return(
              <>
              {
                (role==="admin" ||
                  role==="donor") &&(
                    <InputType labelFor={"forName"} labelText={"Name"} inputType={"text"}
                    name={"name"} value={name} onChange={(e)=>setName(e.target.value)} />
                  )
              }
              {
              role==="organisation" && (
                 <InputType labelFor={"forOrganisationName"} labelText={"Organisation Name"} inputType={"text"}
                name={"organisationName"} value={organisationName} onChange={(e)=>setOrganisationName(e.target.value)} />
                )
              }
              {
                role==="hospital" && (
                 <InputType labelFor={"forHospitalName"} labelText={"Hospital Name"} inputType={"text"}
                name={"hospitalName"} value={hospitalName} onChange={(e)=>setHospitalName(e.target.value)} />
                )
              }
              <InputType labelFor={"forEmail"} labelText={"Email"} inputType={"email"}
              name={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} />
              <InputType labelFor={"forPassword"} labelText={"Password"} inputType={"password"}
              name={"password"} value={password} onChange={(e)=>setPassword(e.target.value)} /> 
              <InputType labelFor={"forWebsite"} labelText={"websiteName"} inputType={"text"}
              name={"website"} value={website} onChange={(e)=>setWebsite(e.target.value)} />
              <InputType labelFor={"forAddress"} labelText={"Address"} inputType={"text"}
              name={"address"} value={address} onChange={(e)=>setAddress(e.target.value)} />
              <InputType labelFor={"forPhone"} labelText={"Phone"} inputType={"tel"}
              name={"phone"} value={phone} onChange={(e)=>setPhone(e.target.value)} />

              </>
             )
            }
          }
        })()}
        
         <div className="d-flex flex-row justify-content-between">
         {formType ==="login"?(
          <p>Not registered yet ? 
            <Link to="/register">Register Here !</Link>
          </p>
         ):(
          <p>Already Register
            <Link to="/login">Login Here !</Link>
          </p>
         )}
            <button className="btn btn-primary" type="submit">{submitBtn}</button>
            <button className="btn btn-danger" type="reset">RESET</button>

         </div>
      </form>
    </div>
  )
}

export default Form
