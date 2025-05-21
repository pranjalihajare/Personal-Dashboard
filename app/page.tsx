import Image from 'next/image';
import { useState } from 'react';

const data = {
  profile: {
    name: 'Pooja Sinha',
    bio: 'Aspiring Data Scientist | Frontend Developer | MERN Stack Enthusiast',
    email: 'pooja@example.com',
    phone: '+91-XXXXXXXXXX'
  },
  academics: [
    { year: '2023', detail: 'B.Tech, ABC University, Gurgaon' },
    { year: '2025', detail: 'Data Science Intern, Analytics Vidhya' }
  ],
  experience: [
    'Virtual Assistant – Executive Assistant at Nagarro',
    'Front-end Development Intern at SALESQUEEN SOFTWARE SOLUTIONS'
  ],
  skills: [
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Python',
    'Machine Learning'
  ],
  extras: {
    goals: 'To become a full-stack developer and build impactful AI-driven web apps.',
    hobbies: 'Reading, Problem Solving, UI Design',
    certifications: ['Goldman Sachs Excel Skills', 'Bloomberg Client Engagement']
  }
};

const tabIcons = {
  profile: '👤',
  academics: '🎓',
  experience: '💼',
  skills: '🛠️',
  extras: '✨'
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Pooja's Dashboard</h1>
        <nav className="flex gap-4">
          {['profile', 'academics', 'experience', 'skills', 'extras'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize px-3 py-1 rounded hover:bg-gray-200 ${activeTab === tab ? 'bg-gray-300 font-semibold' : ''}`}
            >
              <span className="mr-1">{tabIcons[tab]}</span>
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        {activeTab === 'profile' && (
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 relative mb-4">
              {/* <Image
                src="https://res.cloudinary.com/dwdd4ok3n/image/upload/v1716282591/pooja-profile.png"
                alt="Pooja Sinha"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              /> */}
            </div>
            <h2 className="text-2xl font-bold mt-4">{data.profile.name}</h2>
            <p className="text-sm text-gray-600">{data.profile.bio}</p>
            <p className="mt-2">📧 {data.profile.email}</p>
            <p>📞 {data.profile.phone}</p>
          </div>
        )}

        {activeTab === 'academics' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Academic Background</h2>
            <ul className="space-y-2">
              {data.academics.map((item, idx) => (
                <li key={idx} className="bg-white p-4 shadow rounded">
                  <strong>{item.year}</strong> - {item.detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'experience' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <ul className="list-disc list-inside space-y-1">
              {data.experience.map((exp, idx) => (
                <li key={idx}>{exp}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'extras' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Goals</h3>
              <p>{data.extras.goals}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Hobbies</h3>
              <p>{data.extras.hobbies}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Certifications</h3>
              <ul className="list-disc list-inside">
                {data.extras.certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
