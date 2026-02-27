import React, { useEffect, useState } from 'react'
import Validmessage from '../../../component/shared/validationMessage/validmessage';
import { Input } from "@heroui/react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { Alert } from "@heroui/react";
import { Link, useNavigate } from 'react-router';
import { Pyramid } from 'lucide-react';
import { Loginschema } from '../../../schema/login.schema'
import AppButton from '../../../component/shared/validationMessage/appbutton/AppButton';
import { Authcontext } from '../../../context/authcontext';
import { useContext } from 'react';

const Singin_API = 'https://route-posts.routemisr.com/users/signin'




export default function Login() {
  let timout_ID;
  const { SaveUserToken } = useContext(Authcontext)
  const [errorMessage, seterrorMessage] = useState("")
  const [isSuccess, setisSuccess] = useState("")
  const Navigate = useNavigate()
  const { handleSubmit, register, formState: { errors, touchedFields, isSubmitting, }, } = useForm({

    defaultValues: {

      email: "",
      password: "",

    },

    resolver: zodResolver(Loginschema)
  }
  );


  async function submitForm(data) {

    try {
      const response = await axios.request({
        method: "POST",
        url: Singin_API,
        data: data
      })
      if (response.error) {
        throw new Error(response.error);
      } else {
        //programatly navigation

        setisSuccess("Loged in successfull")
        SaveUserToken(response.data.data.token)
        timout_ID = setTimeout(() => {
          Navigate('/')
        }, 1000);

      }

    } catch (error) {
      seterrorMessage(error.response.data.errors)
    }

  }

  useEffect(() => {

    return () => {
      clearTimeout(timout_ID)
    };
  }, [timout_ID]);

  return <>


    <section className="min-h-screen flex items-center justify-center bg-background px-4 rounded-4xl mb-1">
      {/* Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2   blur-[100px] pointer-events-none rounded-4xl" />

      <div className="w-full max-w-md gold-border gold-glow bg-card/80 backdrop-blur relative z-10 rounded-4xl">
        {/* Header */}
        <div className="text-center p-6 ">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center  bg-amber-200">
            <Pyramid className="h-7 w-7 text-warning" />
          </div>
          <h2 className="font-display text-2xl gold-text">Join the Dynasty</h2>
          <p className="text-gray-500">Login your royal account</p>
        </div>


        <div className="p-6 space-y-4  border-0">

          {errorMessage && <Alert hideIconWrapper color="danger" description={errorMessage} title="please try again" variant="bordered" />}
          {isSuccess && <Alert hideIconWrapper color="success" description={isSuccess} title="welcome Magisty" variant="bordered" />}

          <form onSubmit={handleSubmit(submitForm)} className="space-y-4 rounded-4xl">


            <Input label="Email" type="email" variant='boederd' className="shadow  shadow-amber-00 rounded-2xl" {...register("email")} />
            <Validmessage field={errors.email} isTouched={touchedFields.email} />

            <Input label="Password" type="password" variant='boederd' className="shadow  shadow-amber-300 rounded-2xl" {...register("password")} />
            <Validmessage field={errors.password} isTouched={touchedFields.password} />
            <AppButton isLoading={isSubmitting}>Login</AppButton>
          </form>
          <Link className='text-amber-700' to={'/register'}> creat a new account?</Link>
        </div>
      </div>
    </section>
  </>
}

