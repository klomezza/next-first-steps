import  type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de contactos de mi servicio',
};


export default function ContactPage() {
    return (
        <>
        <span className="text-5xl">Contact Page</span>
        </>
    )
}