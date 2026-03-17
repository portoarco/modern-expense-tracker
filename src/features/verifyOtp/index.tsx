import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import CompanyLogo from "../../assets/logo-long.webp";
import { Button } from "@/components/ui/button";

const OTPVerificationComponent = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md  p-8 flex flex-col gap-6">
        <header className="flex flex-col items-center text-center gap-3">
          <img src={CompanyLogo} alt="Amarta Logo" className="w-36" />
          <h1 className="text-2xl font-semibold text-gray-800">
            OTP Verification
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Enter the 5-digit code sent to <br />
            <span className="font-semibold text-gray-700">admin@mail.com</span>
          </p>
        </header>

        <main className="flex justify-center">
          <InputOTP maxLength={5} className="gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <InputOTPGroup key={i}>
                <InputOTPSlot
                  index={i}
                  className="w-12 h-12 mx-2 text-lg border rounded-lg 
                  focus:border-black focus:ring-2 focus:ring-black/20 transition"
                />
              </InputOTPGroup>
            ))}
          </InputOTP>
        </main>

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
          Verify Code
        </Button>

        <p className="text-center text-sm text-gray-500">
          Didn’t receive code?{" "}
          <span className="text-black font-medium cursor-pointer hover:underline">
            Resend
          </span>
        </p>
      </div>
    </section>
  );
};

export default OTPVerificationComponent;
