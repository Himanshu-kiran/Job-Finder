import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import TextInput from './TextInput';
import CustomButton from './CustomButton';  // Assuming this component exists

const SignUp = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [isRegister, setIsRegister] = useState(true);
    const [accountType, setAccountType] = useState("seeker");
    const [errMsg, setErrMsg] = useState("");
    
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({ mode: "onChange" });
    let from = location.state?.from?.pathname || "/";

    const closeModal = () => setOpen(false);
    const onSubmit = () => { }

    return (
        <Transition appear show={open || false}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as='h3' className="text-xl font-semibold leading-6 text-gray-900">
                                {isRegister ? "Create Account" : "Account Sign In"}
                            </DialogTitle>
                            <div className='w-full flex items-center justify-center py-4'>
                                <button className={`flex-1 py-1 px-2 rounded-md outline-none ${accountType === "seeker" ? "bg-blue-200 text-blue-600 font-semibold" : "bg-blue-400 text-white"}`}
                                    onClick={() => setAccountType("seeker")}>User Account</button>
                                <button className={`flex-1 py-1 px-2 ml-2 rounded-md outline-none ${accountType === "company" ? "bg-blue-200 text-blue-600 font-semibold" : "bg-blue-400 text-white"}`}
                                    onClick={() => setAccountType("company")}>Company Account</button>
                            </div>
                            <form className='w-full flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
                                <TextInput
                                    name="email"
                                    label="Email address"
                                    placeholder="Email@example.com"
                                    type='email'
                                    register={register("email", {
                                        required: "Email Address is required!"
                                    })}
                                    error={errors.email ? errors.email.message : ""}
                                />
                                {isRegister && (
                                    <>
                                        <div className='w-full flex gap-1 md:gap-2'>
                                            <div className={`${accountType === "seeker" ? "w-1/2" : "w-full"}`}>
                                                <TextInput
                                                    name={accountType === "seeker" ? "firstName" : "name"}
                                                    label={accountType === "seeker" ? "First Name" : "Company Name"}
                                                    placeholder={accountType === "seeker" ? "eg. Rohan" : "Company Name"}
                                                    type='text'
                                                    register={register(accountType === "seeker" ? "firstName" : "name", {
                                                        required: accountType === "seeker" ? "First Name is required!" : "Company Name is required!"
                                                    })}
                                                    error={errors[accountType === "seeker" ? "firstName" : "name"] ? errors[accountType === "seeker" ? "firstName" : "name"].message : ""}
                                                />
                                            </div>
                                            {accountType === "seeker" && (
                                                <div className='w-1/2'>
                                                    <TextInput
                                                        name='lastName'
                                                        label='Last Name'
                                                        placeholder='Wagonner'
                                                        type='text'
                                                        register={register("lastName", {
                                                            required: "Last Name is required",
                                                        })}
                                                        error={errors.lastName ? errors.lastName.message : ""}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div className='w-full flex gap-1 md:gap-2'>
                                            <div className='w-1/2'>
                                                <TextInput
                                                    name='password'
                                                    label='Password'
                                                    placeholder='Enter your password'
                                                    type='password'
                                                    register={register("password", {
                                                        required: "Password is required!"
                                                    })}
                                                    error={errors.password ? errors.password.message : ""}
                                                />
                                            </div>
                                            <div className='w-1/2'>
                                                <TextInput
                                                    name='cPassword'
                                                    label='Confirm Password'
                                                    placeholder='Confirm your password'
                                                    type='password'
                                                    register={register("cPassword", {
                                                        validate: (value) => {
                                                            const { password } = getValues();
                                                            if (password !== value) {
                                                                return "Passwords do not match";
                                                            }
                                                        },
                                                    })}
                                                    error={
                                                        errors.cPassword &&
                                                        errors.cPassword.type === "validate"
                                                            ? errors.cPassword.message
                                                            : ""
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                                {errMsg && (
                                    <span role='alert' className='text-sm text-red-500 mt-0.5'>
                                        {errMsg}
                                    </span>
                                )}
                                <div className='mt-2'>
                                    <CustomButton
                                        type='submit'
                                        containerStyles={`inline-flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-blue-800`}
                                        title={isRegister ? "Create Account" : "Log In"}
                                    />
                                </div>
                            </form>
                            <div className='mt-4'>
                                <p className='text-sm text-gray-700'>
                                    {isRegister
                                        ? "Already have an account?"
                                        : "Don't have an account?"}
                                    <span
                                        className='text-sm text-blue-600 ml-2 hover:text-blue-700 hover:font-semibold cursor-pointer'
                                        onClick={() => setIsRegister((prev) => !prev)}
                                    >
                                        {isRegister ? "Login" : "Create Account"}
                                    </span>
                                </p>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default SignUp;
