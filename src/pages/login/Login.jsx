import { Link } from "react-router-dom"

const Login = () => {

  const  handleLogIn = e =>{
    e.preventDefault();
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(email, password)
  }
  return (
    <>
      <div className="mx-auto md:w-1/2 px-10 h-screen py-20 ">
        <form onSubmit={handleLogIn}  className="rounded-none">

          <h2 className="text-2xl font-semibold text-start my-6">Login Admin</h2>

          <div className="relative h-11 w-full min-w-[200px] mb-4">
            <input placeholder="Enter your email address" type="email" name="email"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>

          <div className="relative h-11 w-full min-w-[200px] mb-4">
            <input placeholder="Enter your password" type="password" name="password"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>

          <div className="flex justify-between items-center ">

            <div className="flex gap-2 items-center text-white font-semibold">
              <input type="checkbox" name="check" id="" />


              <span className="label-text">Remember me</span>


            </div>

            <Link className="text-[#6B66F6] md:text-sm text-xs font-semibold">Forgot Password?</Link>
          </div>
          <div className="form-control mt-6">
            <button className="md:p-3 p-1 lg:py-2 md:py-1 py-2 rounded bg-[#6B66F6] text-white font-semibold md:text-base text-sm">Login</button>
          </div>

          <p className="my-4 font-semibold text-center md:text-sm text-xs">Don't Have An Account? <Link to='/register' className="text-[#6B66F6] md:text-sm text-xs">Create an account</Link>
          </p>



        </form>
      </div>
    </>
  )
}

export default Login
