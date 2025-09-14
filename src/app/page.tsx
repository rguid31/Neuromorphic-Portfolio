import { Suspense } from 'react';
import { NeuroCard } from '../components/neuromorphic/NeuroCard';
import { NeuroButton } from '../components/neuromorphic/NeuroButton';

// Sample data - using Ryan's actual information from the master report
const personalData = {
  name: "Ryan Michael Guidry",
  title: "Chemical Engineer & Data Scientist",
  bio: "Highly analytical, methodical, and results-oriented professional leveraging a unique combination of chemical engineering expertise, advanced data analysis skills, and AI augmentation capabilities. Passionate about transforming complex data into actionable insights that drive business decisions.",
  location: "Baton Rouge, Louisiana",
  email: "inquireryan@gmail.com",
  linkedin: "linkedin.com/in/ryanguidry14",
  github: "github.com/rguid31",
  portfolio: "rguidry.dev"
};

const recentProjects = [
  {
    id: 1,
    title: "AI Math Specialist System",
    description: "Developed precision training data generation and model evaluation systems for AI enhancement, implementing rigorous quality control processes that improved model accuracy by establishing robust feedback loops.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Quality Control"],
    status: "Active",
    period: "2024 - Present"
  },
  {
    id: 2,
    title: "AgileOps Implementation Suite",
    description: "Successfully implemented and configured software suites on diverse customer control systems, including Microsoft SQL, MicroStrategy, and MS Server configurations across 1200+ virtual machines.",
    technologies: ["Microsoft SQL", "MicroStrategy", "Windows Server", "WSUS"],
    status: "Completed",
    period: "2022"
  },
  {
    id: 3,
    title: "Process Optimization Analytics",
    description: "Utilized Pi ProcessBook and Pi DataLink to analyze plant data, correlating acid neutralization trends with production costs and creating predictive models for operational efficiency.",
    technologies: ["Pi ProcessBook", "Data Analytics", "Process Engineering", "Statistical Analysis"],
    status: "Completed",
    period: "2017-2018"
  }
];

const coreSkills = [
  {
    category: "Data & Analytics",
    skills: ["Data Analysis", "Statistical Modeling", "AI Augmentation", "Pattern Recognition", "Process Optimization"]
  },
  {
    category: "Technical Systems",
    skills: ["Microsoft SQL", "Windows Server", "System Administration", "Quality Control", "Technical Troubleshooting"]
  },
  {
    category: "Web Development",
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Full-Stack Development"]
  },
  {
    category: "Engineering",
    skills: ["Chemical Engineering", "Process Safety", "Project Development", "Equipment Analysis", "Regulatory Compliance"]
  }
];

// Loading component
function LoadingCard() {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 animate-pulse">
      <div className="h-4 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <NeuroCard className="p-8 md:p-12 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              {personalData.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6">
              {personalData.title}
            </p>
            <div className="w-24 h-1 bg-gray-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {personalData.bio}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NeuroButton size="lg" className="text-lg px-8 py-4">
              View My Work
            </NeuroButton>
            <NeuroButton variant="secondary" size="lg" className="text-lg px-8 py-4">
              Get In Touch
            </NeuroButton>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>📍 {personalData.location}</span>
            <span>•</span>
            <span>✉️ {personalData.email}</span>
            <span>•</span>
            <span>🔗 {personalData.linkedin}</span>
          </div>
        </NeuroCard>
      </div>
    </section>
  );
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <NeuroCard className="p-8 inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Transforming complex challenges into innovative solutions
            </p>
          </NeuroCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <NeuroCard key={project.id} className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-200 text-gray-800 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                  project.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
                <NeuroButton size="sm">Learn More</NeuroButton>
              </div>
            </NeuroCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <NeuroCard className="p-8 inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Core Expertise
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Analytical precision meets technical innovation
            </p>
          </NeuroCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreSkills.map((skillGroup) => (
            <NeuroCard key={skillGroup.category} className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </NeuroCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <NeuroCard className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Collaborate
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to transform your data challenges into actionable insights? 
            Let's discuss how analytical precision can drive your next breakthrough.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NeuroButton size="lg" className="px-8 py-4">
              📧 Send Message
            </NeuroButton>
            <NeuroButton variant="secondary" size="lg" className="px-8 py-4">
              💼 View LinkedIn
            </NeuroButton>
            <NeuroButton variant="secondary" size="lg" className="px-8 py-4">
              🐙 GitHub Profile
            </NeuroButton>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p>Currently available for data science and engineering opportunities</p>
            <p className="font-medium">Baton Rouge, Louisiana • Remote OK</p>
          </div>
        </NeuroCard>
      </div>
    </section>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      <Suspense fallback={<LoadingCard />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingCard />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingCard />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingCard />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}