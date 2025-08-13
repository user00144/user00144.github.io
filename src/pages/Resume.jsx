import React from 'react';

// Reusable component for each section of the resume for consistency
const ResumeSection = ({ title, children }) => (
  <section>
    <h2 className="text-2xl font-semibold text-slate-800 border-b border-slate-200 pb-2">{title}</h2>
    <div className="mt-6 space-y-8">
      {children}
    </div>
  </section>
);

// Reusable component for individual items like jobs or degrees
const ResumeItem = ({ title, subtitle, details }) => (
  <div>
    <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
    <p className="text-md text-slate-500">{subtitle}</p>
    {details && <div className="mt-2 text-slate-600">{details}</div>}
  </div>
);

// Main component for the Resume page
function Resume() {
  return (
    <>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 font-serif">Resume</h1>
          <p className="mt-4 text-lg text-slate-600">My academic and professional background.</p>
        </div>
        <a 
          href="/CV.pdf" // IMPORTANT: Place your PDF in the `public` folder
          download
          className="bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-sky-700 transition-colors hidden md:inline-block"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-12 space-y-12">
        {/* Education Section */}
        <ResumeSection title="Education">
          {/* <ResumeItem 
            title="Ph.D. in Computer Science"
            subtitle="University of Innovation | 2020 - 2025 (Expected)"
            details={<p>Thesis: "Advancements in Real-Time Data Processing for AI Systems"</p>}
          /> */}
          <ResumeItem 
            title="B.S. in Computer Engineering"
            subtitle="Kyonggi University (Suwon, Republic of Korea) | 2020 - 2026(Expected)"
            details={<p>GPA : 4.38/4.5</p>}
          />
        </ResumeSection>

        {/* Experience Section */}
        <ResumeSection title="Experience">
          {/* <ResumeItem 
            title="Research Intern"
            subtitle="FutureTech AI Labs | Summer 2024"
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>Developed and implemented a novel reinforcement learning algorithm for robotic arm manipulation, improving task completion success rate by 15%.</li>
                <li>Contributed to a large-scale codebase using PyTorch and Docker.</li>
                <li>Co-authored a workshop paper based on internship research.</li>
              </ul>
            }
          /> */}
          <ResumeItem 
            title="Visiting Scholar @ Purdue"
            subtitle="Purdue University(West Lafayette, IN, USA) | Jun. 2025 - Aug. 2025"
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>KAI Purdue Summer Program, sponsored by Korean government(IITP).</li>
                <li>Advisor : <a className="text-sky-600" href = "https://scholar.google.com/citations?user=SY_I6OMAAAAJ&hl=en">Prof. Eric T. Matson</a>, <a className="text-sky-600" href="https://polytechnic.purdue.edu/profile/ahsmith">Anthony H. Smith</a></li>
                <li>Research topic : Mobile Computing, Sensor Based Deep Learning</li>
              </ul>
            }
          />
          <ResumeItem 
            title="Undergraduate Researcher @ Cognitive Computing Lab"
            subtitle="Seoul National University(Seoul, Republic of Korea) | Mar. 2025 - May. 2025"
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>Undergraduate Researcher at <a className="text-sky-600" href = "https://cclab.snu.ac.kr/@home">Cognitive Computing Lab(SNU)</a>.</li>
                <li>Advisor : <a className="text-sky-600" href="https://scholar.google.com/citations?user=l4hK4eEAAAAJ&hl=en">Prof. Gahgene Gweon</a></li>
                <li>Research topic : HCI, QA models, Multimodal Emotion Recognition</li>
              </ul>
            }
          />
        <ResumeItem 
            title="Research Intern @ ETRI Social Robotics Lab"
            subtitle="ETRI(Daejeon, Republic of Korea) | Jan. 2025 - Feb. 2025"
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>Internship at Electronics and Telecommunications Research Institute, Social Robotics Lab.</li>
                <li>Conducted research related to early recognition of children with autism spectrum disorders.</li>
                <li>Research topic : HCI, Image De-Identification, VLMs</li>
              </ul>
            }
          />
          <ResumeItem 
            title="Research Intern @ LOTTE INNOVATE AI Tech. Team"
            subtitle="LOTTE INNOVATE(Seoul, Republic of Korea) | Jul. 2024 - Aug. 2024"
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>Internship at LOTTE INNOVATE, LOTTE.</li>
                <li>Conducted research related to diffusion models for generating images specialized in Korean culture.</li>
                <li>Research topic : Text to Image Generation, CLIP</li>
              </ul>
            }
          />
          <ResumeItem 
            title="Undergraduate Researcher @ Smart IoT Lab"
            subtitle="Kyonggi University(Suwon, Republic of Korea) | Jul. 2023 - Dec. 2024"
            details={
              <ul className="list-disc list-inside space-y-1">
                <li>Undergraduate Researcher at <a className="text-sky-600" href="https://netlab.kyonggi.ac.kr/">Smart IoT Lab(KGU)</a>.</li>
                <li>Advisor : <a className="text-sky-600" href="https://ieeexplore.ieee.org/author/38560111700">Prof. Namgi Kim</a></li>
                <li>Research topic : Mobile Computing, LLMs</li>
              </ul>
            }
          />
        </ResumeSection>
{/* --- NEW SECTION: Awards & Scholarships --- */}
<ResumeSection title="Awards & Scholarships">
  <ResumeItem
    title="Academic Excellence Scholarship (6 Semesters)"
    subtitle="Kyonggi University | Sep. 2020 ~ Mar. 2025"
    details={
      <p>
        Received the Academic Excellence Scholarship for six semesters—
        <strong>Fall 2020, Fall 2023, Spring 2024, Fall 2024, Spring 2025 and Fall 2025</strong>—
        in recognition of consistently outstanding academic performance throughout the undergraduate program.
      </p>
    }
  />
  <ResumeItem
    title="Third (Bronze) Prize - 2025 KIIT Summer Conference"
    subtitle="Korean Institute of Information Technology | Jun. 2025"
    details={<p>Received the Best Paper Award at the KIIT Summer Conference for excellence in research and presentation.</p>}
  />
  <ResumeItem
    title="Third Prize - Advanced Capstone Design Competition"
    subtitle="Kyonggi University | Jun. 2025"
    details={<p>Earned third prize for a creative solution in the university-wide Advanced Capstone Design Competition.</p>}
  />
  <ResumeItem
    title="Excellence Award - Khuthon 2025"
    subtitle="National Center of Excellence in Software | May 2025"
    details={<p>Recognized for outstanding performance and innovation during the Khuthon 2025 hackathon event.</p>}
  />
  <ResumeItem
    title="Second Prize – 2024 Capstone Design & AI Hackathon"
    subtitle="Korean Association of Computer Education | Oct. 2024"
    details={<p>Awarded second prize for an AI-driven capstone project presented during the national AI Hackathon hosted by the Korean Association of Computer Education.</p>}
  />
  <ResumeItem
    title="Second Prize – Basic Capstone Design Competition"
    subtitle="Kyonggi University | Jun. 2024"
    details={<p>Earned second prize for a creative solution in the university-wide Basic Capstone Design Competition.</p>}
  />
  <ResumeItem
    title="First (Gold) Prize - 2024 KIIT Summer Conference"
    subtitle="Korean Institute of Information Technology | May 2024"
    details={<p>Received the Paper Award at the KIIT Summer Conference for excellence in research and presentation.</p>}
  />
</ResumeSection>

{/* --- NEW SECTION: Volunteering & Teaching --- */}
<ResumeSection title="Volunteering & Teaching">
  <ResumeItem
    title="Teaching Assistant, National Center of Excellence in Software"
    subtitle="Kyonggi University | Sep. 2024 - Dec. 2024"
    details={<p>Mentored in various academic and software-related activities.</p>}
  />
  <ResumeItem
    title="Basic Tutoring : Student-to-Student Tutoring"
    subtitle="Kyonggi University | Mar. 2024 - Jun. 2024"
    details={<p>Mentored JAVA Programming, Data Structure.</p>}
  />
  <ResumeItem
    title="SAP-solve it together mentoring"
    subtitle="SAP, JAKorea | Aug. 2023 - Sep. 2023"
    details={<p>Mentored Micro:bit, Arduino.</p>}
  />
  <ResumeItem
    title="2023 Gyonggichango Mentoring"
    subtitle="JAKorea | Jul. 2023 - Aug. 2023"
    details={<p>Mentored Mobile app programming.</p>}
  />
</ResumeSection>


        {/* Skills Section */}
<ResumeSection title="Technical Skills">
  <div>
    <h4 className="font-semibold text-slate-700">Programming Languages</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {['Python', 'Java', 'C', 'C++', 'C#', 'LaTeX'].map(skill => (
        <span key={skill} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
      ))}
    </div>
  </div>
  <div>
    <h4 className="font-semibold text-slate-700">Frameworks & Tools</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {['PyTorch', 'TensorFlow', 'Unity', 'Flutter', 'FastAPI'].map(skill => (
        <span key={skill} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
      ))}
    </div>
  </div>
  <div>
    <h4 className="font-semibold text-slate-700">Systems & DevOps</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {['Linux', 'Docker'].map(skill => (
        <span key={skill} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
      ))}
    </div>
  </div>
</ResumeSection>
      </div>
    </>
  );
}

export default Resume;