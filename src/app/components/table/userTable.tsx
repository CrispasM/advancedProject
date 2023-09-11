import { useUser } from '@/app/hooks/useUser'
import React, { useState } from 'react'
import { BaseTable } from './baseTable';

const UserTable = () => {
   
    const columns = [
      { field: "fname", headerName: " Fisrt Name", flex: 1 },
      { field: "lname", headerName: "Last Name", flex: 1 },
      { field: "hospital", headerName: "Hospital", flex: 1 },
      { field: "village", headerName: "Village", flex: 1 },
      
    ];
    const {data:rows,isLoading}=useUser();
    

    const eventsRows = rows?.data.map(({ attributes, id }) => ({
    ...attributes,
    id,
    }));

  return (
    <BaseTable 
        columns={columns} 
        rows={eventsRows ? eventsRows : []}
        loading={isLoading}
    />
  )
}

export default UserTable