export const site = {
  name: 'P. Arul Kumar',
  roles: ['Advocate', 'Pastor', 'Author', 'Publisher', 'Social Worker'],
  motto: 'Justice with Integrity. Faith with Compassion.',
  phoneDisplay: '+91 98400 00000',
  phone: '+919840000000',
  whatsapp: '919840000000',
  email: 'contact@parulkumar.com',
  office: {
    name: 'Law Office of P. Arul Kumar',
    lines: ['No. 12, Court Road, Ground Floor', 'Chennai, Tamil Nadu 600001', 'India'],
    hours: [
      { day: 'Monday – Friday', time: '10:00 AM – 6:00 PM' },
      { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
      { day: 'Sunday', time: 'Worship & Ministry' },
    ],
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Legal Services', href: '#legal-services' },
    { label: 'Ministry', href: '#ministry' },
    { label: 'Books', href: '#books' },
    { label: 'Law Today', href: '#law-today' },
    { label: 'Prayer', href: '#prayer' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Greetings Sir, I would like to connect with you.',
)}`
