import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'

export default function AddTaskPage() {

const handleSubmit=async (event)=>{
try{
    event.preventDefault();
const response=await axios.post("http://localhost:3000/api/tasksadded",values);
console.log(response.data);
resetForm(); 
}
catch(error){
console.log(error);
}};

const initialValues = {
    Task_Name: "",
    Description: "",
    Duration: "",
    Start_Date_Time: "",
    End_Date_Time: "",
  };

  const validationSchema = Yup.object({
    Task_Name: Yup.string().min(3, "Task Name must be at least 3 characters").max(10, "Task Name cannot exceed 10 characters")
    .required("Task Name is required"),
    Description: Yup.string().min(3, "Description must be at least 3 characters").max(50, "Description cannot exceed 50 characters")
    .required("Description is required"),
    Duration: Yup.string().min(3, "Duration must be at least 3 characters").max(10, "Duration cannot exceed 10 characters")
    .required("Duration is required"),
    Start_Date_Time: Yup.date().required("Start time is required"),
    End_Date_Time: Yup.date().required("End time is required")
    // .when(
    // "Start_Taskadded_Date_Time",
    // (startDateTime, schema) => startDateTime && schema.min(startDateTime, "End time must be after start time")
    // )
     });

const {values,errors,handleBlur,touched,handleChange,resetForm,isValid,} = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    resetForm: () => {
      resetForm();
    },
  });

  return (
    <div className='task-form'>
      <div className='center'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='task-name'>Task_Name:</label>
            <input type='text' id='task-name' name='Task_Name' className='add' value={values.Task_Name} onChange={handleChange}  onBlur={handleBlur}/>
            {errors.Task_Name && touched.Task_Name ? (
  <p className="form-error">{errors.Task_Name}</p>
) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='Description'>Description:</label>
            <textarea id='Description' name='Description' style={{margin:"auto"}}  className='add' value={values.Description} onChange={handleChange} onBlur={handleBlur}/>
            {errors.Description && touched.Description ? (
                <p className="form-error">{errors.Description}</p>
              ) : null}
          </div>

          <div className='form-group'>
            <label htmlFor='Duration'>Duration:</label>
            <input type='text' id='Duration' name='Duration' className='add'  value={values.Duration} onChange={handleChange} onBlur={handleBlur}/>
            {errors.Duration && touched.Duration ? (
                <p className="form-error">{errors.Duration}</p>
              ) : null}
          </div>
          
           <div className='form-group'>
            <label htmlFor='Start_Date_Time'>Start_Date_Time:</label>
            <input type='datetime-local' id='Start_Date_Time'className='add' name='Start_Date_Time' style={{margin:"auto"}} value={values.Start_Date_Time}  onChange={handleChange} onBlur={handleBlur}/>
            {errors.Start_Date_Time && touched.Start_Date_Time ? (
                <p className="form-error">{errors.Start_Date_Time}</p>
              ) : null}
          </div>
           
           <div className='form-group'>
            <label htmlFor='End_Date_Time'>End_Date_Time:</label>
            <input type='datetime-local' id='End_Date_Time'className='add' name='End_Date_Time' style={{position:"relative",left:"10px"}}  value={values.End_Date_Time} onChange={handleChange} onBlur={handleBlur}/>
            {errors.End_Date_Time && touched.End_Date_Time ? (
                <p className="form-error">{errors.End_Date_Time}</p>
              ) : null}
          </div>  
          <button type='submit' className='button1'  disabled={!isValid}>Submit</button>
        </form>
      </div>
    </div>
  );
  }