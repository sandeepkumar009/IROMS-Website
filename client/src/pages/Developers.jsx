import React from 'react'
import "./styles.css";

const developers = [
  {
    name: "Dr. B Sridharan",
    bio: "Background in Web Development and React.",
    imgSrc: "devloper_img/sir_photo.jpg",
    link: ""
  },
  {
    name: "Dr. B Sridharan",
    bio: "Specializes in Frontend and UI/UX Design.",
    imgSrc: "devloper_img/sir_photo.jpg",
    link: ""
  },
  {
    name: "Dr. B Sridharan",
    bio: "Expert in Backend Systems and Databases.",
    imgSrc: "devloper_img/sir_photo.jpg",
    link: ""
  }
];

const collaborators = [
  {
    name: "Additional Image 1",
    bio: "Team Collaboration and Management.",
    imgSrc: "devloper_img/sir_photo.jpg",
    link: ""
  },
  {
    name: "Additional Image 2",
    bio: "Software Development and Optimization.",
    imgSrc: "devloper_img/sir_photo.jpg",
    link: ""
  },
  {
    name: "Additional Image 3",
    bio: "Research and Innovation.",
    imgSrc: "devloper_img/sir_photo.jpg",
    link: ""
  },
];


const DeveloperCard = ({ name, bio, imgSrc, link }) => {
  return (
    <div className="developer-card p-1 rounded-xl shadow shadow-neutral-400 flex flex-col items-center">
      <img className='w-[300px] rounded-xl' src={imgSrc} alt={name} />
      <h2 className='text-[25px] mt-[10px]'>{name}</h2>
      <p className='text-[#666] text-[16px] mt-2'>{bio}</p>
      <a className='mt-2 text-[#007bff] font-bold hover:text-[#0056b3] pb-2' href={link} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};



const Developers = () => {
  return (
    <div>
      <header className="header p-[20px] place-items-center">
        <h1 className='text-[28px] text-[#333]'>Welcome to Our Developer Showcase</h1>
        <p className='text-[16px] text-[#666]'>Explore the profiles and projects of our talented developers.</p>
      </header>


      <main className="container w-[95%] max-w-[1200px] m-auto p-[20px] pb-[50px]">
        <div className="flex justify-between pb-10">
          {developers.map((dev, index) => (
            <DeveloperCard
              key={index}
              name={dev.name}
              bio={dev.bio}
              imgSrc={dev.imgSrc}
              link={dev.link}
            />
          ))}
        </div>
        <div className='place-items-center'><h2 className="section-title text-[24px] mb-[40px]" >Our Collaborators</h2></div>
        <div className="flex justify-between">
          {collaborators.map((collab, index) => (
            <DeveloperCard
              key={index}
              name={collab.name}
              bio={collab.bio}
              imgSrc={collab.imgSrc}
              link={collab.link}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Developers
