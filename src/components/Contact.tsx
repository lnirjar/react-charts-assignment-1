import { Contact } from "../types"

type Props = {
    contact: Contact
}

function ContactCard({ contact: { firstName, lastName, email, isActive } }: Props) {
    return (
        <article className="bg-neutral-50 p-4 rounded-lg shadow-xl shadow-neutral-200 w-56">
            <h2 className="font-semibold text-xl text-slate-950">{firstName} {lastName}</h2>
            <p>{email}</p>
            <p>{isActive ? `active` : `inactive`}</p>
            <button>edit</button>
            <button>delete</button>
        </article>
    )
}

export default ContactCard