import React from 'react';
import * as Yup from "yup";
import districts from  "../../fixtures/districts.json"
import FormikInit from './formikInit';
import { TextInputField } from '../textFields/textFieldInput';
import { ComboBox } from '../comboBox/comboBox';

type Prop = {
    initialValues: any;
    onSubmit: (values:any)=>void;
    width?: string;
    loading: boolean;
    submitButtonText?: string
}

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  district: Yup.string().required().label("District"),
  DoB: Yup.date().required().label("Date of Birth"),
});

const districtList = districts.map(({name,code})=>({
    label: name,
    id: name
}))

const DataForm = ({
    initialValues,
    onSubmit,
    width ='50%',
    loading,
    submitButtonText,
}:Prop) => {
  return (
    <FormikInit
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      width={width}
      loading={loading}
      submitButtonText={submitButtonText ? submitButtonText : "submit"}
    >
        <TextInputField width='100%' name='value' id='name' label="Name"/>
        <ComboBox
          label="District"
          name="district"
          width="100%"
          options={districtList}/>
         
    </FormikInit>
  );
}

export default DataForm;
