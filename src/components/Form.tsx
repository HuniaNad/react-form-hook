import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "../utils/formValidations";
import './Form.css';

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  gender: string;
}

export const Form: React.FC = () => {
  const { 
    reset,
    register, 
    handleSubmit,
    formState: { errors },
 } = useForm<IFormInput>({ resolver: yupResolver(formSchema) });

 const [submittedData, setSubmittedData] = useState<IFormInput | null>(null);

  const onSubmit = (data: IFormInput) => {
    setSubmittedData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="field" id="name" {...register("name")} />
        {errors.name && <p className="text-danger small mt-1">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="field" id="email" {...register("email")} />
        {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth</label>
        <input type="date" className="field" id="dob" {...register("dob")} />
        {errors.dob && <p className="text-danger small mt-1">{errors.dob.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="tel" className="field" id="phone" {...register("phone")} />
        {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="field" id="address" {...register("address")} />
        {errors.address && <p className="text-danger small mt-1">{errors.address.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <select className="field" id="gender" {...register('gender')}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="text-danger small mt-1">{errors.gender.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      {submittedData && (
          <div className="container mt-4">
        <h1>Your Data</h1>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Phone: {submittedData.phone}</p>
        <p>Date of Birth: {submittedData.dob}</p>
        <p>Address: {submittedData.address}</p>
        <p>Gender: {submittedData.gender}</p>
      </div>
      )}
    </form>


    
  );
};

export default Form;
