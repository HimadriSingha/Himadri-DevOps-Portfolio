import React, { useState, useEffect } from 'react';

const Education = () => {
  const [showEducation, setShowEducation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowEducation(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  const education = [
    {
      title: 'B.Sc Physics Honours',
      class:"Bachelor' Degree",
      institute: 'JAMBESWAR MAHAVIDYALAYA, BALASORE,ODISHA',
      duration: '2018-2021',
      points: [
        'Affiliated with FAKIR MOHAN UNIVERSITY, ODISHA',
        'Completed B.Sc Physics Honours with 71%',
        'Maintained approx. 70% in every semester of college academic',
      ],
    },
    {
      title: 'COUNCIL OF HIGHER SECONDARY EDUCATION(+2)',
      institute: 'JAMBESWAR MAHAVIDYALAYA, BALASORE,ODISHA',
      class:"+2",
      duration: '2016-2018',
      points: [
        'Affiliated with COUNCIL OF HIGHER SECONDARY EDUCATION(+2), ODISHA',
        'The college was mainly focused on the basics of +2 and all UG subjects',
        'Completed my +2 with 58%',
      ],
    },
    {
      title: 'Secondary School',
      class:"Secondary School",
      institute: 'R.C.U.B, BALASORE,ODISHA',
      PassOut: '2016',
      points: [
        'Affiliated with BOARD OF SECONDARY EDUCATION (BSE), ODISHA',
        'The Secondary aims of Maths, English, Science, Social Science, Literature and Languages',
        'Completed my matriculation with 70%',
      ],
    },
  ];

  return (
    <div className="bg-white p-8 w-full md:w-[1280px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>

      <ul className="list-none my-10">
        {education.map((edu, index) => (
          <li key={index} className={`mb-4 ${showEducation ? 'opacity-100' : 'opacity-0'} shadow-md`}>
            <div className="flex items-start h-full">
              <div className="w-36 mr-4 bg-cyan-800 text-white flex flex-col justify-center items-center h-48 p-4">
                <p className="text-white">{edu.duration}</p>
                <h3 className='text-xl font-semibold text-center'>{edu.class}</h3>
              </div>
              <div className='p-4'>
                <h3 className="text-lg font-bold">{edu.title}</h3>
                <p className="text-gray-800">{edu.institute}</p>
                <ul className="list-disc pl-6 mt-2">
                  {edu.points.map((point, i) => (
                    <li key={i} className="text-gray-800">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;