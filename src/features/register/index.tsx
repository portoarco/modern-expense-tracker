import Input from "@/components/input/input";
import { Button } from "@/components/ui/button";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CompanyLogo from "../../assets/logo-long.webp";
import InputPassword from "@/components/input/inputPassword";
const RegisterComponent = () => {
  return (
    <main className="min-h-screen  flex flex-col items-center justify-center p-2">
      <section className="w-full max-w-md bg-white/70 backdrop-blur-xl px-8 rounded-[2.5rem]   ">
        <header className="flex flex-col items-center text-center gap-2 mb-3">
          <div className="my-2 bg-white rounded-3xl   ">
            <img src={CompanyLogo} alt="Amarta Logo" className="w-32 " />
          </div>

          <div className="space-y-2">
            <h1 className="font-heading font-semibold text-2xl tracking-tight text-slate-900">
              Create New Account
            </h1>
            <p className="text-muted-foreground text-xs font-medium">
              We provide smart personalized financial assistants. <br />
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
              placeholder="Fullname"
              className="h-11 px-6 rounded-2xl bg-gray-200/30 border-gray-200/60 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-sm shadow-sm"
              type="email"
            />

            <Input
              placeholder="Email address"
              className="h-11 px-6 rounded-2xl bg-gray-200/30 border-gray-200/60 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-sm shadow-sm"
              type="email"
            />
            <InputPassword
              id="password"
              className="h-11 px-6 rounded-2xl bg-gray-200/30 border-gray-200/60 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-sm shadow-sm"
            />
            <InputPassword
              id="confirm-password"
              placeholder="Confirm Password"
              className="h-11 px-6 rounded-2xl bg-gray-200/30 border-gray-200/60 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-sm shadow-sm"
            />
          </div>

          <Button
            className="
  w-full h-11  rounded-2xl text-sm font-bold tracking-wide
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
              Register New Account
              <FaArrowCircleRight />
            </span>
          </Button>
        </form>

        {/* Footer Link */}
        <p className="mt-5 text-center text-sm font-medium text-slate-500">
          Already Have an Account?{" "}
          <Link
            to="/"
            className="font-bold text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 transition-all"
          >
            Sign In
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterComponent;
