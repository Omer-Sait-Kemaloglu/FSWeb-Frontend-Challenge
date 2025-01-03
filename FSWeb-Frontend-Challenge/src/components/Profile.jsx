import React from 'react';
import './Profile.css';
import profileImage from '../assets/javascript.png'; // Profil resmi

const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile-title">Profile</h2> {/* "Profile" başlığı eklendi */}
      <div className="basic-info">
        <h3>Basic Information</h3>
        <p><strong>Name:</strong> Ömer Sait Kemaloğlu</p>
        <p><strong>Email:</strong> omersaitkemaloglu@gmail.com</p>
        <p><strong>Phone:</strong> +90 544 549 83 76</p>
        <p><strong>Location:</strong> Erzurum, Turkey</p>
      </div>
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          I am a passionate Frontend Developer with a keen interest in creating scalable and user-friendly web applications. I have a strong background in computer science and love to solve complex problems.
        </p>
      </div>
    </section>
  );
};

export default Profile;
