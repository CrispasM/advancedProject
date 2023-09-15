import { IUser, createUserService } from '@/services/userService';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export const useAddUser =()=>{
    const  queryClient = useQueryClient();
    const addData = (user:IUser)=>
      createUserService()
        .create(user)
        .then((response)=> response.data)
   return useMutation({
    mutationFn: addData,
    onSuccess:(data)=>{
        queryClient.invalidateQueries({
            queryKey: ["users"]
        })
    }
   })
}

