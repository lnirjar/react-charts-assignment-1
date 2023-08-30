import { useState } from "react"
import { Plus } from "lucide-react"
import Modal from "./Modal"
import ContactDetailsForm from "./ContactDetailsForm"

type Props = {}

function CreateContactButton({ }: Props) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <button
                className="bg-yellow-400 rounded-full p-2 shadow-xl"
                onClick={() => {
                    handleOpen()
                }}
            >
                <Plus size={32} strokeWidth={3} />
            </button>
            <Modal open={open} handleClose={handleClose}>
                <ContactDetailsForm
                    handleClose={handleClose}
                />
            </Modal>
        </>
    )
}

export default CreateContactButton