import Link from "next/link"
import { twMerge } from "tailwind-merge"

const Login = ({ className }: { className?: string }) => (
  <div className={twMerge("flex items-center", className)}>
    <span className="mr-3 text-12 text-black-100">Already have an account?</span>
    <Link href={"/login"}>
      <span className="inline-block h-[30px] w-[90px] cursor-pointer rounded border border-solid border-orange-e3571c text-center text-12 leading-[25px] text-orange-e3571c hover:bg-orange-e3571c hover:text-white-100">
        Login
      </span>
    </Link>
  </div>
)

export { Login }
