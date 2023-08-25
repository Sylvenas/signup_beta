import { twMerge } from "tailwind-merge"
import arcSiteLogo from "/assets/images/signup-logo.webp"

function ArcSiteLogo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { className, ...rest } = props
  return (
    <img
      alt="ArcSite Logo"
      className={twMerge("top-[40px] h-12 cursor-pointer", className)}
      src={arcSiteLogo.src}
      {...rest}
    />
  )
}

export { ArcSiteLogo }
