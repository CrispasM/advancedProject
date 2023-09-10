"use client"
import React from 'react'
import { useQuery } from 'react-query';
import axios from "axios";

 export interface Persons{
    id: number;
    name: string;
    age: number;
    location: string;
}

const DataFetch = () => {
    const fetchDetails = () =>
      axios
        .get<Persons[]>("http://localhost:3000/users")
        .then((res) => res.data); 

    const { isLoading, error, data } = useQuery<Persons[], Error>({
      queryKey: ["repoData"],
      queryFn: fetchDetails
    });

    if (isLoading) return "Loading..."

    if(error) return 'An error has occured:' + error.message

  return (
    <div>
        <h1>Lion</h1>
        {data?.map((person)=>(
            <li key={person.id}>
                <p>{person.name}</p>
                <p>{person.age}</p>
                <p>{person.location}</p>
            </li>
        ))}
    </div>
  )
}

export default DataFetch