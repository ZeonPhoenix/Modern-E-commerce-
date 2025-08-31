import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState<string>('Login')

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      cPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };


    function handleIsLogin(isLogin: string) {
        if (isLogin === 'Login') {
            setIsLogin('Sign up')
        } else {
            setIsLogin('Login')
        }
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isLogin === 'Sign up') {

            if (formData.name.length < 2) {
                return 'Name Should be longer than 2 char'
            }

            if (formData.password !== formData.cPassword) {
                return 'Confirm Password Must Match with Password'
            }
        }

        navigate('/')
    }

  return (
    <div className="flex min-h-screen">
      {/* Left side: Signup Form */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {isLogin}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            {isLogin === "Sign up" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {isLogin === "Sign up" && (
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    onChange={handleChange}
                    value={formData.cPassword}
                    name="confirm-password"
                    type="password"
                    required
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isLogin}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            {isLogin === "Login" ? "Don't Have an Account " : "Already have an account? "}

            <button              
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={ () => handleIsLogin(isLogin)}
            >
              {isLogin}
            </button>
          </p>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Why Join Us?
          </h3>
          <p className="mb-4 text-lg text-gray-700">
            Experience the best ecommerce app for all your needs.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Get exclusive discounts and offers on your favorite products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fast and secure checkout process tailored for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login
