import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Menu, X, Award, GraduationCap, Trophy, AlignCenterVertical as Certificate, Phone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('[data-scroll]').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'Python', percentage: 70 },
  ];

  const certifications = [
    {
      title: 'Java Professional Certificate',
      issuer: 'eBOX',
      date: 'Aug 2024',
      link: "/JAVA.pdf"
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL', 
      date: 'Oct 2024',
      link: "/nptel.pdf"
    },
    {
      title: 'Supervised Machine Learning',
      issuer: 'IBM',
      date: 'Mar 2025', 
      link: "/supervised.pdf"
    }
  ];

  const projects = [
    {
      title: 'Statistical Analysis of IMDB Movie Ratings and Reviews',
      description: 'IMDB Movie Rating Analysis examines patterns and trends in movie ratings, helping to identify factors that influence audience and critic scores. 🎬📊',
      objectives: 'To analyze movie rating patterns, identify key factors affecting ratings, and provide insights for film industry stakeholders.',
      technologiesUsed: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      keyTakeaways: 'Discovered that genre and director significantly impact ratings; visualizations revealed trends in audience preferences over time.',
      image: 'https://mediaindia.eu/wp-content/uploads/2022/09/png_20220925_215820_0000-e1664192564158-1200x896.png',
      github: 'https://github.com/v-vishwanth/IMDB-Movie-raing'
    },
    {
      title: 'Real-Time Smile Recognition and Auto-Capture System',
      description: 'The Auto Capture Smile Detection project is a Python-based application that detects smiles in real-time using a webcam and automatically captures an image when a smile is detected.',
      objectives: 'To develop a real-time smile detection system using computer vision techniques for automated photography.',
      technologiesUsed: ['Python', 'OpenCV', 'Haar Cascade Classifiers'],
      keyTakeaways: 'Achieved reliable smile detection with low latency; learned optimization techniques for real-time image processing.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnNE4yTOe43SU0USvUeq2jWfhrjBGt5zrwg&s',
      github: 'https://github.com/v-vishwanth/Auto-Capture-Selfie-By-Detecting-Smile-using-python-'
    },
    {
      title: 'Automotive Sales Analysis',
      description: 'The Automotive Sales Analysis EDA project aims to analyze historical sales data of automobiles to uncover patterns, trends, and insights that can help businesses make data-driven decisions.',
      objectives: 'To explore automotive sales data, identify sales trends, and provide actionable insights for business strategy.',
      technologiesUsed: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Sklearn'],
      keyTakeaways: 'Identified seasonal sales patterns and key factors driving sales; interactive dashboards improved stakeholder decision-making.',
      image: 'https://media.istockphoto.com/id/1433272458/vector/man-character-buying-or-renting-car-and-signing-auto-insurance-policy-form-insurance-agent.jpg?s=612x612&w=0&k=20&c=kxPJaxi5iaZcU9BKZLYzojknXrqup-ng73uVKsDZhnE=',
      github: 'https://github.com/v-vishwanth/EDA_project'
    },
  ];

  const achievements = [
    {
      title: 'Top 10% in Code-A-Haunt Hackathon',
      description: 'Designed an EDA of Disease Prediction by our team.',
      year: '2025'
    },

    {
    "title": "HackerRank Java Coding",
    "description": "Earned a Silver Badge in Java Coding on HackerRank.",
    "year": "2024"
    },

    {
      title: 'Chess Player',
      description: '3rd Place in Chess Club organized by cluster sports',
      year: '2022'
    }
    
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University',
      year: '2022-2026',
      grade: ''
    },
    {
      degree: 'Intermediate',
      field: 'MPC-State Board',
      institution: 'Narayana Junior College',
      year: '2020-2022',
      grade: '91 %'
    },
    {
      degree: 'Matriculation',
      field: 'CBSE',
      institution: 'Candor Shrine School',
      year: '2019-2020',
      grade: '77 %'
    }
  ];

  const contactInfo = {
    email: 'jaswinkatakam887@gmail.com',
    phone: '+91 6300890683'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Portfolio</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#certifications" className="text-gray-600 hover:text-gray-900">Certifications</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#achievements" className="text-gray-600 hover:text-gray-900">Achievements</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a
                href="/JaswinCV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt PTO-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#certifications" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Certifications</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#achievements" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Achievements</a>
              <a href="#education" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Education</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
              <a
                href="/JaswinCV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white bg-blue-600 rounded-md mx-3 text-center font-medium hover:bg-blue-700"
              >
                My Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-center" data-scroll>
      
      <div className="w-full md:w-4/5 lg:w-3/4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight text-center md:text-left">
          Hi, I'm <span className="text-blue-600">Katakam Jaswin</span>
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          I'm an <span className="font-semibold text-gray-900">aspiring Machine Learning Engineer</span> driven by a passion for intelligent systems and real-world problem solving. With a strong academic foundation in <span className="font-semibold text-gray-900">mathematics, statistics, and computer science</span>, I specialize in designing, training, and deploying models using tools like <span className="font-semibold text-gray-900">Python, TensorFlow, PyTorch</span>, and <span className="font-semibold text-gray-900">scikit-learn</span>. My experience spans key machine learning domains including <span className="font-semibold text-gray-900">computer vision, natural language processing</span>, and <span className="font-semibold text-gray-900">time series forecasting</span>. I'm particularly enthusiastic about transforming data into actionable insights, contributing to open-source projects, and staying on the cutting edge of AI through continuous learning and collaboration.
        </p>
        
        <div className="flex justify-center md:justify-start space-x-5 mt-6">
          <a
            href="https://github.com/jaswin12"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jaswin-katakam-776b32265/"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" data-scroll>Skill-Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" data-scroll>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Programming Languages</h3>
              <div className="space-y-4">
                {[
                  { name: "C", percentage: 80 },
                  { name: "Java", percentage: 90 },
                  { name: "Python", percentage: 95 },
                  { name: "SQL", percentage: 83 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-600 font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r bg-green-700 transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" data-scroll>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frameworks & Libraries</h3>
              <div className="space-y-4">
                {[
                  { name: "HTML", percentage: 90 },
                  { name: "CSS", percentage: 80 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-600 font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r bg-green-700 transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300" data-scroll>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Tools & Technologies</h3>
              <div className="space-y-4">
                {[
                  { name: "PowerBI", percentage: 75 },
                  { name: "Tableau", percentage: 95 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-600 font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r bg-green-700 transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
                <Certificate className="text-blue-600 mb-4" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 mb-4">{cert.date}</p>
                <a href={cert.link} className="text-blue-600 hover:text-blue-700 font-medium">
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Description:</span> {project.description}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Objectives:</span> {project.objectives}</p>
                  <p className="text-gray-600 mb-2"><span className="font-semibold">Technologies Used:</span> {project.technologiesUsed.join(', ')}</p>
                  <p className="text-gray-600 mb-4"><span className="font-semibold">Key Takeaways:</span> {project.keyTakeaways}</p>
                  <a
                    href={project.github}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
                <Trophy className="text-blue-600 mb-4" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-2">{achievement.description}</p>
                <span className="text-blue-600 font-medium">{achievement.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" data-scroll>
                <div className="flex items-start">
                  <GraduationCap className="text-blue-600 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.field}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-500">{edu.year}</span>
                      <span className="text-blue-600 font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-scroll>Contact Me</h2>
          <div className="max-w-lg mx-auto" data-scroll>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <Mail size={24} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-blue-600 font-medium">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <Phone size={24} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-blue-600 font-medium">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;