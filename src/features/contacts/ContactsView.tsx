import { useSelector } from 'react-redux';
import ContactCard from "../../components/Contact";
import { RootState } from '../../app/store';
import CreateContactButton from '../../components/CreateContactButton';

function ContactsView() {
    const data = useSelector((state: RootState) => state.contacts.data);

    return (
        <section>
            <h1 className={`text-4xl font-bold ${data.length ? '' : 'text-center'}`}>
                Contacts
            </h1>
            <ul className="mt-4 grid grid-cols-2 gap-4">
                {data.map((contact) => (
                    <li key={contact.id}>
                        <ContactCard
                            contact={contact}
                        />
                    </li>
                ))}
            </ul>
            {data.length ? (
                <div className='fixed bottom-16 left-20'>
                    <CreateContactButton />
                </div>
            ) : (
                <div className='bg-neutral-50 p-6 rounded-lg shadow-xl shadow-neutral-200 mx-auto my-8 w-fit text-center'>
                    <h2 className='text-3xl font-bold'>
                        No Contacts Found
                    </h2>
                    <p className='mb-6'>
                        Please add contacts from create contact button
                    </p>
                    <CreateContactButton />
                </div>
            )}
        </section>
    )
}

export default ContactsView