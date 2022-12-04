import { useMutation } from "react-query";
import { request } from "../../utils/Axios-utils";
import { toast } from "react-toastify";
import { ExpenseDto } from "../../../interfaces/Expense";

export const expense = async (data: ExpenseDto) => {
  return await request({
    url: `expense`,
    method: "POST",
    data: data,
  });
};

export const useExpense = () => {
  return useMutation(expense, {
    onSuccess: () => {
      toast.success(`Expense successfully add to job`);
    },
    onError: (error) => {
      toast.error("Failed to create Job");
    },
  });
};
