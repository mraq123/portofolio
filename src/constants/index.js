import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  mi,
  tailwind,
  nodejs,
  sami,
  quadra,
  steradian,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  sql,
  carrent,
  coming,
  jobit,
  tripguide,
  kementrian,
  threejs,
  drawio,
  postman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Tentang",
  },
  {
    id: "work",
    title: "Pengalaman",
  },
  {
    id: "contact",
    title: "Kontak",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: reactjs,
  },
  {
    title: "Backend (Basic)",
    icon: backend,
  },
  {
    title: "UI/UX Designer (Basic)",
    icon: figma,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "drawio",
    icon: drawio,
  },
  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Data Entry",
    company_name: "Kementrian Pertanian (PKL)",
    icon: kementrian,
    iconBg: "#383E56",
    date: "Nov 2018 - Des 2018",
    points: [
      "Membuka surat masuk yang telah di kirim melalui ekspedisi. ",
      "Merapihkan surat masuk yang telah di kirim melalui ekspedisi. ",
      "Mengentry data surat masuk yang telah dirapihkan melalui website internal.",
      "Mengirim surat yang telah di data ke ruangan yang ditentukan.",
    ],
  },
  {
    title: "Intern Frontend Web Developer",
    company_name: "PT Steradian Data Optima",
    icon: steradian,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Menerapkan desain antarmuka pengguna (UI) yang responsif dan intuitif sesuai spesifikasi proyek.",
      "Mengintegrasikan data dari backend menggunakan API untuk memastikan tampilan data yang akurat dan real-time dalam aplikasi.",
      "Mengoptimalkan elemen UI/UX untuk meningkatkan kenyamanan pengguna dan mengurangi waktu muat halaman",
      "Debugging and fixing bugs untuk meningkatkan kinerja dan stabilitas aplikasi.",
      "Menerapkan praktik terbaik dalam pengembangan frontend, termasuk penggunaan kontrol versi (Git) dan menjaga kebersihan kode",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Madrasah Ibtidaiyah Iaanatul Ikhwan ",
    icon: mi,
    iconBg: "#383E56",
    date: "May 2024 - Jul 2024",
    points: [
      "Pembuatan projek aplikasi disekolah untuk bahan penelitian skripsi dan riset.",
      "Pembuatan Desain UI/UX mudah digunakan berdasarkan analisis kebutuhan proyek, memastikan desain dapat terwujud diimplementasikan secara efektif.",
      "Frontend dan Backend Mengembangkan frontend yang responsif dan backend yang kuat sesuai dengan spesifikasi proyek.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quadra",
    description:
      "Website Internal untuk manajemen karyawan pada PT Steradian Data Optima.",
    tags: [
      {
        name: "react ts",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: quadra,
    source_code_link: "https://quadra.steradian.co.id/auth",
  },
  {
    name: "SAMI APP",
    description:
      "Web yang saya buat sebagai bahan skripsi dan kebutuhan pada sekolah dengan integrasi berbasis artificial intelligence",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: sami,
    source_code_link: "https://samiapp.vercel.app/",
  },
  {
    name: "On Progress",
    description: "COMING SOON",
    tags: [
      {
        name: "1",
        color: "blue-text-gradient",
      },
      {
        name: "2",
        color: "green-text-gradient",
      },
      {
        name: "3",
        color: "pink-text-gradient",
      },
    ],
    image: coming,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
