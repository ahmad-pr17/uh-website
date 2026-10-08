// Demo placeholder details — swap for real ones. Single source of truth for contact details. Every call / WhatsApp / email link is built from here.
export const CONTACT = {
    phoneDisplay: "+92 300 123 4567",
    phoneE164: "+923001234567",
    whatsappNumber: "923001234567", // international format, digits only (wa.me)
    email: "info@example.com",
    address: "Office #7, Union Town, Abdul Sattar Edhi Rd, Lahore",
} as const;

export const telHref = `tel:${CONTACT.phoneE164}`;

export const mailHref = (subject?: string, body?: string) => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const q = params.toString().replace(/\+/g, "%20");
    return `mailto:${CONTACT.email}${q ? `?${q}` : ""}`;
};

export const whatsappHref = (text?: string) =>
    `https://wa.me/${CONTACT.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Office location (Google Maps place for "Universal Holdings", Union Town).
export const OFFICE_COORDS = { lat: 31.4441644, lng: 74.2487463 } as const;

export const officeEmbedSrc = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&z=17&output=embed`;

export const officeDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}`;

export const officePlaceHref = `https://www.google.com/maps/search/?api=1&query=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}`;
