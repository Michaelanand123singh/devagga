/**
 * Team member data for animation studio website
 */
const teamData = [
    {
      id: 'alex-rodriguez',
      name: 'Alex Rodriguez',
      position: 'Creative Director',
      image: '/assets/images/team/alex-rodriguez.jpg',
      bio: 'With over 15 years of experience in animation and visual storytelling, Alex leads our creative team with vision and expertise. Previously worked at Pixar and DreamWorks, bringing Hollywood-level quality standards to every project.',
      expertise: ['Character Animation', 'Narrative Design', 'Visual Development'],
      education: 'MFA in Animation, California Institute of the Arts',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/alex-rodriguez',
        twitter: 'https://twitter.com/alexrodriguez',
        artstation: 'https://artstation.com/alexrodriguez'
      },
      featured: true
    },
    {
      id: 'maya-patel',
      name: 'Maya Patel',
      position: 'Lead 3D Animator',
      image: '/assets/images/team/maya-patel.jpg',
      bio: 'Maya specializes in creating captivating 3D character animation with emotional depth and technical precision. Her background in both traditional art and computer science gives her a unique approach to animation challenges.',
      expertise: ['3D Character Animation', 'Rigging', 'Facial Animation'],
      education: 'BS in Computer Animation, Ringling College of Art and Design',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/maya-patel',
        artstation: 'https://artstation.com/mayapatel'
      },
      featured: true
    },
    {
      id: 'david-chen',
      name: 'David Chen',
      position: 'Motion Graphics Director',
      image: '/assets/images/team/david-chen.jpg',
      bio: 'David transforms complex information into clear, compelling visual stories through innovative motion graphics. His background in graphic design and animation allows him to create visually striking work with strategic communication goals.',
      expertise: ['Motion Graphics', 'Visual Effects', 'Typography Animation'],
      education: 'BFA in Graphic Design, Rhode Island School of Design',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/david-chen',
        behance: 'https://behance.net/davidchen',
        vimeo: 'https://vimeo.com/davidchen'
      },
      featured: true
    },
    {
      id: 'sophia-kim',
      name: 'Sophia Kim',
      position: '2D Animation Lead',
      image: '/assets/images/team/sophia-kim.jpg',
      bio: 'Sophia brings characters to life through expressive 2D animation, combining traditional principles with digital tools. Her background in illustration and animation gives her work a distinctive artistic quality with strong storytelling emphasis.',
      expertise: ['2D Character Animation', 'Storyboarding', 'Visual Development'],
      education: 'BFA in Animation, School of Visual Arts',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/sophia-kim',
        instagram: 'https://instagram.com/sophia.animates',
        tumblr: 'https://sophiakim.tumblr.com'
      },
      featured: true
    },
    {
      id: 'marcus-johnson',
      name: 'Marcus Johnson',
      position: 'Technical Director',
      image: '/assets/images/team/marcus-johnson.jpg',
      bio: 'Marcus oversees the technical aspects of our animation pipeline, developing custom tools and solving complex technical challenges. His expertise in programming and animation creates efficient workflows that enhance creative possibilities.',
      expertise: ['Pipeline Development', 'Scripting & Automation', 'Technical Problem-Solving'],
      education: 'MS in Computer Science, Georgia Institute of Technology',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/marcus-johnson',
        github: 'https://github.com/marcusjohnson'
      },
      featured: false
    },
    {
      id: 'elena-santos',
      name: 'Elena Santos',
      position: 'Art Director',
      image: '/assets/images/team/elena-santos.jpg',
      bio: 'Elena establishes the visual direction for projects, ensuring cohesive and impactful design across all elements. Her background in fine art and design allows her to create distinctive visual styles tailored to each project\'s needs.',
      expertise: ['Visual Development', 'Color Theory', 'Environmental Design'],
      education: 'MFA in Illustration, Savannah College of Art and Design',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/elena-santos',
        behance: 'https://behance.net/elenasantos',
        instagram: 'https://instagram.com/elena.creates'
      },
      featured: false
    },
    {
      id: 'james-thompson',
      name: 'James Thompson',
      position: 'Animation Producer',
      image: '/assets/images/team/james-thompson.jpg',
      bio: 'James manages project workflows, timelines, and client communications, ensuring smooth production processes. His background in both animation production and project management brings valuable perspective to complex projects.',
      expertise: ['Production Management', 'Client Relations', 'Team Coordination'],
      education: 'MBA, University of Southern California; BA in Film Production, NYU',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/james-thompson'
      },
      featured: false
    },
    {
      id: 'aisha-williams',
      name: 'Aisha Williams',
      position: 'Character Designer',
      image: '/assets/images/team/aisha-williams.jpg',
      bio: 'Aisha creates memorable, expressive characters that capture personalities and emotions. Her illustration background and understanding of animation requirements result in characters that are both visually striking and animation-friendly.',
      expertise: ['Character Design', 'Concept Art', 'Illustration'],
      education: 'BFA in Illustration, Maryland Institute College of Art',
      socialMedia: {
        linkedin: 'https://linkedin.com/in/aisha-williams',
        instagram: 'https://instagram.com/aisha.draws',
        artstation: 'https://artstation.com/aishawilliams'
      },
      featured: false
    }
  ];
  
// Get featured team members
export const getFeaturedTeamMembers = () => {
  return teamData.filter(member => member.featured);
};

// Get team member by ID
export const getTeamMemberById = (id) => {
  return teamData.find(member => member.id === id);
};

// Get team expertise areas
export const getExpertiseAreas = () => {
  const allExpertise = teamData.flatMap(member => member.expertise);
  const uniqueExpertise = [...new Set(allExpertise)];
  return uniqueExpertise.sort();
};

// Export teamData as a named export
export { teamData };

// Also export as default for backward compatibility
export default teamData;