import { Link } from "react-router-dom";

import InputPassword from "@/components/input/inputPassword";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaArrowCircleRight } from "react-icons/fa";
import CompanyLogo from "../../assets/logo-long.webp";
import Input from "@/components/input/input";

const LoginComponent = () => {
  return (
    <main className="min-h-screen  flex flex-col items-center justify-center p-2">
      <section className="w-full max-w-md bg-white/70 backdrop-blur-xl px-8 rounded-[2.5rem]   ">
        <header className="flex flex-col items-center text-center gap-2 mb-3">
          <div className="my-2 bg-white rounded-3xl   ">
            <img src={CompanyLogo} alt="Amarta Logo" className="w-32 " />
          </div>

          <div className="space-y-4">
            <h1 className="font-heading font-semibold text-2xl tracking-tight text-slate-900">
              Welcome to Amarta! <span className="inline-block">👋</span>
            </h1>
            <p className="text-muted-foreground text-xs font-medium ">
              Your smart personalized financial assistants. <br />
              Plan Smarter, Live Better
            </p>
          </div>
        </header>

        {/* Form Section */}
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4">
            <Input
              placeholder="Email address"
              className="h-11  px-6 rounded-2xl bg-gray-200/30 focus:bg-white    transition-all duration-300 text-sm shadow-sm"
              type="email"
            />

            <InputPassword className="h-11  px-6 rounded-2xl bg-gray-200/30 focus:bg-white    transition-all duration-300 text-sm shadow-sm" />
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 transition-colors"
              />
              <label
                htmlFor="remember"
                className="text-xs font-bold text-slate-600 cursor-pointer select-none  tracking-wider"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors  tracking-wider"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            className="
  w-full h-13 mt-4 rounded-2xl text-sm font-bold tracking-wide
  bg-linear-to-br from-blue-700 via-blue-600 to-blue-500
  text-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)]
  border-t border-white/20
  transition-all duration-300 ease-out
  hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.5)] 
  hover:brightness-110 hover:-translate-y-0.5
  active:scale-[0.97] active:translate-y-0
  relative overflow-hidden
  before:absolute before:inset-0 
  before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent 
  before:translate-x-[-200%] hover:before:translate-x-[200%] 
  before:transition-transform before:duration-700 cursor-pointer
"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Sign In to My Account
              <FaArrowCircleRight />
            </span>
          </Button>
        </form>

        {/* Footer Link */}
        <p className="mt-5 text-center text-sm font-medium text-slate-500">
          New here?{" "}
          <Link
            to="/register"
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline underline-offset-8 transition-all"
          >
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginComponent;
