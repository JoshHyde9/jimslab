"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

import { api } from "@/server/treaty";

type FormInput = {
  message: string;
};

export const CreateMessage = () => {
  const createMessage = async (message: string) => {
    try {
      const { data, error } = await api.guestbook.create.post({ message });

      if (error) throw error;

      return data;
    } catch (error) {
      throw error;
    }
  };

  const queryClient = useQueryClient();

  const form = useForm<FormInput>({
    defaultValues: {
      message: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllMessages"] });
      form.reset();
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (values) => {
    mutate(values.message);
  };

  return (
    <div className="my-5">
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex flex-col my-4">
          <label className="block uppercase tracking-wide text-xs font-extrabold mb-2">
            Message:
          </label>
          <input
            defaultValue=""
            placeholder="YOOOOO"
            {...form.register("message")}
            className="bg-gray-200 appearance-none border-[3px] border-purple-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 transition ease-in-out duration-300"
          />
        </div>

        {form.formState.errors.message && <span>This field is required</span>}
        <button
          type="submit"
          className="w-full flex justify-center bg-purple-500 font-bold py-2 rounded-md duration-300 text-white hover:bg-purple-400 hover:cursor-pointer disabled:cursor-not-allowed"
        >
          Send it bah
        </button>
      </form>
    </div>
  );
};
