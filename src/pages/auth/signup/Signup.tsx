import AuthDesignAside from "../components/AuthDesignAside";
import AuthFormAside from "../components/AuthFormAside";
import SignupForm from "./components/SignupForm";


export default function Signup() {
  return (
    <div className="h-[100vh] w-full flex">
      <AuthDesignAside />
      <AuthFormAside>
      <div className="flex flex-col gap-3 max-w-md min-w-[450px] px-4 lg:px-0">
        <h1 className="font-semibold text-center">Create Account</h1>
        <p className="text-gray-500 text-sm text-center">
          Welcome to Business Analyst.
        </p>
        <SignupForm/>
      </div>
      </AuthFormAside>
    </div>
  );
}
