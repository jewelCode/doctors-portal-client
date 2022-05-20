import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || guser);
    const navigate = useNavigate();
    let signInError;

    if(loading || gloading || updating){
        return <button class="btn loading">loading</button>
    }
    if (user || guser) {
        console.log(user || guser)
    }

    if(error || gerror || updateError){
        signInError = <p className="text-red-500">{error?.message || gerror?.message || updateError?.message}</p>
    }
    if(token){
        navigate('/appointment')
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name})
        console.log('update done')

        // navigate('/appointment')
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <div className="flex flex-col w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                         required: {
                             value: true,
                             message: 'Name is required'
                         },
                    })}  type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <label class="label">
                        {errors.name && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                        <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                         required: {
                             value: true,
                             message: 'email is required'
                         },
                        pattern: {
                        value: /[A-Za-z]{3}/,
                        message: 'Provide a valid Email'
                        }
                    })}  type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <label class="label">
                        {errors.email && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                    <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                         required: {
                             value: true,
                             message: 'password is required'
                         },
                        minLength: {
                        value: 6,
                        message: 'must be 6 characters long'
                        }
                    })}  type="password" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <label class="label">
                        {errors.password && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                    {signInError}
                    <input className="btn w-full max-w-xs text-white" type="submit" value="Sign Up" />
                        </form>
                        <p><small>Already Have An Account? <Link className="text-secondary" to="/login">Please Login</Link></small></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;