import { Contact } from "../types";
import ContactCard from "./Contact";

const data: Contact[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', isActive: true },
    { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', isActive: false },
];

function Contacts() {
    return (
        <section>
            <h1 className="text-4xl font-bold">
                Contacts
            </h1>
            <ul className="mt-4 grid grid-cols-4 gap-4">
                {data.map((contact, i) => <li key={i}><ContactCard contact={contact} /></li>)}
            </ul>
        </section>
    )
}

export default Contacts