import { createUserService } from "@/services/userService";
import { useQuery } from 'react-query';

 export const useUser = (queryString?: string, enabled = true) =>{
    console.log({queryString});
    const fetchUsers =()=>
     createUserService()
      .getAll("users")
      .then((res) => res.data);

      return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        enabled
      })
 }