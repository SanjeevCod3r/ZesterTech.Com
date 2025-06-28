import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TeamMember = ({ name, position, bio, image, social }) => {
  return (
    <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-all w-full">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-gray-700"
        />
        <h3 className="text-white text-xl font-bold text-center mb-1">{name}</h3>
        <p className="text-gray-400 text-sm text-center mb-3">{position}</p>
        <p className="text-gray-300 text-sm text-center mb-4">{bio}</p>
        <div className="flex justify-center space-x-4">
          {social.linkedin && (
            <a href={social.linkedin} className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;