import React from 'react'
import { useMutation } from 'react-query';
import axios from "axios";
import { Persons } from './DataFetch';

const AddData = () => {
    const mutation= useMutation<Persons[], Error>({
        mutationFn:(newRecord)=>{
            return axios.post('/users')
        }
    })

  return (
    <div>
    </div>
  );
}

export default AddData
