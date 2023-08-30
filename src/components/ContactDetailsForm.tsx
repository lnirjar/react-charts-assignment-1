import { useState } from "react"
import { Contact } from "../types"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { created, updated } from "../features/contacts/contactsSlice";

type Props = {
    contact?: Contact,
    handleClose: () => void,
}

function ContactDetailsForm({ contact, handleClose }: Props) {
    const [firstName, setFirstName] = useState(contact?.firstName || '');
    const [lastName, setLastName] = useState(contact?.lastName || '');
    const [email, setEmail] = useState(contact?.email || '');
    const [phone, setPhone] = useState(contact?.phone || '');
    const [company, setCompany] = useState(contact?.company || '');
    const [city, setCity] = useState(contact?.city || '');
    const [isActive, setIsActive] = useState(contact?.isActive ?? true);

    const dispatch: AppDispatch = useDispatch();

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setCity('');
        setIsActive(true);
    }

    const handleUpdate = (contact: Contact) => {
        dispatch(updated(contact));
    }

    const handleCreate = (contact: Omit<Contact, "id">) => {
        dispatch(created(contact));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (contact) {
            handleUpdate({ firstName, lastName, email, phone, company, city, isActive, id: contact.id });
        } else {
            handleCreate({ firstName, lastName, email, phone, company, city, isActive });
        }
        handleClose();
        clearForm();
    }

    return (
        <form
            className="bg-neutral-50 p-8 rounded-lg shadow-2xl w-96 h-96 overflow-y-auto block"
            onClick={e => e.stopPropagation()}
            onSubmit={handleSubmit}
        >
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    required
                    className="p-3 w-full bg-neutral-200 rounded-lg"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label>Last Name</label>
                <input
                    type="text"
                    required
                    className="p-3 w-full bg-neutral-200 rounded-lg"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label>Email</label>
                <input
                    type="email"
                    required
                    className="p-3 w-full bg-neutral-200 rounded-lg"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label>Phone</label>
                <input
                    type="tel"
                    required
                    className="p-3 w-full bg-neutral-200 rounded-lg"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label>Company</label>
                <input
                    type="text"
                    required
                    className="p-3 w-full bg-neutral-200 rounded-lg"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label>City</label>
                <input
                    type="text"
                    required
                    className="p-3 w-full bg-neutral-200 rounded-lg"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </div>
            <fieldset className="mt-4">
                <legend>Status</legend>

                <div>
                    <input type="radio" id="status-active" name="status" value="active" checked={isActive} onChange={e => setIsActive(e.target.value === 'active')} />
                    <label htmlFor="status-active" className="mx-1">Active</label>
                </div>

                <div>
                    <input type="radio" id="status-inactive" name="status" value="inactive" checked={!isActive} onChange={e => setIsActive(e.target.value === 'active')} />
                    <label htmlFor="status-inactive" className="mx-1">Inactive</label>
                </div>
            </fieldset>
            <button
                className="p-3 w-full bg-yellow-300 rounded-lg mt-4"
                type="submit"
            >
                {contact ? 'Update' : 'Create'}
            </button>
            <button
                className="p-3 w-full border border-black rounded-lg mt-2"
                onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    clearForm();
                }}
            >
                Cancel
            </button>
        </form>
    )
}

export default ContactDetailsForm