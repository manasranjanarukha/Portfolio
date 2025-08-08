import React, { useState, useEffect } from "react";
import profilePhoto from "../public/images/Manas Ranjan Arukha.webp";
import aboutImage from "../public/images/About image.webp";
import project_1 from "../public/images/Project-1.webp";
import project_2 from "../public/images/Project-2.webp";
import project_3 from "../public/images/Project-3.webp";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  // Mock data - replace with your actual information
  const portfolioData = {
    name: "Manas Ranjan Arukha",
    title: "Frontend Web Developer",
    email: "manasaarukha99@gmail.com",
    github: "https://github.com/manasranjanarukha ",
    linkedin: "https://linkedin.com/in/manasranjanarukha",
    bio: "Aspiring frontend developer experienced in building two web projects using React, JavaScript, and modern CSS frameworks. Passionate about creating beautiful, responsive user interfaces. Eager to learn and contribute as part of a dynamic development team.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",

      "Tailwind CSS",
      "Node.js",
      "Git",

      "Responsive Design",
    ],
    projects: [
      {
        image: project_1,
        title: "Business Landing Page",
        description:
          "A full-featured Business Landing Page built with HTML, CSS and JavaScript",
        tech: [
          "HTML",
          "CSS",
          "JavaScript",
          "Remix Icon",
          "Swiper Js",
          "AOS",
          "PureCounter Js",
        ],
        github: "https://github.com/manasranjanarukha/Nextlnn",
        live: "https://manasranjanarukha.github.io/Nextlnn/",
      },
      {
        image: project_2,
        title: "Agency Portfolio",
        description:
          "A collaborative Agency Portfolio showcasing team projects",
        tech: ["React", "React-Icons", "React-Scroll-Parallax", "Lucid-React"],
        github: "https://github.com/manasranjanarukha/NextInn-Technology",
        live: "https://manasranjanarukha.github.io/NextInn-Technology/",
      },
      {
        image: project_3,
        title: "Weather Dashboard",
        description: "A responsive weather app with location-based forecasts",
        tech: ["React", "OpenWeather API", "lucide-react"],
        github: "https://github.com/manasranjanarukha/Weatherly",
        live: "https://manasranjanarukha.github.io/Weatherly/",
      },
    ],
    experience: [
      {
        company: "Self-Employed / Personal Projects",
        position: "Frontend Web Developer",
        period: "2023 - Present",
        description:
          "Designed and developed multiple web applications, including a responsive business landing page, a collaborative agency portfolio, and a weather dashboard. Utilized React.js, JavaScript (ES6+), Tailwind CSS, and third-party APIs to create visually appealing, mobile-friendly, and functional web experiences.",
      },
      {
        company: "Open Source & Learning Projects",
        position: "Independent Developer",
        period: "2022 - 2023",
        description:
          "Built and deployed hands-on projects to strengthen skills in modern frontend technologies. Gained practical experience in responsive design, component-based architecture, version control (Git), and API integration through self-initiated learning and experimentation.",
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();

          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="logo">Manas Ranjan Arukha</div>

          {/* Desktop Navigation */}
          <ul className="nav-desktop">
            {sections.map((section) => (
              <li
                key={section}
                className={activeSection === section ? "active" : ""}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className="nav-mobile" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <div className="logo">Portfolio</div>
            <X size={24} onClick={() => setIsMenuOpen(false)} />
          </div>
          <ul>
            {sections.map((section) => (
              <li key={section} onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDhAQEBAJEBAJDRYNCAoJDRsICQgWIB0iIiAdHx8kKDQsJCYxJx8fLUctMSs3QzAuIytKTT8uQTQ5LjcBCgoKDg0OGBAQFTcfFx0rKzcrKysuLSsrNysrLTc2NzMzLSszNzctNzc3My8tKzU3KystNysrKystKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUEBgcCAQj/xAA/EAABAwIDBQYDBwMBCQEAAAABAAIDBBEFEiEiMTJBUQYTYXFysUKBkRQzUqHB4fAjJGJDFlNUY4KSotHxFf/EABsBAAEFAQEAAAAAAAAAAAAAAAABAgMEBgUH/8QAKhEAAgICAgEDBAICAwAAAAAAAAECAwQREjEhBUFREyIyYXGRI7EUFYH/2gAMAwEAAhEDEQA/ALNERakwoREQAREQAREQARF8J/dAH1FU1ePwxuLQcxG8M1sq+r7QMe2ze8BO4tsAFXnk1x99suVYNtmvGkbLdAR1C0KoxOTMQJiS3dYWuFC3E5b3DrEfh2bFV/8Anr4Lv/US1+R0RFqMGPSBoJde40B1Uzu0h7v4S8HaHCpFm1sgl6Xcn40bQipsNxxsjdvQj4uRVrFM14u1zT5G6sQtjPplS3HsrepRJERFIQBERABERAEdRwP9B9kSo4H+g+yKOXZYq6JERFIVwiIgAiIgAiL5dDFR8c4DU/NUOL4sSHMYLA7LpFDjuK6kNc3Z0a3iuevitVlqZ3HTvCL3IOyB9Vy8jKcvtj0d/C9PjFKdnfwZUoytLhZwvZ3NVsj3MeHgkxvdrfe0+KmbUuvqCD8TXbnj+ea+MA1aeF/LoqOzraMuqpg7K9vMX8ljULb3vucbeakp5S0FpNw3cfD+X+i8NlDcx6at/NNTF0eqe/d2Pwu0PUL7Mw2Hi3aPRfIX7IH4W5n9CV6dKLEnc0a30Mn8/VLyDQpnFrG3Ni7UdVnUtc6Mgg28eQVPFIXuJO7c3w8VJLMBm6NFgeV05N78DJRTXlG+YPjDZgGusH8ukitlyijriDcE7JDmndZdHwWv76IE8TRaRdTGvcvtl2Z/Pw1X98PxLBERXTlhERAEdRwP9B9kSo4H+g+yKOXZYq6JERFIVwiIgAiIgAqftNiPcQG3FLst5ZepVuVz3tjXd7LZp0h2R5qrlWcIa92X/T6PqWpvpFdJUF2uYNvoXnaJXxkdjmzyO/E7Ndv5LFYBkAv4AAbRWZhuESSHYD9TvXFnJI1cIbJbh1uo+d1kx0xduB8Oa2rAuxh0MpHiAtzpMEhYBZjdPmoHaTqnZyZmFSH4HfS4KiqMKcHBtj1I3G67a2hjHws+lli1WCQvNy1t+o0KarQdBxp+HvA3OsTuHP8AmixamIgWcCButyXchgsRABY3TdpcqqxTsfBKDYW6W0sl+qJ9JnHM9hpppoAq+qe57so3A7m7gt3x3sTLHcx3I6DW61GWB0ZLXDL+L8RUkLERyqZHSuGYM004nLZeyGJ5C8nhJ2hyAWqBwbo0G7uJztlXGFyBgya7WjraAkq1CzT2uytbSpRcZdM6gDz67vFfVDSfds9AvffuUy7sfKMdJabQRESjSOo4H+g+yJUcD/QfZFHLssVdEiIikK4REQAREQBiYrP3cEj/AMLdFzSVhffSwuSXO3uXRe0ABppLkgAA6b960aKE6E8+EdFyc+WpL+DQ+kRX02/2TYVhYe5rbefK66Vg+GMjaNBe30WvdmaW5LrDzG4LcoTYWXFsntmmqgkjJY8BSNmKx2f/ABZDI1DyJ+JIyVSh/wC68RwqUsS7GtHoPXwyD/2vDgoHeKNicT3PlcNQPmtK7T9mY5QXNABO/S62548VjTG4sUnIOJxbEMAdEHOuRl3OBsAq/DIj3gGY3vu5ldU7TUIdTyADXLceC55TxZTqNfDZKuUz2Ur462dMhOy30i69qOA7DfQLeOikWoj0YSf5MIiJwwjqOB/oPsiVHA/0H2RRy7LFXRIiIpCuEREAEREAYONj+2k3cOl9QFpkb7iw3mwvzAW5Y461NIf8fO61DCIc8zG/idrZcX1J6mv4NL6Kt1v+Tfez9IGQtHUXKuWRFQ00YYwXIAaNpztAFiS9pYmEgXIaOI6XXEab6NNFpIvYacrOihWonttC218w66bKmpu3UDjbb8eVkcWheafRt/dKFzP50WJS4ux7QQbg+KnFWE3YvFnvu1HJTlSNqhZRuxSIGxcwE7gTYpexHtGLKyyx5Gqxe9jtxBvutqoZYOiaxyeyirtWkeH1XOqoMMpAAGUnZ911LEKbKwn6LlmLx5KyQW0Ju1T0b2VclLjs3akN42EbiwW8NFMo6dtmNH4WAfkpFr49I8+n+TCIicMI6jgf6D7IlRwP9B9kUcuyxV0SIiKQrhERABERI2ktsdGLk9L3MHG23ppfTdUHYmEyVY00jYXHwW2QiOdr2APaRcMc43jn6rG7CYbkdUPIse97pnMgBZ3NyYXPcTYem4VuMuM/cu8Tgzty8reS12pwZh3n6LacSuG3AutIxCuf3lu7lfc2AJMNNH5kalctSbekdxQSW2YOIYVG3m3/ALrFV0TImu3kH1XUuI4tVRvLAKUN1H9tCHA9NSqydj5IxK5sWZxN2xf05gOtlLxlryR8ob0kbhhdfl0Dr9PBbBTYjpqfNc/waCTZIuQSAL6OK6dT4G3urm98t1XmnstQ1orqrF7AgGxPPotLxV8rnEhx8drUr52jneyVzW5iGmwsqykluR3k0Ud+Tv6hH0T600RWcWZ9HjdZG4D+plboL7bStxwftY/ZEgJudq29UMAAbmYYJ2DidTOzPZ5hXWCyQP5N136bksnrtDIw30zb8QlZJTZ2G4dYjkQuX4/FmrmtA4srT4LqAp2iAtbufa3Nc8eA/FHi2kBNvkFYxY8rIopZ0+FMm/Yvl9RFrjAvsIiIEI6jgf6D7IlRwP8AQfZFHLssVdEiIikK4REQAQDl1Bt9EUlNxtvuzC6hyFuqS/TLOHLjfBv5RnshhigYHuEdgHudvIXrs1lcx7mm4kne5rt2bXevGMYY6eqLA6zXtu2/DZeexoyxGPnBK+N3jZxWPTfk9EaXh+5fTUocFQ4pgjjqw2PlcFbUwqQxAhN0O5aOZS4ZUgkBsR6HLlK8RYLO47RtbkwfqulOpRfcFDNCANBryA3lO8oNo1jB8CDXguF8pvrqVuBiGT5LGpI7HXQ9DvCsXWLbaJEvkJT60c07UYCHOcQ0OD9XN3XWqvw1pZ3V3xZXZ22btMPXquxvpgTZwuHblX1nZiKTl5aahEW0LJRfZyaj7MPEgeye+VlmlkvdyA8uuivsOweqY8OkEZJ3yQcE3mOvit2pOyUTHX1NtwfthXTaIAAWGm62iWUnJaYyMYwe0ypw2N2UZuS1KOiYyoqZi8Zpqp0cEe8kDeV0KVgaP4FoDqNwlMh17973g8hqpsabrmmvlFbMqVtck/h/6MpERbA88YREQIR1HA/0H2RKjgf6D7ImSLFXRIiInlcIiIAL602IPQ6L4iRra0Oi+LTXsbLSk2zOaHt0+zSD72MdPkqHAZstTVx34KpzhyvfVWuF18YiDHuDSw7JduIWvioaMSlLCS2oa03IygkCyyd1DrlJaN7jZcboRe/LN1jlWTHN+yqYH/ustjlUOhrZml91VY7iL4GXjaHPcP6YJyhx6KeauaziIHS+l1U4hjjHNIYzvD0y5wEum0ImovyUlBjuImX+5pGRxndNFMJHD5Kzk7Rlsb3ZZX93ujgbnlf5LWcSbVG7+7nyjcyNpIUOHV7g4DJJe2pcL2KJQ+B0JrXlGw4D2/ZUP7l9PVRG+hnFlvELtFpODzwTPa6UgPYdm5ytK3Fjxa4N9EaaEbi+jNBC8krE+0L4+o0RyG8CGumABJ3NaXHwWt00R+xiR4sX/cg6FoKzcWlLwI2gk1DxFlabOI5/ldRY1O7Kxha1lhcRtN8g3D9VYxIfUuhH97/opeoW/Sx5y/Wv7KpERa8wAREQIR1HA/0H2RKjgf6D7ImSLFXRIiInlcIiIAIiIALAqdmeN/UZR0WesLFG7AdzjcCFUzYc6ZF/021wyIv/AMNqpJLtB8FkCTRUOFVV2jVWL5bBZOS0z0CD2jWe01Y4OJtI4DQhgz2+Sipq6qe0NgglY38cgFOT9dVsdHECS4jedL816rBlBLTu3DkhTSXkOH3bKqKlxK1wyM+U1yPyXtz8Qj1fTvLeZZll/VQf7UCI2f3jfFoztKsqPtZHJo17TfkbtTtxaJNvfsUtRikLyGTROhf/AKcgYYCD5FS4PisjHgB+ZrNHturmqLKhuWQMc128WuVS0uANppbxl+WR18j3GSybvXTGzjt9G5OmuARzFwoJZ7AqIO2QOg08FVY1WWYWjed/gmpbYSfFbMvs/MJqovvs0jSGjk5x09rqLF5c87yNwOVvTRVOEvcIgQXDMNLG1wspaL03Ddf+WXuvBjfV8+Nv+GK6fkIiLrnACIiAI6jgf6D7IlRwP9B9kTJFirokRETyuEREAEREAF8yBxAIuCdR1X1SU33jfz8NFXynqmX8FzAW8iC/aKh0hp3WNyy+yd9lcU9Y17d/l0SupQ6//jzstcqY5IXEgOLb7hqGrJ/kegeYG6UdsosfNR1EJcba25nktaw/GCWnasBqD1P8sst2Pm1rcQs07rFMdbHxtRLiuEsI1LSeemoWJSYC1ozNFxvKhqK551JOpt5qzwnE9LO3DQX3JOLF5IzqGMjkdF7q+JvgvoxaLLe3nbkq3EsYjaLnnuA1KTTHckWT5rBUFY4yvyjW/EeJoC8U1RLUusxtmnc46NCzIKcMuN5vZzuqvYON9WzT6XZyvVc36FO12/CPbGgAAbmiw8F6RFqktLRg223thERKIEREAR1HA/0H2RKjgf6D7ImSLFXRIiInlcIiIAIixMSrmQRmR53cLfieeibKSitsdCLk1FdmPjmLNpo76F79IWdfFWODMkbhAqCSZamUTyvO8tvYDysuZV9W+eUucbmQ2YOTfALuMOHj7B9nA4acMjHQgaLhZWQ7dpdGswMONCTf5e5UxyhzQeo1WJNGNRa4vqOYWPQSkCxvcaEHksmSSxv9fFcR7NKkteSlrMGsc8RIG9zN6pXxva65zEN0s4WcAttlcDqNPyIVZWOP+J57TblSRsfuRSpXaKj/APR3kk68A6fzVeft4y2u6+tgzeVPK0G944rneQCHL1TUgPwtF9/M+ydyQ36ciFla42DQ91zYhou0qyw/A3uOeci29kbdpoVlh1KGjQNHXmCrGwA1N/0Ubn8DlV8nync2N19APDZAVe9/dUgqiXGM1kkVSeLugXnK7y5L5iEhtYfLxWzVmCWwaSmI2pKdz3Do87XureDZKEnJFL1GiFtajJFExwIBBBDhcEagr0tM7KY2W2hlOze0Tj/peHktzWnpuVsdow+TjyonxfQREUxWCIiAI6jgf6D7IlRwP9B9kTJFirokRfLpdPINM+osGsxeCK+eRlx8LTnctbxLtiTdsDbf8yTV30UFmRXDtlmnDtt/GJs+I18cDC55Atwt+J/kuf4tij6h+Z2jW/dxjhYsapqZJDmkc5x6uN7KBcjJy3b4XhGgw8CNH3S8yMrC25qiEH4pmA+O0F+h6cbl+dqB+WWJ3+7la76FfoqEaBVonRNX7R4Z3UvetGxOdQNzHKsdqugVVK2aN0btzhoebT1Wj4hQvgkLHf8AQ74ZAql1entF+i3a0+zCfEeX7qvmBG9Wq8SRgqEsMpCfBZVKD0WUaQX3KaOEBKxD7E4r255Sylo6R80gjYLl3P4WjqUiW2K3peTL7NYX384e4f06Yhzr7nu5BbjWatI6iy9UNEyCIRt+Hidzeeq+TjQroVQ4I5l1nOR+cqpmSeVvJkrm+Wq2fszjl7QykXGkMjvi8Ctdx8WrKi3/ABD7fUrCc62v08FLTdKqW0UsnGjfDjLs6ui59h/aOeKwJztHwyakfNbPh3aOCWwce7d0k3H5rsVZdc/fTM5f6ddV51tfoukXlrgRcEEciDcFfbq0mUWmjxUcD/QfZEqOB/oPsviZLsnq6NQqe2Lte7jYOhec5VNW47US6OkcAd7Y9hqIuDPJsl4cjU1YdMNaiVzn+fivjAiKAs60SXRETRx9af2X6IwSo7ylgk399Axx58kRSwGss4nL5XULJ2Frx6HDiYURO4p+A5NNNGkYjhz4H5XDQ/dyDhesbKiLnTSUtHTg9x2xlXwtREweeoIXPcGsBLnaABbxgeFCnj1sZJPvHch4BEVrHin5KmRJ9Ga8rHqDofJEVxlM/OWLPzVM5/FM8/mVioigYp5XoFESJimZSYjLFwSPb/je7Srqk7VvGkjWvHNzdhyIp4X2QW0yvZiVW/lEtmdo6d7HAlzCWnR4sDoiIrkcubW2c6WBVFtLZ//Z"
            alt="Profile"
            className="profile-image"
          />
          <h1>{portfolioData.name}</h1>
          <h2>{portfolioData.title}</h2>
          <p>{portfolioData.bio}</p>
          <div className="cta">
            <button
              className="cta-button"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
            <button
              className="cta-button"
              onClick={() => scrollToSection("projects")}
            >
              View Project
            </button>
          </div>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img src={aboutImage} alt="About" className="about-image" />
            <div className="about-text">
              <p>
                Hello! I'm {portfolioData.name}, an enthusiastic frontend
                developer passionate about creating beautiful, responsive, and
                user-friendly web applications. While I am at the beginning of
                my professional journey, I have already built two hands-on
                projects using modern JavaScript frameworks like React.js, along
                with a solid foundation in HTML5, CSS3, and responsive design.
              </p>
              <p>
                I enjoy turning ideas into functional, visually appealing
                solutions and am always eager to learn new technologies and keep
                up with industry trends. Outside of coding, I love exploring
                design inspirations, contributing to open-source when I can, and
                brainstorming creative ideas over a cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section alt">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>Frontend Technologies</h3>
              <div className="skill-tags">
                {portfolioData.skills.slice(0, 6).map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-item">
              <h3>Tools & Frameworks</h3>
              <div className="skill-tags">
                {portfolioData.skills.slice(6).map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <img
                    src={project.image || "https://via.placeholder.com/300"}
                    alt={project.title}
                    className="project-image"
                    height={200}
                    width={350}
                    loading="lazy"
                  />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section alt">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-timeline">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-position">{exp.position}</div>
                  <div className="experience-period">{exp.period}</div>
                  <div className="experience-description">
                    {exp.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
            <div className="contact-links">
              <a
                href={`mailto:${portfolioData.email}`}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href={portfolioData.github}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href={portfolioData.linkedin}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
