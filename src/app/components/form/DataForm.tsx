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
  fname: Yup.string().required().label(" First Name"),
  lname: Yup.string().required().label("Last name"),
  hospital: Yup.string().required().label("Hospital"),
  village: Yup.string().required().label("Village")
});
const DataForm = ({
    onSubmit,
    width ='50%',
    submitButtonText,
}:Prop) => {
  return (
    <FormikInit
      initialValues={{ fname: "", lname: "", village: "", hospiatal: "" }}
      validationSchema={schema}
      onSubmit={onSubmit}
      width={width}
      submitButtonText={submitButtonText ? submitButtonText : "submit"}
    >
      <TextInputField width="100%" name="fname" id="fname" label="First Name" />
      <TextInputField width="100%" name="lname" id="lname" label="Last Name" />
      <TextInputField width="100%" name="hospital" id="hospital" label="Hospital" />
      <TextInputField width="100%" name="village" id="village" label="Village"
      />
    </FormikInit>
  );
}

export default DataForm;
