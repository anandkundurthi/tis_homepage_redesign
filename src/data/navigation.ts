export const ADMISSION_PORTAL_URL = "https://admission.tis.edu.in";
export const BROCHURE_URL = "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf";
export const VIRTUAL_TOUR_URL = "https://tis.edu.in/virtual-tour/";
export const MAP_URL =
  "https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun+(Uttarakhand)/@30.3430336,77.8865903,17z";

export const navLinks = [
  { label: "About TIS", href: "#about", id: "about" },
  { label: "Academics", href: "#academics", id: "academics" },
  { label: "Boarding Life", href: "#campus", id: "campus" },
  { label: "Beyond Academics", href: "#student-life", id: "student-life" },
  { label: "Community", href: "#community", id: "community" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/* Includes sections without a nav link so the highlight clears when you scroll past a linked one. */
export const sectionIds = [
  ...navLinks.map((link) => link.id),
  "why-tis",
  "admissions",
] as const;

export const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "About TIS", href: "#about" },
      { label: "Academics", href: "#academics" },
      { label: "Boarding Life", href: "#campus" },
      { label: "Beyond Academics", href: "#student-life" },
      { label: "Admissions", href: "#admissions" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brochure", href: BROCHURE_URL },
      { label: "Virtual Tour", href: VIRTUAL_TOUR_URL },
      {
        label: "Calendar",
        href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf",
      },
      { label: "FAQ", href: "https://tis.edu.in/faq/" },
      { label: "Parent Login", href: "https://tis.fedena.com/" },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        label: "Child Welfare & Safety",
        href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf",
      },
      {
        label: "Disciplinary Policy",
        href: "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf",
      },
      {
        label: "Mobile Phone Policy",
        href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf",
      },
      { label: "Privacy Policy", href: "https://tis.edu.in/privacy-policy/" },
      {
        label: "Terms & Conditions",
        href: "https://tis.edu.in/terms-conditions/",
      },
    ],
  },
] as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/tulasinternationalschool/",
  },
  { label: "X (Twitter)", href: "https://x.com/tulas_intschool?lang=en" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tulasinternationalschool/?hl=en",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/tulas-international-school/home/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
  },
] as const;
