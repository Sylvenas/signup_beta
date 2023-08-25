import * as Form from "@radix-ui/react-form"
import { FormEvent } from "react"
import { EmailData, useSignUpStore } from "stores/store-signup"
import { Container } from "./container"
import { Login } from "./login"

export function StepEmail() {
  return (
    <div className="grow px-4">
      <div className="absolute right-20 top-5 hidden sm:block">
        <Login />
      </div>
      <Container className="mx-auto mt-28 px-12">
        <h1 className="mb-4 mt-6 flex items-center justify-center text-center text-20 font-semibold leading-[1.625rem] text-black-85 sm:mt-12 sm:text-24 sm:leading-[1.875rem]">
          Get started with a 14-day free trial with access to all professional features, including:
        </h1>
        <p className="text-center text-16 leading-[22px] text-black-55">
          Beautiful site plans and drawings,
          <br />
          Professionally branded proposals,
          <br />
          and easy to use takeoff reports and material lists
        </p>
        <div className="my-[2.5rem] w-full sm:my-12">
          <EmailForm />
        </div>
        <div className="pb-6 text-center text-13 text-black-55 sm:text-14">
          <div className="leading-[1.125rem]">No credit card needed</div>
          <div className="whitespace-nowrap leading-[1.125rem]">
            Join 34,931 users who signed up in the last 30 days
          </div>
        </div>
      </Container>
    </div>
  )
}

function checkUserNameAvailable(email: string) {
  console.log(email)
  return Promise.resolve({ available: true })
}

function EmailForm() {
  const setData = useSignUpStore((state) => state.setData)
  const setStep = useSignUpStore((state) => state.setStep)
  const emailData = useSignUpStore((state) => state.emailData)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget)) as EmailData
    setData({ step: "emailData", data })
    setStep("userinfo")
  }
  return (
    <Form.Root onSubmit={onSubmit}>
      <Form.Field name="username">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Form.Label className="required-field-label mb-2 text-12 font-semibold leading-4 text-black-55 sm:text-14">
            Email
          </Form.Label>
          <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="valueMissing">
            Please input your Business Email
          </Form.Message>
          <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
          <Form.Message
            className="text-12 leading-4 text-[#ff4d4f]"
            match={async (value) => {
              if (!value) return true
              const { available } = await checkUserNameAvailable(value)
              return !available
            }}
          >
            This email has already been registered
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            defaultValue={emailData?.username || ""}
            className="h-8 w-full rounded-sm border border-solid !border-[#d9d9d9] pl-3 text-black-100 outline-none"
            type="email"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className="h-[2.5rem] w-full cursor-pointer rounded-[3px] bg-[#e3571c] text-14 font-semibold leading-[1.125rem] text-white-fff"
          style={{ marginTop: 10 }}
        >
          Start Free Trial
        </button>
      </Form.Submit>
    </Form.Root>
  )
}
