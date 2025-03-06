import React, { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import { experiences, projects } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-light dark:bg-gradient-dark text-gray-800 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-lg transition-all duration-300">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="hidden md:flex flex-1" />
          <div className="flex items-center gap-4 md:gap-8 justify-center flex-1">
            <button
              onClick={() => scrollToElement('about')}
              className="hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToElement('skills')}
              className="hover:text-blue-500 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToElement('portfolio')}
              className="hover:text-blue-500 transition-colors"
            >
              Portfolio
            </button>
          </div>
          <div className="flex items-center gap-3 md:gap-6 justify-end flex-1">
            <a
              href="https://wa.me/6282313959115"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">Whatsapp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M20.472 3.528C18.208 1.264 15.208 0 12 0 5.472 0 0 5.472 0 12c0 2.088.552 4.128 1.584 5.928L0 24l6.168-1.608A11.952 11.952 0 0012 24c6.528 0 12-5.472 12-12 0-3.208-1.264-6.208-3.528-8.472zM12 21.984h-.048a9.936 9.936 0 01-5.064-1.392l-.36-.216-3.768.984.984-3.624-.24-.384A9.984 9.984 0 012.016 12c0-5.52 4.488-10.008 10.032-10.008 2.664 0 5.184 1.032 7.056 2.928 1.896 1.896 2.928 4.416 2.928 7.08-.024 5.52-4.488 9.984-10.032 9.984zm5.52-7.44c-.288-.144-1.752-.864-2.016-.96-.264-.096-.456-.144-.648.144-.192.288-.768.96-.936 1.152-.168.192-.336.216-.624.072-.288-.144-1.224-.456-2.328-1.44-.864-.768-1.44-1.704-1.608-1.992-.168-.288 0-.432.12-.576.12-.12.288-.312.432-.48.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.584-.888-2.184-.24-.576-.48-.48-.648-.48-.168 0-.36-.024-.552-.024-.192 0-.504.072-.768.36s-1.008 1.008-1.008 2.448c0 1.44 1.032 2.832 1.176 3.024.144.192 2.04 3.12 4.944 4.368.696.288 1.224.48 1.656.624.696.216 1.32.192 1.824.12.552-.072 1.704-.696 1.944-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://x.com/ahmadghozaliXD"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://instagram.com/ahmadghozali.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-xl mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ahmad Ghozali</h1>
            <p className="text-base md:text-lg opacity-80 mb-8 flex flex-wrap gap-2 justify-center md:justify-start">
              <span>Programmer</span>•
              <span>UI Designer</span>•
              <span>System Analyst</span>•
              <span>Network Administrator</span>•
              <span>IT Security Specialist</span>•
              <span>Data Analyst</span>•
              <span>Data Scientist</span>
            </p>
            <div className="flex gap-6 mb-8 justify-center md:justify-start">
              <a
                href="https://github.com/ahmadghozali-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmadghozali-xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ahmadghozali.xyz@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://wa.me/6282313959115"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a href="#portfolio" className="px-6 py-3 bg-gray-100 dark:bg-white/10 rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-xl mb-8 text-center opacity-80">Familiar With</h3>
          <div className="bg-white/80 dark:bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm flex flex-wrap justify-center gap-4 md:gap-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 md:w-12 h-8 md:h-12" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="w-12 h-12" alt="PHP" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-12 h-12" alt="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12 h-12" alt="HTML" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-12 h-12" alt="MySQL" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-12 h-12" alt="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-12 h-12" alt="TypeScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-12 h-12" alt="C++" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-8 md:w-12 h-8 md:h-12" alt="C" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 mt-8 backdrop-blur-sm bg-gray-50/50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tentang Saya</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg opacity-80 mb-6">
              Saya adalah seorang Full Stack Developer yang berasal dari Universitas Muhammadiyah Riau, jurusan Teknik Informatika. Keahlian saya mencakup JavaScript, PHP, dan CSS, dengan fokus pada pengembangan aplikasi web yang responsif dan efisien.
            </p>
            <p className="text-lg opacity-80 mb-6">
              Saya terbiasa bekerja baik secara mandiri maupun dalam tim, selalu berfokus pada hasil yang maksimal. Saya percaya bahwa adaptasi terhadap teknologi baru adalah kunci untuk terus berkembang dalam industri ini, dan saya siap menghadapi tantangan baru untuk memberikan solusi inovatif.
            </p>
            <p className="text-lg opacity-80">
              Saya memiliki kemampuan analitis yang kuat dan selalu berfokus pada solusi dalam menghadapi tantangan teknis dan saya berkomitmen untuk menciptakan solusi digital yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang luar biasa.
            </p>
          </div>
          
          {/* Skills Section */}
          <div id="skills" className="max-w-3xl mx-auto mt-12 md:mt-16">
            <h3 className="text-2xl font-bold mb-8" data-aos="fade-up">Skills</h3>
            <div className="bg-white/80 dark:bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm" data-aos="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills */}
                <div className="space-y-4">
                  <h4 className="font-semibold mb-4">Technical Skills</h4>
                  <div className="flex items-center justify-between">
                    <span>Programming</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full" data-aos="width">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Database Administration</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} data-aos="width" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Copy Writing</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Editor</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Design Grafis</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Analysis</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Problem Solving</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pengembangan Software</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>IT Hardware Support</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '82%' }} />
                    </div>
                  </div>
                </div>

                {/* Development Skills */}
                <div className="space-y-4">
                  <h4 className="font-semibold mb-4">Development Skills</h4>
                  <div className="flex items-center justify-between">
                    <span>Web Development</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>UI/UX Design</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Machine Learning</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '82%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Computer Vision</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>API Development</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Technical Writing</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Project Management</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Digital Marketing</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Environmental Assessment</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Languages Section */}
          <div className="max-w-3xl mx-auto mt-12 md:mt-16">
            <h3 className="text-2xl font-bold mb-8" data-aos="fade-up">Languages</h3>
            <div className="bg-white/80 dark:bg-white/5 rounded-xl p-6 shadow-lg backdrop-blur-sm space-y-4" data-aos="fade-up">
              <div className="flex items-center justify-between">
                <span>Indonesian</span>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: '100%' }} data-aos="width" />
                </div>
                <span>Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span>English</span>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: '80%' }} data-aos="width" />
                </div>
                <span>Fluent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-20 mt-8 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pengalaman Kerja</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="p-6 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                <p className="opacity-80 mb-2">{exp.company}</p>
                <p className="opacity-60 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 opacity-80">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-12 md:py-20 mt-8 backdrop-blur-sm bg-gray-50/50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Proyek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center opacity-60">
        <p>© {new Date().getFullYear()} Ahmad Ghozali. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;