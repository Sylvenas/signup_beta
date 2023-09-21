import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import React from "react"
// import "./styles.css"

const DialogDemo = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Overlay className="DialogOverlay" />
      {/* <Dialog.Portal className="DialogPortal"> */}
        <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
          <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
        </Dialog.Content>
      {/* </Dialog.Portal> */}
    </Dialog.Root>
  )
}

export default DialogDemo
