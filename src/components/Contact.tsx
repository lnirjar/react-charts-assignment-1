import { useState } from "react"
import { MailOpen, Phone, Building2, MapPin, MonitorDot, Pencil, Delete } from "lucide-react"
import { Contact } from "../types"
import Modal from "./Modal";
import ContactDetailsForm from "./ContactDetailsForm";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { deleted } from "../features/contacts/contactsSlice";

type Props = {
    contact: Contact
}

function ContactCard({
    contact
}: Props) {
    const [open, setOpen] = useState(false);
    const dispatch: AppDispatch = useDispatch();

    const { firstName, lastName, email, phone, city, company, isActive } = contact;

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleDelete = (contact: Contact) => {
        dispatch(deleted(contact));
    }

    return (
        <article className="bg-neutral-50 p-4 rounded-lg shadow-xl shadow-neutral-200 w-full">
            <h2 className="font-semibold text-xl text-slate-950 mb-2">{firstName} {lastName}</h2>
            <ul className="flex flex-col gap-1">
                <li className="flex gap-2 align-middle">
                    <span><MailOpen size={20} /></span>
                    <span>{email}</span>
                </li>
                <li className="flex gap-2 align-middle">
                    <span><Phone size={20} /></span>
                    <span>{phone}</span>
                </li>
                <li className="flex gap-2 align-middle">
                    <span><Building2 size={20} /></span>
                    <span>{company}</span>
                </li>
                <li className="flex gap-2 align-middle">
                    <span><MapPin size={20} /></span>
                    <span>{city}</span>
                </li>
                <li className="flex gap-2 align-middle">
                    <span><MonitorDot size={20} /></span>
                    <span
                        className={`border px-2 rounded-full mr-auto text-sm ${isActive ? `border-green-800 text-green-950 bg-green-100` : `border-neutral-800 text-neutral-800 bg-neutral-100`}`}
                    >
                        {isActive ? `active` : `inactive`}
                    </span>
                </li>
            </ul>
            <div className="mt-2 flex gap-2 justify-end">
                <button
                    className="border border-black p-1 rounded-lg w-11 hover:bg-yellow-200"
                    onClick={() => handleOpen()}
                >
                    <Pencil className="fill-yellow-500 mx-auto" />
                </button>
                <button
                    className="border border-black p-1 rounded-lg w-11 hover:bg-red-100"
                    onClick={() => handleDelete(contact)}
                >
                    <Delete className="fill-red-500 mx-auto" />
                </button>
                <Modal open={open} handleClose={handleClose}>
                    <ContactDetailsForm
                        contact={contact}
                        handleClose={handleClose}
                    />
                </Modal>
            </div>
        </article>
    )
}

export default ContactCard