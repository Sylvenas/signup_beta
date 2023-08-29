import * as Form from "@radix-ui/react-form"
import { Checkbox } from "components/Checkbox"
import { FormEvent } from "react"
import { ArcSiteLogo } from "components/arcsite-logo"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/Select"
import { UserinfoData, useSignUpStore } from "stores/store-signup"
import { Container } from "./container"

export function StepUserInfo() {
  const setStep = useSignUpStore((state) => state.setStep)
  return (
    <div className="max-w-[100vw] grow px-4 pt-10">
      <div className="top-5 text-center">
        <ArcSiteLogo className="inline" />
      </div>
      <Container className="mx-auto mt-28 px-12">
        <div className="my-6 w-full text-center text-24 font-semibold leading-[1.875rem] text-black-85 sm:mb-8 sm:mt-12">
          Complete Sign Up
        </div>
        <div className="mb-6 w-full sm:mb-12">
          <UserinfoForm />
          <button
            onClick={setStep.bind(null, "email")}
            className="mt-2 h-[2.5rem] w-full cursor-pointer rounded-[4px] border border-solid border-[#d9d9d9] bg-transparent text-black-85"
            style={{ marginTop: 10 }}
          >
            Back
          </button>
        </div>
      </Container>
    </div>
  )
}

function UserinfoForm() {
  const setData = useSignUpStore((state) => state.setData)
  const setStep = useSignUpStore((state) => state.setStep)
  const userinfoData = useSignUpStore((state) => state.userinfoData)
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget)) as UserinfoData
    console.log(data)
    setData({ step: "userinfoData", data })
    setStep("download")
  }

  return (
    <Form.Root onSubmit={onSubmit}>
      <div className="flex flex-col items-start sm:flex-row">
        <Form.Field name="firstname" className="mb-8 mr-8 w-full sm:w-1/2">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="required-field-label mb-2 text-12 font-semibold leading-4 text-black-55 sm:text-14">
              First name
            </Form.Label>
            <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="valueMissing">
              Please input your First Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              defaultValue={userinfoData?.firstname || ""}
              className="h-8 w-full rounded-sm border border-solid !border-[#d9d9d9] !bg-white-fff pl-3 text-black-100 outline-none"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name="lastname" className="mb-8 w-full grow sm:w-1/2">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <Form.Label className="required-field-label mb-2 text-12 font-semibold leading-4 text-black-55 sm:text-14">
              Last name
            </Form.Label>
            <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="valueMissing">
              Please input your Last name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              defaultValue={userinfoData?.lastname || ""}
              className="h-8 w-full rounded-sm border border-solid !border-[#d9d9d9] !bg-white-fff pl-3 text-black-100 outline-none"
              required
            />
          </Form.Control>
        </Form.Field>
      </div>
      <Form.Field name="use_case" className="mb-8 w-full">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Form.Label className="required-field-label mb-2 text-12 font-semibold leading-4 text-black-55 sm:text-14">
            How will you use ArcSite?
          </Form.Label>
          <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="valueMissing">
            Please Select
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Select>
            <SelectTrigger className="h-8 rounded-sm border-[#d9d9d9]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {usageList.map((it) => (
                <SelectItem value={it} key={it} className="cursor-pointer">
                  {it}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Form.Control>
      </Form.Field>
      <Form.Field name="industry" className="mb-8 w-full">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Form.Label className="required-field-label mb-2 text-12 font-semibold leading-4 text-black-55 sm:text-14">
            Industry
          </Form.Label>
          <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="valueMissing">
            Please Select
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Select>
            <SelectTrigger className="h-8 rounded-sm border-[#d9d9d9]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="h-64">
              {industryList.map((it) => (
                <SelectItem value={it} key={it} className="cursor-pointer">
                  {it}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Form.Control>
      </Form.Field>
      <Form.Field name="password" className="mb-8 w-full">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Form.Label className="required-field-label mb-2 text-12 font-semibold leading-4 text-black-55 sm:text-14">
            Password
          </Form.Label>
          <Form.Message className="text-12 leading-4 text-[#ff4d4f]" match="valueMissing">
            Please input your password
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            defaultValue={userinfoData?.password || ""}
            className="h-8 w-full rounded-sm border border-solid !border-[#d9d9d9] !bg-white-fff pl-3 text-black-100 outline-none"
            type="password"
            autoComplete="on"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="request_demo_on_signup" className="mb-6 w-full">
        <Form.Control asChild>
          <Checkbox />
        </Form.Control>
        <label className="relative -top-[3px] ml-3 text-14 font-normal">
          I'm ready to see ArcSite in action! I'd like to schedule a personalized demo.
        </label>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className="h-[2.5rem] w-full cursor-pointer rounded-[3px] bg-[#e3571c] text-14 font-semibold leading-[1.125rem] text-white-fff"
          style={{ marginTop: 10 }}
        >
          Complete signup
        </button>
      </Form.Submit>
    </Form.Root>
  )
}

const usageList = [
  "Create Designs",
  "Capture Site Data",
  "Perform Material Takeoffs",
  "Generate Estimates and Proposals",
]

const industryList = [
  "Personal Projects",
  "Student/Educator",
  "Maintenance",
  "Basement Waterproofing",
  "Concrete",
  "Design",
  "Electrical",
  "Fencing",
  "Fire Inspection",
  "Flooring",
  "Foundation Repair",
  "General Contracting",
  "Gutters",
  "HVAC",
  "Pest Control",
  "Plumbing",
  "Site Audits / Inspection",
  "Turf",
  "Other",
]
