import React from 'react';
import profile from '../assets/imgs/home/profile.jpg'

// Icon components - using inline SVGs for portability
const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const GraduationCapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

// Mock data for recent news
const newsData = [
    // {
    //   date: 'August 2025',
    //   description: 'NeurIPS 2025 학회에서 효율적인 데이터 스트림 분석에 대한 최신 연구를 발표할 예정입니다.',
    //   link: {
    //     url: '/publications',
    //     text: '더 알아보기'
    //   }
    // },
    {
      date: 'June 2025',
      description: 'I was selected for the KAI Purdue Summer Program sponsored by the Korean government (IITP).',
      link: null
    },
];

// This component serves as the main landing page for the portfolio.
function Home() {
  return (
    <>
      {/* Hero Section with profile picture and introduction */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <img 
            src={profile} 
            alt="Seungeun Kang" 
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/160x160/cccccc/ffffff?text=Error'; }}
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif">
            Seungeun Kang
          </h1>
          <p className="mt-2 text-lg text-sky-600 font-medium">
            Undergraduate Student in Computer Science
          </p>
          <p className="mt-4 max-w-2xl text-slate-600">
            <strong>Greetings! Welcome to my space where technology meets human experience.</strong> My research focuses on Human-Computer Interaction(HCI) with LLMs and Mobile Computing to create AI systems that adapt seamlessly to people’s lives. With experiences at <a className="text-sky-600 underline" href="https://www.purdue.edu/">Purdue University</a>, <a className="text-sky-600 underline" href="https://convergence.snu.ac.kr/">Seoul National University</a>, <a className="text-sky-600 underline" href="https://www.etri.re.kr/intro.html">ETRI</a> and <a className="text-sky-600 underline" href="https://www.lotteinnovate.com/en">LOTTE INNOVATE</a>, I strive to turn innovative ideas into real-world solutions. Feel free to explore my CV and projects to learn more about this journey.
          </p>
        </div>
      </div>

      {/* Recent News Section */}
      <div className="mt-16 md:mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800 font-serif border-b pb-2">Recent News</h2>
        <div className="mt-6 space-y-6">
          {newsData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="flex-shrink-0 md:w-32 text-slate-500 font-medium">{item.date}</div>
              <div className="flex-grow">
                <p className="text-slate-700">{item.description}</p>
                {item.link && (
                  <a href={item.link.url} className="text-sky-600 hover:text-sky-700 font-semibold mt-1 inline-block">
                    {item.link.text} &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact & Links Section */}
      <div className="mt-16 md:mt-20">
         <h2 className="text-3xl font-bold tracking-tight text-slate-800 font-serif border-b pb-2">Contact & Links</h2>
         <div className="mt-6 flex flex-wrap gap-4">
            <a href="mailto:haun620@kyonggi.ac.kr" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                <MailIcon className="w-5 h-5" />
                <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/seungeun-kang-8556202b3/" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                <LinkedinIcon className="w-5 h-5" />
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/user00144" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                <GithubIcon className="w-5 h-5" />
                <span>GitHub</span>
            </a>
             {/* <a href="#" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition-colors">
                <GraduationCapIcon className="w-5 h-5" />
                <span>Google Scholar</span>
            </a> */}
         </div>
      </div>
    </>
  );
}

export default Home;
