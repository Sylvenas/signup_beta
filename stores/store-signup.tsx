import type { StateCreator } from "zustand"
import { create } from "zustand"

export type EmailData = {
  username: string
}

export type UserinfoData = {
  firstname: string
  lastname: string
  password: string
}

const steps = ["email", "userinfo"] as const
type Step = (typeof steps)[number]
type setDataType = { step: "emailData"; data: EmailData } | { step: "userinfoData"; data: UserinfoData }

const initialStepState = {
  step: "email" as Step,
  emailData: null,
  userinfoData: null,
}

export interface SignUpSlice {
  step: Step
  setStep: (step: Step) => void

  emailData: EmailData | null
  userinfoData: UserinfoData | null
  setData: ({ step, data }: setDataType) => void
}

export const createSignUpSlice: StateCreator<SignUpSlice, [], [], SignUpSlice> = (set) => {
  return {
    ...initialStepState,
    setStep: (step) => {
      set((state) => ({
        ...state,
        step,
      }))
    },
    setData: ({ step, data }) =>
      set((state) => ({
        ...state,
        [step]: data,
      })),
  }
}

export const useSignUpStore = create<SignUpSlice>()((...a) => ({
  ...createSignUpSlice(...a),
}))
