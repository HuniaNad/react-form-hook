import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "../../utils/validations/formValidations";
import Button from "../../components/Button/Button";

import LabelledInput from "../../components/LabelledInput/LabelledInput";
import DataModal from "../../components/DataBox/DataModal";
import { IBiodataFormInput } from "../../types";

export const BiodataForm: React.FC = () => {
  const GENDERS = ['', 'male', 'female', 'other'];
  const { 
    reset,
    register, 
    handleSubmit,
    formState: { errors },
 } = useForm<IBiodataFormInput>({ resolver: yupResolver(formSchema) });

 const [submittedData, setSubmittedData] = useState<IBiodataFormInput | null>(null);

  const onSubmit = (data: IBiodataFormInput) => {
    setSubmittedData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">

      <LabelledInput 
        type="text" 
        id="name" 
        label="Name" 
        errorMsg={errors.name?.message} 
        register={register} 
      />

      <LabelledInput 
        type="email" 
        id="email" 
        label="Email" 
        errorMsg={errors.email?.message} 
        register={register} 
      />

      <LabelledInput 
        type="date" 
        id="dob" 
        label="Date of Birth" 
        errorMsg={errors.dob?.message} 
        register={register} 
      />

      <LabelledInput 
        type="tel" 
        id="phone" 
        label="Phone" 
        errorMsg={errors.phone?.message} 
        register={register} 
      />

      <LabelledInput 
        type="text" 
        id="address" 
        label="Address" 
        errorMsg={errors.address?.message} 
        register={register} 
      />

      <LabelledInput 
        type="select" 
        id="gender" 
        label="Gender" 
        errorMsg={errors.gender?.message} 
        selectOptions={GENDERS}
        register={register} 
      />

      <Button title="Submit" type="submit" />

      <DataModal 
        show={submittedData !== null} 
        onHide={() => setSubmittedData(null)} 
        submittedData={submittedData}
      />
    </form>


    
  );
};

export default BiodataForm;
