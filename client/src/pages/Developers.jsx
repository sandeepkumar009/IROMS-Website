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
    <div className="developer-card">
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Integrated River and Ocean Modeling System (IROMS)</h1>
    </nav>
  );
};


const Developers = () => {
  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>Welcome to Our Developer Showcase</h1>
        <p>Explore the profiles and projects of our talented developers.</p>
      </header>
      <main className="container">
        <div className="grid">
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
        <h2 className="section-title">Our Collaborators</h2>
        <div className="grid">
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
