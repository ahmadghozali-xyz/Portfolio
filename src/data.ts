import { type Experience, type Project } from './types';

export const projects: Project[] = [
  {
    title: 'Website MDTA Al-Muhajirin',
    description: 'Website untuk memperkenalkan MDTA Al-Muhajirin ke publik, sistem pendaftaran online, dan manajemen administrasi siswa termasuk pembayaran SPP.',
    image: 'https://raw.githubusercontent.com/ahmadghozali-xyz/Draw.io/refs/heads/main/Portfolio/P1.jpg',
    tech: ['HTML', 'TypeScript', 'Vite', 'Supabase'],
  },
  {
    title: 'Website MI Nurul Islam',
    description: 'Website sekolah MI Nurul Islam untuk informasi publik, pendaftaran siswa baru, dan sistem manajemen administrasi sekolah.',
    image: 'https://raw.githubusercontent.com/ahmadghozali-xyz/Draw.io/refs/heads/main/Portfolio/P2.jpg',
    tech: ['HTML', 'TypeScript', 'Vite', 'Supabase'],
  },
  {
    title: 'Bot Nulis',
    description: 'Aplikasi web untuk mengkonversi teks digital menjadi gambar tulisan tangan yang realistis di atas kertas.',
    image: 'https://raw.githubusercontent.com/ahmadghozali-xyz/Draw.io/refs/heads/main/Portfolio/P3.jpg',
    tech: ['Python', 'OpenCV', 'Flask'],
  },
  {
    title: 'TikTok Bot',
    description: 'Bot otomatis untuk meningkatkan engagement TikTok (likes, views, followers).',
    image: 'https://raw.githubusercontent.com/ahmadghozali-xyz/Draw.io/refs/heads/main/Portfolio/P4.jpg',
    github: 'https://github.com/ahmadghozali-xyz/TiktokBot',
    tech: ['Python', 'Selenium', 'Automation'],
  },
  {
    title: 'Peta SPBU Pekanbaru',
    description: 'Website pemetaan lokasi SPBU di Pekanbaru dengan informasi detail setiap SPBU.',
    image: 'https://raw.githubusercontent.com/ahmadghozali-xyz/Draw.io/refs/heads/main/Portfolio/P5.jpg',
    tech: ['React', 'Leaflet', 'OpenStreetMap'],
  }
];

export const experiences: Experience[] = [
  {
    company: 'Crossover',
    position: 'Assessment Writer',
    period: 'Juli 2024 - Sekarang',
    description: [
      'Menganalisis sampel produk melalui diskusi dengan desainer produk, pengembang, dan insinyur',
      'Mengorganisir dan memproses instruksi teknis untuk membuatnya lebih mudah dipahami pengguna',
      'Menggunakan alat AI untuk membuat dan menyempurnakan pertanyaan tes yang memenuhi standar pendidikan yang ketat'
    ]
  },
  {
    company: 'Komisi Pemilihan Umum Republik Indonesia (KPU RI)',
    position: 'Project Development Manager',
    period: 'Juni 2024 - Juli 2024',
    description: [
      'Pengelolaan dan integrasi data pemilih secara sistematis dan terstruktur',
      'Verifikasi dan validasi data pemilih menggunakan sistem terpadu',
      'Pemutakhiran dan penyusunan daftar pemilih sesuai dengan regulasi yang berlaku'
    ]
  },
  {
    company: 'Kementerian Pendidikan dan Kebudayaan',
    position: 'Human Resources Coordinator',
    period: 'November 2021 - Juli 2022',
    description: [
      'Mengelola proses rekrutmen dan seleksi pegawai sesuai dengan kebutuhan organisasi',
      'Mengembangkan dan mengimplementasikan program pengembangan kompetensi pegawai',
      'Mengoordinasikan evaluasi kinerja dan sistem manajemen talenta'
    ]
  },
  {
    company: 'Salsabila Teknik',
    position: 'HVAC Technician',
    period: 'April 2021 - Agustus 2024',
    description: [
      'Melakukan instalasi sistem pendingin udara sesuai dengan standar keamanan dan efisiensi energi',
      'Mendiagnosis dan memperbaiki kerusakan pada sistem AC menggunakan peralatan diagnostik modern',
      'Melaksanakan pemeliharaan preventif untuk memastikan kinerja optimal sistem pendingin'
    ]
  },
  {
    company: 'AMIKOM CENTER',
    position: 'Hardware Software Engineer',
    period: 'Agustus 2019 - Oktober 2021',
    description: [
      'Mengelola infrastruktur IT dan memberikan dukungan teknis tingkat lanjut untuk sistem kritikal',
      'Mengoptimalkan kinerja jaringan dan mengimplementasikan protokol keamanan terkini',
      'Mengembangkan dan memelihara sistem manajemen data terintegrasi'
    ]
  }
];