import downPic from "/assets/images/downPic.png"
import star from "/assets/images/star.png"
import ratings from "/assets/images/ratings.png"
import ipadDraw from "/assets/images/ipad-draw.webp"
import { twMerge } from "tailwind-merge"
import { ArcSiteLogo } from "components/arcsite-logo"

function SignupSide() {
  return (
    <div className="relative hidden h-screen w-[655px] flex-shrink flex-col items-center bg-[#f8f5f4] md:flex">
      <ArcSiteLogo width="153" height="54" className="mt-[40px] block w-[153px]" />
      <img className="absolute left-[5%] top-1/2 w-[115%] -translate-y-[60%]" src={ipadDraw.src} />
      <div className={twMerge("absolute bottom-[76px] flex w-full flex-col items-center")}>
        <img className="h-[9.6%] w-[35.6%]" src={downPic.src}></img>
        <img className="ml-[10%] h-[7.4%] w-[45.5%]" src={star.src}></img>
        <img className="h-[1.9%] w-[22.9%]" src={ratings.src}></img>
      </div>
    </div>
  )
}

export { SignupSide }
