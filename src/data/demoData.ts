export const events = [
  {
    id: 1,
    title: "Annual Sports Day 2024",
    date: "2024-12-15",
    description: "Join us for an exciting day of sports and activities featuring competitions for all classes.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Quran Recitation Competition",
    date: "2024-12-20",
    description: "Students will showcase their Quran recitation skills in this spiritual event.",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de605f3f?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    date: "2024-12-28",
    description: "An important meeting to discuss student progress and academic performance.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Winter Cultural Program",
    date: "2025-01-10",
    description: "Celebrate our cultural heritage with performances, poetry, and Islamic nasheed.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
  },
];

export const teachers = [
  {
    id: 1,
    name: "Ustadh Ahmed Rahman",
    position: "Principal",
    qualification: "MA in Islamic Studies, B.Ed",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote: "Education is not just about knowledge, but building character with Islamic values.",
  },
  {
    id: 2,
    name: "Ustadha Fatima Khatun",
    position: "Head Teacher (Girls Section)",
    qualification: "MA in Education, Hafiza",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "Every child is a blessing, and teaching them is our greatest responsibility.",
  },
  {
    id: 3,
    name: "Ustadh Mohammad Hasan",
    position: "Hifz Department Head",
    qualification: "Hafiz, Qari, Islamic Scholar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote: "The best among you are those who learn the Quran and teach it.",
  },
  {
    id: 4,
    name: "Ustadha Aisha Begum",
    position: "English Teacher",
    qualification: "MA in English Literature",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    quote: "Language opens doors to understanding and communication.",
  },
  {
    id: 5,
    name: "Ustadh Ibrahim Khan",
    position: "Mathematics Teacher",
    qualification: "BSc in Mathematics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "Mathematics teaches us precision and logical thinking.",
  },
  {
    id: 6,
    name: "Ustadha Mariam Ali",
    position: "Arabic & Quran Teacher",
    qualification: "BA in Arabic, Hafiza",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    quote: "Arabic is the language of our faith and heritage.",
  },
];

export const admissionFees = [
  {
    class: "Play",
    admission: 3000,
    monthly: 1200,
    exam: 500,
    yearly: 15000,
  },
  {
    class: "Nursery",
    admission: 3500,
    monthly: 1300,
    exam: 600,
    yearly: 16500,
  },
  {
    class: "Class 1",
    admission: 4000,
    monthly: 1500,
    exam: 700,
    yearly: 19000,
  },
  {
    class: "Class 2",
    admission: 4000,
    monthly: 1500,
    exam: 700,
    yearly: 19000,
  },
  {
    class: "Class 3",
    admission: 4500,
    monthly: 1600,
    exam: 800,
    yearly: 20500,
  },
  {
    class: "Class 4",
    admission: 4500,
    monthly: 1600,
    exam: 800,
    yearly: 20500,
  },
  {
    class: "Class 5",
    admission: 5000,
    monthly: 1700,
    exam: 900,
    yearly: 22000,
  },
  {
    class: "Hifz",
    admission: 6000,
    monthly: 2000,
    exam: 1000,
    yearly: 27000,
  },
];

export const reviews = [
  {
    id: 1,
    parent: "Mohammad Ali",
    student: "Ayesha Ali (Class 3)",
    rating: 5,
    comment: "Excellent Islamic environment. My daughter has improved both academically and spiritually. The teachers are very caring and dedicated.",
    date: "2024-11-15",
  },
  {
    id: 2,
    parent: "Khadija Rahman",
    student: "Omar Rahman (Hifz)",
    rating: 5,
    comment: "The Hifz program is outstanding. My son has memorized 10 Juz in just 2 years with proper Tajweed. Alhamdulillah!",
    date: "2024-11-10",
  },
  {
    id: 3,
    parent: "Abdul Karim",
    student: "Zainab Karim (Class 2)",
    rating: 5,
    comment: "Great combination of Islamic and modern education. The school maintains excellent discipline and values.",
    date: "2024-11-05",
  },
  {
    id: 4,
    parent: "Fatima Sultana",
    student: "Ibrahim Hasan (Class 4)",
    rating: 5,
    comment: "My son loves going to school. The teachers are professional and the Islamic teachings are practical and effective.",
    date: "2024-10-28",
  },
  {
    id: 5,
    parent: "Yusuf Ahmed",
    student: "Maryam Ahmed (Nursery)",
    rating: 5,
    comment: "Even at nursery level, the focus on Islamic manners and basic duas is impressive. Highly recommended!",
    date: "2024-10-20",
  },
];

export const routines = {
  Play: [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Arabic/Quran" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:15", subject: "Break" },
    { time: "10:15 - 11:00", subject: "Mathematics" },
    { time: "11:00 - 11:45", subject: "Creative Activities" },
  ],
  Nursery: [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Arabic/Quran" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:15", subject: "Break" },
    { time: "10:15 - 11:00", subject: "Mathematics" },
    { time: "11:00 - 11:45", subject: "General Knowledge" },
  ],
  "Class 1": [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Quran/Tajweed" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:45", subject: "Mathematics" },
    { time: "10:45 - 11:00", subject: "Break" },
    { time: "11:00 - 11:45", subject: "Bangla" },
    { time: "11:45 - 12:30", subject: "Islamic Studies" },
  ],
  "Class 2": [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Quran/Tajweed" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:45", subject: "Mathematics" },
    { time: "10:45 - 11:00", subject: "Break" },
    { time: "11:00 - 11:45", subject: "Bangla" },
    { time: "11:45 - 12:30", subject: "Science" },
  ],
  "Class 3": [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Quran/Tajweed" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:45", subject: "Mathematics" },
    { time: "10:45 - 11:00", subject: "Break" },
    { time: "11:00 - 11:45", subject: "Bangla" },
    { time: "11:45 - 12:30", subject: "Science/Social Studies" },
  ],
  "Class 4": [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Quran/Tajweed" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:45", subject: "Mathematics" },
    { time: "10:45 - 11:00", subject: "Break" },
    { time: "11:00 - 11:45", subject: "Bangla" },
    { time: "11:45 - 12:30", subject: "Science/Social Studies" },
  ],
  "Class 5": [
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 9:15", subject: "Quran/Tajweed" },
    { time: "9:15 - 10:00", subject: "English" },
    { time: "10:00 - 10:45", subject: "Mathematics" },
    { time: "10:45 - 11:00", subject: "Break" },
    { time: "11:00 - 11:45", subject: "Bangla" },
    { time: "11:45 - 12:30", subject: "Science/Social Studies" },
  ],
  Hifz: [
    { time: "7:00 - 8:00", subject: "Sabaq (New Lesson)" },
    { time: "8:00 - 8:30", subject: "Morning Assembly & Dua" },
    { time: "8:30 - 10:00", subject: "Manzil (Revision)" },
    { time: "10:00 - 10:15", subject: "Break" },
    { time: "10:15 - 11:30", subject: "Sabaq Review" },
    { time: "11:30 - 12:30", subject: "Islamic Studies/Arabic" },
  ],
};

export const results = [
  // Play class
  { class: "Play", roll: 1, name: "Aisha Khan", gpa: "A+", position: 1 },
  { class: "Play", roll: 2, name: "Omar Ali", gpa: "A", position: 2 },
  { class: "Play", roll: 3, name: "Fatima Rahman", gpa: "A", position: 3 },
  
  // Nursery
  { class: "Nursery", roll: 1, name: "Ibrahim Hasan", gpa: "A+", position: 1 },
  { class: "Nursery", roll: 2, name: "Zainab Ahmed", gpa: "A+", position: 2 },
  { class: "Nursery", roll: 3, name: "Yusuf Khan", gpa: "A", position: 3 },
  
  // Class 1
  { class: "1", roll: 1, name: "Maryam Sultana", gpa: "A+", position: 1 },
  { class: "1", roll: 2, name: "Hassan Ali", gpa: "A+", position: 2 },
  { class: "1", roll: 3, name: "Khadija Begum", gpa: "A", position: 3 },
  
  // Class 2
  { class: "2", roll: 1, name: "Abdullah Rahman", gpa: "A+", position: 1 },
  { class: "2", roll: 2, name: "Safiya Ahmed", gpa: "A+", position: 2 },
  { class: "2", roll: 3, name: "Bilal Khan", gpa: "A", position: 3 },
  
  // Class 3
  { class: "3", roll: 1, name: "Hafsa Ali", gpa: "A+", position: 1 },
  { class: "3", roll: 2, name: "Zakariya Hasan", gpa: "A+", position: 2 },
  { class: "3", roll: 3, name: "Ruqayya Begum", gpa: "A", position: 3 },
  
  // Class 4
  { class: "4", roll: 1, name: "Sumaiya Rahman", gpa: "A+", position: 1 },
  { class: "4", roll: 2, name: "Umar Farooq", gpa: "A+", position: 2 },
  { class: "4", roll: 3, name: "Ayesha Siddique", gpa: "A", position: 3 },
  
  // Class 5
  { class: "5", roll: 1, name: "Mohammad Ali", gpa: "A+", position: 1 },
  { class: "5", roll: 2, name: "Nusaybah Khan", gpa: "A+", position: 2 },
  { class: "5", roll: 3, name: "Talha Ahmed", gpa: "A", position: 3 },
  
  // Hifz
  { class: "Hifz", roll: 1, name: "Abdul Rahman", gpa: "15 Juz", position: "Excellent" },
  { class: "Hifz", roll: 2, name: "Musa Ibrahim", gpa: "12 Juz", position: "Very Good" },
  { class: "Hifz", roll: 3, name: "Asma Khatun", gpa: "10 Juz", position: "Good" },
];

export const boardMembers = [
  {
    name: "Md. Abdul Jabbar",
    position: "Chairman",
    quote: "Our mission is to nurture future Muslim leaders with strong Islamic foundation and modern education.",
  },
  {
    name: "Dr. Shahinur Rahman",
    position: "Vice Chairman",
    quote: "Quality education combined with Islamic values creates responsible and successful individuals.",
  },
];

export const campusInfo = {
  description: "HILM Islamic School is located in a modern three-story building in the heart of Narayanganj. Our campus features well-equipped classrooms, a dedicated Hifz section, library, and prayer facilities.",
  facilities: [
    "Air-conditioned Classrooms",
    "Modern Library with Islamic & Academic Books",
    "Dedicated Hifz Memorization Rooms",
    "Prayer Hall for Boys & Girls",
    "Computer Lab",
    "Science Laboratory",
    "Safe & Secure Environment",
    "CCTV Surveillance",
  ],
  images: [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
  ],
};
