import React, { useState } from 'react';

// Import local images so the build system can process them
import uswdImage from '../assets/imgs/projects/uswd/detail.jpg';
import sorivisionImage from '../assets/imgs/projects/sorivision/detail.jpg';
import piggoImage from '../assets/imgs/projects/piggo/detail.jpg';
import deeptectorImage from '../assets/imgs/projects/deeptector/detail.jpg';
import etriImage from '../assets/imgs/projects/etrihuman/project.jpg';
import believeImage from '../assets/imgs/projects/believe/project.jpg';


const projectsData = [
  {
    id: 1,
    title: 'UWD-Net',
    shortDescription: 'UWD-Net : Ultrasonic Based Wildlife Detection Network',
    longDescription: 'UWD-Net is an ultrasonic-based wildlife detection system that aims to provide a lightweight and cost-effective alternative to vision-based methods. It addresses limitations of existing solutions like high computational resources and poor night-time detection. The project involves emitting and recording 40kHz ultrasonic signals, converting them to time-series data, and using a deep learning model for wildlife classification. The team has developed custom hardware for data collection and a software pipeline for preprocessing and model training, with plans for real-world data collection and paper publication.',
    tags: ['Time Series', 'Sensor Fusion', 'Mobile Computing'],
    imageUrl: uswdImage,
  },
  {
    id: 2,
    title: 'SORIVISION',
    shortDescription: 'SORIVISION : All-in-one solution connecting blind individuals and their loved ones',
    longDescription: 'SORIVISION is a wearable-based assistive system designed to support both visually impaired individuals and their caregivers. It enables real-time location monitoring, emergency alerts, and AI-generated scene descriptions using multimodal GPT-4 and CLOVA TTS technologies. By integrating hardware sensors and mobile applications, SORIVISION enhances daily communication and safety beyond traditional, visually impaired-only solutions. It ultimately aims to create a shared, empathetic, and secure experience for users and their guardians.',
    tags: ['Mobile Computing', 'NLP', 'Wearable Healthcare'],
    imageUrl: sorivisionImage,
  },
  {
    id: 3,
    title: 'PIGGO',
    shortDescription: 'PIGGO : Smart Solution for connectiong livestock farming',
    longDescription: 'PIGGO is a smart livestock platform that integrates various IoT devices, initially prototyped for pig farms. It features an AI-powered pig cough detection system that sends push notifications to prevent the spread of infectious diseases. The platform also provides a real-time disease map, automates feed distribution, and alerts farmers of abnormal temperature changes inside the pigsty. This project was developed during the Khuthon hackathon held from May 9 to 10, 2025.',
    tags: ['IoT', 'Anomaly Detection', 'Mobile Computing'],
    imageUrl: piggoImage,
  },
  {
    id: 4,
    title: 'DEEPTECTOR',
    shortDescription: 'DEEPTECTOR : Vision-based, real-time deepfake detection platform',
    longDescription: 'DEEPTECTOR is a vision-based real-time deepfake detection platform developed for the 2024 Capstone Design and AI Hackerton Competition hosted by the Korean Association of Computer Education. It leverages Vision Transformer-based image classification to swiftly detect and block deepfake images before they are uploaded or stored on the server. The system is designed for proactive filtering, with planned expansions including image search and alert functionalities. The project was completed during the overnight competition held from October 25 to 27, 2024.',
    tags: ['Computer Vision', 'Deepfake Detection', 'Vision Transformer'],
    imageUrl: deeptectorImage,
  },
  {
    id: 5,
    title: 'ETRI Human Understanding AI Paper Challenge 2024',
    shortDescription: 'Sleep quality estimation from lifelog time-series data for a research competition.',
    longDescription: '2024 ETRI Human Understanding AI Paper Challenge was a competitive research event held from May to June 2024, focusing on sleep quality estimation from lifelog time-series data. Our team leveraged the ConvTran deep learning model, applying careful feature selection, normalization, and weighted validation techniques to enhance performance. Among 40 participating teams, we ranked 15th on the public leaderboard. The outcomes of this project were accepted for publication at the 15th International Conference on ICT Convergence (ICTC 2024).',
    tags: ['Time Series', 'Deep Learning', 'Lifelog Analysis', 'Research'],
    imageUrl: etriImage,
  },
  {
    id: 6,
    title: 'BELIEVE',
    shortDescription: 'BELIEVE : Vision-based edge intelligence system for safety management in industrial environments',
    longDescription: 'BELIEVE is a vision-based edge intelligence system developed for industrial safety management as part of the 2024 Basic Capstone Design project. Unlike traditional server-dependent AI systems, BELIEVE enables real-time safety helmet detection directly on edge devices using a YOLOv7 Tiny model. This portable, low-power solution enhances safety in construction and industrial sites without relying on high-performance servers. The project earned the Best Paper Award at the 2024 KIIT Summer Conference and the Excellence Award at the Kyonggi University Capstone Design competition.',
    tags: ['Edge AI', 'Computer Vision', 'Industrial Safety'],
    imageUrl: believeImage,
  }
];

// Main component for the Projects page
function Projects() {
  // State to manage which project is selected to be shown in the modal
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight text-slate-800 font-serif">Projects</h1>
      <p className="mt-4 text-lg text-slate-600">A selection of my academic and personal projects in AI.</p>
      
      {/* Grid container for project cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <div 
            key={project.id} 
            className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
            onClick={() => openModal(project)}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }} />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-slate-800">{project.title}</h2>
              <p className="mt-2 text-slate-600 text-sm">{project.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying detailed project information */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Close modal on backdrop click
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold text-slate-800 font-serif">{selectedProject.title}</h2>
                  <button onClick={closeModal} className="text-slate-500 hover:text-slate-800 text-2xl">&times;</button>
              </div>
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="mt-4 w-full h-64 object-cover rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }} />
              <p className="mt-6 text-slate-600">{selectedProject.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;