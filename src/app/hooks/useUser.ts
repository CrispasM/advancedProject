import { createUserService } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

 export const useUser = (queryString?: string, enabled = true) =>{
    console.log({queryString});
    const fetchUsers =()=>
     createUserService()
      .getAll("")
      .then((res) => res.data);

      return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        enabled,
      })
 }