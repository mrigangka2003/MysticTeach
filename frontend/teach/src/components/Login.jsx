const LoginPage = () => {
  return (
    <>
      {/* {a class for logo and singup button had to make} */}
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="max-w-md w-full px-8 py-6">
          <h1 className="text-slate-900 text-center font-semibold text-2xl">Welcome Back !</h1>
          <div className="mb-4">
            {/* <img
            className="w-full h-auto"
            src="https://via.placeholder.com/150"
            alt="Logo"
        /> */}
          </div>
          <div className="mb-4">
            <label htmlFor="Username" className="font-semibold">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="font-semibold">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="button"
          >
            Log In
          </button>
          <div className="rest">
            <p className="m-3 text-center"> Don't have an account ?</p>
            <button className="w-full bg-slate-300 py-2 rounded-md hover:bg-slate-400 focus:outline-none focus:bg-blue-600 font-medium mt-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
