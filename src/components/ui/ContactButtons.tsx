import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, mailHref, telHref, whatsappHref } from "@/config/contact";

// Call / WhatsApp / Email buttons that open the phone dialer, WhatsApp chat or mail app directly.
export default function ContactButtons({ topic }: { topic: string }) {
    return (
        <div className="space-y-3">
            <a
                href={telHref}
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
                <Phone className="w-5 h-5" /> Call {CONTACT.phoneDisplay}
            </a>
            <a
                href={whatsappHref(`Hi, I'm interested in ${topic}. Please share details.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95"
            >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a
                href={mailHref(`${topic} inquiry`)}
                className="flex items-center justify-center gap-2 w-full py-4 border border-border text-white font-bold rounded-xl hover:border-primary/50 transition-colors"
            >
                <Mail className="w-5 h-5 text-primary" /> Email Us
            </a>
        </div>
    );
}
