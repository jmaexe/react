import { useForm } from 'react-hook-form';
import { User } from '../models/User';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useUserContext } from '../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';

type FormFields = User;
const RegisterPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit = () => {};
  return (
    <div>
      {' '}
      <form
        className="text-center container max-w-lg shadow-xl w-full gap-5 flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-bold text-xl uppercase p-4">Register form</h2>
        <label
          className={`input input-bordered flex items-center gap-2 ${
            errors.name && 'focus-within:outline-error'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          name
          <input
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long',
              },
              maxLength: {
                value: 15,
                message: 'Username must not exceed 15 characters',
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: 'Username can only contain alphanumeric characters',
              },
            })}
            type="text"
            className="grow"
          />
        </label>
        <div className="w-full ">
          <label
            className={`input input-bordered flex items-center gap-2 ${
              errors.username && 'focus-within:outline-error'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            Username
            <input
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters long',
                },
                maxLength: {
                  value: 15,
                  message: 'Username must not exceed 15 characters',
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'Username can only contain alphanumeric characters',
                },
              })}
              type="text"
              className="grow"
            />
          </label>
          {errors.username && (
            <p className="text-error">{errors.username.message}</p>
          )}
        </div>
        <div className="w-full">
          <label
            className={`input input-bordered flex items-center gap-2 w-full ${
              errors.password && 'focus-within:outline-error'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            Password
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must not exceed 20 characters',
                },
              })}
              type="password"
              className="grow"
            />
          </label>
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className="grid items-center grid-cols-5 w-full p-2 m-2">
          {/* w-1/3 */}
          <div className="col-start-3">
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </div>
          <div className="col-start-4 grid place-items-center">
            <span>or</span>
          </div>
          <div className="col-start-5 grid place-items-center">
            <GoogleLogin
              type="icon"
              shape="circle"
              onSuccess={(credentialResponse) => {
                const data = credentialResponse.credential
                  ? jwtDecode(credentialResponse.credential)
                  : undefined;
                const user = data as User;
                console.log(user);
                setUser(user);
                navigate('/profile');
                //email,family_name,given_name,name,picture
              }}
              onError={() => {
                console.log('Google Login Error:');
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
