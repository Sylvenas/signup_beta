import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
import { useSignUpStore } from "stores/store-signup"
import { SignUpContent } from "./signup-content"
import { SignupSide } from "./signup-side"

function ArcSiteSignup() {
  const step = useSignUpStore((state) => state.step)
  return (
    <>
      <Head>
        <title>ArcSite Sign Up</title>
        <meta
          name="description"
          content="ArcSite is the leader in mobile drawing and drawing-based takeoff and estimate solutions"
        ></meta>
      </Head>
      <div className="flex">
        {step === "email" && <SignupSide />}
        <SignUpContent />
      </div>
      <Analytics />
    </>
  )
}

export default ArcSiteSignup
