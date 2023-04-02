import {  useState } from "react"
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';
export default function HomePage() {
  const [isSuccess, setIsSuccess] = useState(false);
// const [information,setinformation]=useState({
//     First_Name:'',
//     Last_Name:'',
//     Email:'',
//     Contact_Number:'',
//     Password: ''
// });

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        values
      );
  
      console.log(response.data);
      if (response.status >= 200 && response.status < 300) {
        setIsSuccess(true);
      }
      // do something with the response data
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

// const handlechange=(e)=>{
// setinformation({...information,[e.target.name]:e.target.value});
// }

const initialValues={
  First_Name: "",
  Last_Name: "",
  Email: "",
  Contact_Number: "",
  Password: ""
}

const validationSchema = Yup.object({
  First_Name: Yup.string().min(3).max(24).required("First_Name must required"),
  Last_Name: Yup.string().min(3).max(24).required("Last_Name must required"),
  Email: Yup.string().email("Invalid email address").required("Email must required"),
  Contact_Number: Yup.string().min(11).required("Contact_Number must required"),
  Password: Yup.string().min(5).required("please enter Password"),
});

const {values,errors,handleBlur,touched,handleChange,resetForm,isValid} = useFormik({
  initialValues: initialValues,
  validationSchema: validationSchema,
   resetForm : () => {
    resetForm();
    }
});


  return (    
<div className="main_container">
{/* <navbar className="navbar"></navbar> */}
<div className="main_body">
<div className="main_bodyleft"><img src="maxresdefault.jpg" style={{width:"100%",height:"580px"}}/></div>

<div className="main_bodyright">
{isSuccess ? (
        <div>
          <h2>Signup Successful!</h2>
          <p>Your account has been created.</p>
        </div>
      ) : (
<form onSubmit={handleSubmit}>
      <div className="inner">
        <h2 style={{marginLeft:"65px"}}> Registeration Form </h2>
          <div className="centerform">
            <label id="tag">First_Name:</label>
            <input className="bars" id="First_Name" type="text" autoComplete="off" name="First_Name" value={values.First_Name} onChange={handleChange} onBlur={handleBlur}/>
            {errors.First_Name && touched.First_Name ?(<p className="form-error">{errors.First_Name}</p>) : null}
            <label id="tag">Last_Name :</label>
            <input className="bars" id="Last_Name" type="text" autoComplete="off" name="Last_Name"  value={values.Last_Name} onChange={handleChange} onBlur={handleBlur}/> {errors.Last_Name && touched.Last_Name ?(<p className="form-error">{errors.Last_Name}</p>) : null}
            <label id="tag">Email :</label>
            <input type="text" id="Email" className="bars" autoComplete="off" name="Email" value={values.Email} onChange={handleChange} onBlur={handleBlur}/> {errors.Email && touched.Email ?(<p className="form-error">{errors.Email}</p>) : null}
            <label id="tag">Contact_Number :</label>
            <input type="text" id="Contact_Number" autoComplete="off" className="bars" name="Contact_Number" value={values.Contact_Number} onChange={handleChange} onBlur={handleBlur} /> {errors.Contact_Number && touched.Contact_Number ?(<p className="form-error">{errors.Contact_Number}</p>) : null}
            <label id="tag">Password :</label>
            <input className="bars" id="Password" autoComplete="off" type="password" name="Password"  value={values.Password} onChange={handleChange} onBlur={handleBlur}/> {errors.Password && touched.Password ?(<p className="form-error">{errors.Password}</p>) : null}
            <button className="but" id="ad" type="submit" disabled={!isValid}> SIGNIN</button>
        </div>
      </div>
    </form>
      )}
</div>
</div>
</div> 
  )
}
