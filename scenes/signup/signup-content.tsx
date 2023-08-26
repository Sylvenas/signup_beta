import { useSignUpStore } from "stores/store-signup"
import { StepEmail } from "./step-email"
import { StepUserInfo } from "./step-userinfo"
import StepDownload from "./step-download"

function SignUpContent() {
  const step = useSignUpStore((state) => state.step)
  switch (step) {
    case "email":
      // return <StepUserInfo />
      return <StepEmail />
    case "userinfo":
      return <StepUserInfo />
    case "download":
      return <StepDownload />
  }
}

export { SignUpContent }
