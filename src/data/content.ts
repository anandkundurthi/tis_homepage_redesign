import { images } from "@/data/images";

/*
  Copy is taken from tis.edu.in (homepage, admission page, and the school's own
  articles). Nothing here is invented; anything the school has not published
  is intentionally absent.
*/

export const hero = {
  eyebrow: "Boarding & day school · Dehradun, Uttarakhand",
  intro:
    "TIS is one of India’s top boarding and day schools in Dehradun. Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
  facts: ["CBSE", "Co-educational", "Classes IV–XII", "Boarding & day"],
};

export const about = {
  title: "A school that chooses its students back.",
  lead: "Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.",
  body: "At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.",
  points: [
    { label: "Curriculum", value: "CBSE, New Delhi" },
    { label: "Community", value: "Co-educational" },
    { label: "Format", value: "Boarding and day" },
    { label: "Classes", value: "IV to XII" },
  ],
};

export const academics = {
  title: "Learning that asks for understanding, not memory.",
  description:
    "The CBSE curriculum is the backbone at TIS: nationally recognised, structured, and paired with practical, project-based learning.",
  pillars: [
    {
      title: "CBSE curriculum",
      text: "A well-recognised national board that opens the way to national competitions and opportunities abroad.",
    },
    {
      title: "Smart classrooms",
      text: "Technology-supported teaching that keeps lessons interactive and makes learning more engaging.",
    },
    {
      title: "Personal guidance",
      text: "Small classes and a 6:1 student–teacher ratio, so every student is known by name, interest and pace.",
    },
    {
      title: "Competitive readiness",
      text: "Students are coached early towards board examinations and national and international competitive tests.",
    },
  ],
};

export const whyTis = {
  title: "Why families across India choose TIS.",
  description:
    "Parents are looking for more than grades: security, health, hygiene, academics and self-discipline. These are the reasons TIS gives for earning that trust.",
  reasons: [
    {
      title: "Co-educational by design",
      text: "Girls and boys study, play and lead together, building communication and mutual respect.",
    },
    {
      title: "Residential care",
      text: "Wardens and tutors who act as guardians, with mentors available around the clock.",
    },
    {
      title: "Value-based learning",
      text: "Forward-looking schooling grounded in respect, integrity and compassion.",
    },
    {
      title: "A global outlook",
      text: "Students pick up new languages and perspectives while staying rooted in Indian values.",
    },
  ],
};

/* Captions repeat the wording printed on each award graphic on tis.edu.in. */
export const awards = [
  {
    image: images.awardTopBoarding,
    alt: "Award graphic: Top 10 Best Boarding School of India by Education Today, with a photo of the award being presented",
    caption: "Top 10 Best Boarding School of India",
    giver: "Education Today",
  },
  {
    image: images.awardBestResidential,
    alt: "Award graphic: Best Boarding School in Uttarakhand by Golden Star, with a photo of the award being presented",
    caption: "Best Boarding School in Uttarakhand",
    giver: "Golden Star",
  },
  {
    image: images.awardUttarakhand,
    alt: "Award graphic: Uttarakhand Icon Awards 2024 presented to Mr. Raunak Jain by Satpal Maharaj, with a photo of the presentation",
    caption: "Uttarakhand Icon Awards, 2024",
    giver: "Satpal Maharaj, Minister, Uttarakhand Tourism Department",
  },
] as const;

export const campus = {
  title: "Twenty-two acres to grow up in.",
  description:
    "The campus sits in the valley off Chakrata Road, away from the crowding and pollution of the city. Classrooms, hostels and sports grounds share one setting, so learning does not stop when the bell does.",
  boardingLife: [
    {
      label: "Accommodation",
      text: "Spacious, clean dormitories looked after by wardens.",
    },
    {
      label: "Food",
      text: "Healthy, balanced meals prepared in a clean kitchen.",
    },
    {
      label: "Routine",
      text: "A steady day that balances studies, sports and leisure.",
    },
    {
      label: "Care",
      text: "Mentors and house wardens who guide students day and night.",
    },
  ],
  medicalNote: "Medical assistance is available 24×7 on campus.",
};

export const studentLife = {
  title: "Sports isn’t just a facility. At Tulas it’s the foundation.",
  description:
    "16+ sports curated to bring joy and discipline to your life, alongside music, art and drama for students who find their voice off the field.",
  sports: [
    "Archery",
    "Cycling",
    "Hockey",
    "Swimming",
    "Taekwondo",
    "Football",
    "Shooting Range",
    "Horse Riding",
    "Billiards",
    "Squash",
    "Volleyball",
    "Basketball",
    "Cricket",
    "Lawn Tennis",
    "Badminton",
    "Table Tennis",
  ],
  creative: ["Music", "Art", "Drama", "Dance"],
};

export const community = {
  title: "In their words.",
  studentQuote: "Tulas helped me thrive and become the best version of myself",
  studentText:
    "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.",
  parents: [
    {
      quote:
        "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
      name: "Namita Agarwal",
      role: "Mother of Krishna Agarwal",
    },
    {
      quote:
        "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme.",
      name: "Suresh Kumar",
      role: "Father of Aditya Kumar",
    },
    {
      quote:
        "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
      name: "Sandeep Kumar",
      role: "Father of Aryan",
    },
  ],
  personalitiesTitle: "Influential personalities on campus",
  personalities: [
    {
      name: "Sakshi Malik",
      note: "Olympic bronze medallist in wrestling; Padma Shri awardee 2017",
    },
    {
      name: "Abhishek Verma",
      note: "Arjuna awardee; Asian Games gold medallist in archery, 2013",
    },
    {
      name: "Aditi Gopichand Swami",
      note: "Arjuna awardee; world champion in archery, 2024",
    },
    {
      name: "Arushi Nishank",
      note: "Kathak dancer, actor, film producer and TEDx speaker",
    },
    {
      name: "Laxmi Agarwal",
      note: "Founder and President of The Laxmi Foundation",
    },
    {
      name: "Dr Ramesh Pokhriyal Nishank",
      note: "Former Union Cabinet Minister for Education, Government of India",
    },
  ],
};

export const admissions = {
  title: "Begin the conversation with TIS.",
  description:
    "Admissions are open for Classes IV to XII. Submit the online enquiry, and the admissions team will guide you through the next steps.",
  notes: [
    "Registration is a ₹15,000 fee, payable by demand draft in favour of Tulas International School, payable at Dehradun. It is neither transferable nor refundable.",
    "Registration of the child does not guarantee admission into the school.",
  ],
};

export const contact = {
  address: [
    "Tulas International School",
    "Dhoolkot, P.O – Selaqui",
    "Chakrata Road, Dehradun – 248011",
    "Uttarakhand",
  ],
  helpline: { label: "+91-98379 83791", href: "tel:+919837983791" },
  landlines: [
    { label: "0135-2699444", href: "tel:01352699444" },
    { label: "0135-2699666", href: "tel:01352699666" },
  ],
  email: "info@tis.edu.in",
  mapEmbed:
    "https://maps.google.com/maps?q=30.3430336,77.8891652&z=15&output=embed",
};
