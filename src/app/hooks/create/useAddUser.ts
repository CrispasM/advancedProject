import { IUser, createUserService } from '@/services/userService';
import { useQueryClient } from 'react-query';
import { useMutation } from 'react-query';

export const useAddUser =()=>{
    const queryClient = useQueryClient()
    const addData = (event:IUser)=>
      createUserService()
        .create(event)
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