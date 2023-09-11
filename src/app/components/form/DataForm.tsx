import React from 'react';
import * as Yup from "yup";
import FormikInit from './formikInit';
import { TextInputField } from '../textFields/textFieldInput';


type Prop = {
    onSubmit: (values:any)=>void;
    width?: string;
    submitButtonText?: string
}

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  village: Yup.string().required().label("Village")
});
const DataForm = ({
    onSubmit,
    width ='50%',
    submitButtonText,
}:Prop) => {
  return (
    <FormikInit
      initialValues={{name:"",village:""}}
      validationSchema={schema}
      onSubmit={onSubmit}
      width={width}
      submitButtonText={submitButtonText ? submitButtonText : "submit"}
    >
      <TextInputField width="100%" name="name" id="name" label="Name" />
      <TextInputField
        width="100%"
        name="village"
        id="village"
        label="Village"
      />
    </FormikInit>
  );
}

export default DataForm;
