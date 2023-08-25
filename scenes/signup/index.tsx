import { useSignUpStore } from "stores/store-signup"
import { SignUpContent } from "./signup-content"
import { SignupSide } from "./signup-side"

function ArcSiteSignup() {
  const step = useSignUpStore((state) => state.step)
  return (
    <div className="flex">
      {step === "email" && <SignupSide />}
      <SignUpContent />
    </div>
  )
}

export default ArcSiteSignup
