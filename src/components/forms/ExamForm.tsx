"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

// 1. Create a schema with zod
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be 2 characters" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Passowrd must be at least 8 characters long" }),
  firstname: z.string().min(1, { message: "Firstname is required" }),
  lastname: z.string().min(1, { message: "Lastname is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  birthday: z.date({ message: "Birthday is required" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

export default function ExamForm({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="">Create a new Exam</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex  flex-wrap justify-between gap-4">
        {/* Username */}
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />

        {/* Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex  flex-wrap justify-between gap-4">
        {/* Firstname */}
        <InputField
          label="Firstname"
          name="firstname"
          defaultValue={data?.firstname}
          register={register}
          error={errors?.firstname}
        />

        {/* Lastname */}
        <InputField
          label="Lastname"
          name="lastname"
          defaultValue={data?.lastname}
          register={register}
          error={errors?.lastname}
        />

        {/* Phone */}
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
        />

        {/* Address */}
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
        />

        {/* Blood Type */}
        <InputField
          label="Blood Type"
          name="blood Type"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />

        {/* Birthday */}
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label htmlFor="" className="text-xs text-gray-500">
            Sex
          </label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm wfull"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex?.message?.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            htmlFor="img"
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input
            id="img"
            type="file"
            {...register("img")}
            className="hidden"
            defaultValue={data?.img}
          />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img?.message?.toString()}
            </p>
          )}
        </div>
      </div>

      <button className="bg-blue-400 p-3 text-white rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
}
