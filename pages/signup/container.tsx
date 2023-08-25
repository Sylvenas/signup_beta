import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ContainerProps = {
  children: ReactNode
  className?: string
}
const Container: FC<ContainerProps> = ({ children, className = "" }) => (
  <div
    className={twMerge(
      "bg-white-100 flex w-full flex-col items-center rounded-2xl shadow-[2px_4px_19px_rgba(0,0,0,0.25)] sm:w-[612px]",
      className
    )}
  >
    {children}
  </div>
)

export { Container }
