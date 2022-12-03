import { useMutation, useQueryClient } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";


export const register = async (data: any) => {
  return await request({
    url: `Models`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {

    const queryClient = useQueryClient();
    return useMutation(register, {
        onSuccess: () => {


};

