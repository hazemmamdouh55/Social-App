import React, { useEffect, useState } from 'react'
import Validmessage from '../../../component/shared/validationMessage/validmessage';
import { Button, Input, Radio, RadioGroup } from "@heroui/react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form"
import { Alert } from "@heroui/react";
import { Link, useNavigate } from 'react-router';
import { Pyramid } from 'lucide-react';
import { registerschema } from '../../../schema/register.schema';
import AppButton from '../../../component/shared/validationMessage/appbutton/AppButton';

const Singup_API = 'https://route-posts.routemisr.com/users/signup'




export default function Registeration() {
  let timout_ID;

  const [errorMessage, seterrorMessage] = useState("")
  const [isSuccess, setisSuccess] = useState("")
  const Navigate = useNavigate()
  const { handleSubmit, register, formState: { errors, touchedFields, isSubmitting, isValid }, control } = useForm({

    defaultValues: {
      name: "",
      username: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      password: "",
      rePassword: ""
    },
    mode: "onSubmit",
    resolver: zodResolver(registerschema)
  }
  );


  async function submitForm(data) {
    try {
      const response = await axios.request({
        method: "post",
        url: Singup_API,
        data: data
      })
      if (response.error) {
        throw new Error(response.error);
      } else {
        //programatly navigation

        setisSuccess("Registerd successfull")

        timout_ID = setTimeout(() => {
          Navigate('/login')
        }, 2000);

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


    <section className="min-h-screen flex items-center justify-center bg-background px-4 ">
      {/* Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2  rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md gold-border gold-glow bg-card/80 backdrop-blur relative z-10">
        {/* Header */}
        <div className="text-center p-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Pyramid className="h-7 w-7 text-primary" />
          </div>
          <h2 className="font-display text-2xl gold-text">Join the Dynasty</h2>
          <p className="text-gray-500">Create your royal account</p>
        </div>


        <div className="p-6 space-y-4  rounded-3xl shadow shadow-cyan-950">

          {errorMessage && <Alert hideIconWrapper color="danger" description={errorMessage} title={errorMessage} variant="bordered" />}
          {isSuccess && <Alert hideIconWrapper color="success" description={isSuccess} title={isSuccess} variant="bordered" />}

          <form onSubmit={handleSubmit(submitForm)} className="space-y-4 mb-2 px-2  rounded-3xl ">
            <Input label="Name" type="text" variant='boederd' className="shadow shadow-2xl rounded-2xl"  {...register("name")} />
            <Validmessage field={errors.name} isTouched={touchedFields.name} />

            <Input label="Username" type="text" variant='boederd' className="shadow shadow-2xl rounded-2xl" {...register("username")} />
            <Validmessage field={errors.username} isTouched={touchedFields.username} />

            <Input label="Email" type="email" variant='boederd' className="shadow shadow-2xl rounded-2xl" {...register("email")} />
            <Validmessage field={errors.email} isTouched={touchedFields.email} />

            <Input label="Password" type="password" variant='boederd' className="shadow shadow-2xl rounded-2xl" {...register("password")} />
            <Validmessage field={errors.password} isTouched={touchedFields.password} />

            <Input label="Confirm Password" type="password" variant='boederd' className="shadow shadow-2xl rounded-2xl" {...register("rePassword")} />
            <Validmessage field={errors.rePassword} isTouched={touchedFields.rePassword} />


            <Input label="Date of Birth" type="date" variant='boederd' className="shadow shadow-2xl rounded-2xl" {...register("dateOfBirth")} />
            <Validmessage field={errors.dateOfBirth} isTouched={touchedFields.dateOfBirth} />

            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <RadioGroup label="Gender" {...field}>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </RadioGroup>
              )}
            />
            <Validmessage field={errors.gender} isTouched={touchedFields.gender || true} />
            <AppButton onSubmit={isValid} isLoading={isSubmitting} >Register</AppButton>
            {/* <Button color="primary" type='submit' isDisabled={!isValid} isLoading={isSubmitting}>Register</Button>    */}
          </form>
          <Link className='text-blue-600' to={'/login'}> Already have an account?</Link>
        </div>
      </div>
    </section>
  </>
}

