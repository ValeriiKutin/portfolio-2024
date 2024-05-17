"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./index.css";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

interface CreateFormData {
  name: string;
  email: string;
  messeage: string;
}

export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    messeage: yup.string().required(),
  });

  //   const navigate = useNavigate();

  const usersRef = collection(db, "users");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitt = async (data: CreateFormData) => {
    await addDoc(usersRef, {
      name: data.name,
      email: data.email,
      message: data.messeage,
    });
    console.log(data);
    // toast.success("Successfully send!");
    // navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitt)} className="form">
      <h4 className="h2-form">Send your message to me</h4>
      <input
        className={errors.name?.message ? "error" : ""}
        id="input"
        type="text"
        placeholder="Name..."
        {...register("name")}
      />
      <p className="errorp">{errors.name?.message}</p>
      <input
        className={errors.email?.message ? "error" : ""}
        id="input"
        type="text"
        placeholder="Email..."
        {...register("email")}
      />
      <p className="errorp">{errors.email?.message}</p>
      <textarea
        className={`text-area-form ${errors.email?.message ? "error" : ""}`}
        {...register("messeage")}
        placeholder="Write smth to contact with me..."
      ></textarea>
      <p className="errorp">{errors.messeage?.message}</p>
      <button className="btn-submit" type="submit">
        Send
      </button>
    </form>
  );
};
