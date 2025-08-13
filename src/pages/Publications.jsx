// src/pages/Publications.js
import React, { useState, useEffect } from 'react';

// 새 데이터 구조: type 필드로 International/Domestic 구분, doi 추가
const publicationsData = [
  {
    id: 1,
    type: 'International',
    title: 'Research on Building K-Contents Specialized Text2Image Pipeline',
    authors: 'S Kang, D Lee, S Han, S Lim, N Kim*',
    venue: 'The 27th International Conference on Advanced Communication Technology, Feb. 2025',
    doi: '10.23919/ICACT63878.2025.10936662',
    links: { code: 'https://github.com/user00144/kor_sd' },
  },
  {
    id: 2,
    type: 'International',
    title: 'Research on Memory-efficient Approach to Sleep Quality Estimation for Edge Devices',
    authors: 'S Kang, J Kim, N Kim*',
    venue: 'The 15th International Conference on ICT Convergence, Oct. 2024',
    doi: '10.1109/ICTC62082.2024.10826637',
    links: { code: 'https://github.com/user00144/2024_ETRI_competition' },
  },
  {
    id: 3,
    type: 'International',
    title: 'A Study on User Review text-based Rating prediction system Using Large Language Model Finetuning',
    authors: 'S Kang, N Kim*',
    venue: '19th Asia Pacific International Conference on Information Science and Technology, Jun. 2024',
    links: { code: 'https://github.com/user00144/rating_prediction_LLM' },
  },
  {
    id: 4,
    type: 'Domestic',
    title: 'Research on Building Child Facial Dataset for Child Face De-identification',
    authors: 'S Kang, C Yoo*',
    venue: 'Korean Institute of Information Technology Summer Conference, Jun. 2025',
    links: {},
  },
  {
    id: 5,
    type: 'Domestic',
    title: 'Solving Financial QA in Large Language Models with Recursive Questioning',
    authors: 'S Kang, S Park, G Gweon*',
    venue: 'Annual Symposium of Korea Information Processing Society, May 2025',
    links: { code: 'https://github.com/user00144/cclab_FinRQ' },
  },
  {
    id: 6,
    type: 'Domestic',
    title: 'BELIEVE : Vision-Based Edge Intelligence System for Safety Management on Industrial Environment',
    authors: 'S Kang, E Park, G Park, J Park, K Park, Y Moon, N Kim*',
    venue: 'Korean Institute of Information Technology Summer Conference, May 2024',
    links: { code: 'https://github.com/user00144/BELIEVE' },
  },
  {
    id: 7,
    type: 'Domestic',
    title: 'Using activation function and ko-BERT Research of Click-bait Detection',
    authors: 'S Kang, N Kim*',
    venue: 'Korean Society For Internet Information Spring Conference, Apr. 2024',
    links: { code: 'https://github.com/user00144/fake_news_detection' },
  },
  {
    id: 8,
    type: 'Domestic',
    title: 'Using Raspberry Pi and MNIST Dataset A study on handwriting images classification in an on-device environment',
    authors: 'S Kang, N Kim*',
    venue: 'Korean Society For Internet Information Spring Conference, Apr. 2024',
    links: {},
  },
];

function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPublications(publicationsData);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const renderPublications = (type) => (
    <div className="space-y-10">
      {publications
        .filter((pub) => pub.type === type)
        .map((pub) => (
          <div key={pub.id}>
            <h2 className="text-xl font-semibold text-slate-800">{pub.title}</h2>
            <p className="mt-2 text-slate-600">{pub.authors}</p>
            <p className="mt-1 text-sm text-slate-500 italic">{pub.venue}</p>
            {pub.doi && (
              <p className="mt-1 text-xs text-slate-400">
                DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{pub.doi}</a>
              </p>
            )}
            <div className="mt-3 flex space-x-4">
              {pub.links.pdf && <a href={pub.links.pdf} className="text-blue-600 hover:underline">PDF</a>}
              {pub.links.code && <a href={pub.links.code} className="text-blue-600 hover:underline">Code</a>}
              {pub.links.project && <a href={pub.links.project} className="text-blue-600 hover:underline">Project Page</a>}
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-slate-800 font-serif">Publications</h1>
      <p className="mt-4 text-lg text-slate-600">My research contributions to the field of Artificial Intelligence.</p>

      {publications.length > 0 ? (
        <div className="mt-12 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">International Conferences</h2>
            {renderPublications('International')}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Domestic Conferences (Korean)</h2>
            {renderPublications('Domestic')}
          </section>
        </div>
      ) : (
        <p>Loading publications...</p>
      )}
    </>
  );
}

export default Publications;
