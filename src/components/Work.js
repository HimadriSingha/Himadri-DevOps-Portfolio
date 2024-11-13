import React from 'react';

function WorkExperience() {
  return (
    <div className="bg-gray-200 w-full md:w-[1280px] mx-auto p-8 rounded-lg shadow-md my-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Work Experience</h2>

      <div className="flex items-start mb-4">
        {/* <div className="flex-shrink-0 mr-4">
          <div className="bg-red-500 w-8 h-8 rounded-full"></div>
        </div> */}
        <div>
          <div className='flex items-center gap-4'>
          <h3 className="text-xl font-bold mb-2">Aravina Infomedia Pvt. Ltd</h3>
          <p className="text-gray-800">- June-2022 to Present, Bhubaneswar, India</p>
          </div>
          <h4 className="text-gray-800 font-bold text-lg">DevOps - Engineer</h4>
        </div>
      </div>

      <ul className="list-disc px-8">
        <li className="text-gray-800">Working as a Jr. DevOps Engineer</li>
        <li className="text-gray-800">Responsible for handling and Managing the CI/CD work and also handles the docker files and scripts for automation</li>
        <li className="text-gray-800">Written Dockerfiles for many services which were used in the organization and also written docker-compose that builds all the images and pushed to Amazon ECR & Azure container registry</li>
        <li className="text-gray-800">Creating snapshots and amazon machine images (AMIs) of the instances for backup and creating clone instances</li>
        <li className="text-gray-800">Created IAC tool i.e,Azure Functions & aws-lambda and have integrated vpc </li>
        <li className="text-gray-800">Managed AWS assets and integrated multiple AWS resources into solutions appropriate for company projects</li>
        <li className="text-gray-800">Knowledge of SonarQube for continuous inspection of Code Quality</li>
        <li className="text-gray-800">Proficient Knowledge of Terraform to automate various manual tasks</li>
        <li className="text-gray-800">Proficient Knowledge of Kubernetes Managed clusters</li>
        <li className="text-gray-800">Managed cognitive services in Azure</li>
      </ul>
    </div>
  );
}

export default WorkExperience;
