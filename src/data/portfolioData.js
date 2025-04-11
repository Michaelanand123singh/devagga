/**
 * Portfolio project data for animation studio website
 */
const portfolioData = [
    {
      id: 'project-1',
      title: 'Space Explorers Series',
      category: '3d-animation',
      tags: ['3D', 'Character Animation', 'Sci-Fi', 'Series'],
      client: 'Cosmic Entertainment',
      image: '/assets/images/portfolio/space-explorers.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      description: 'A series of animated shorts following the adventures of space explorers discovering new planets. Created using cutting-edge 3D animation techniques with detailed character rigging and environmental effects.',
      challenge: 'The project required creating diverse alien environments with unique atmospheric effects while maintaining a cohesive art style across episodes.',
      solution: 'We developed a custom shader library and particle system that allowed us to create varied planetary atmospheres while adhering to the established visual language of the series.',
      testimonial: {
        quote: "DevAgga Studio brought our vision to life with stunning animation that captured the wonder of space exploration. Their technical expertise in 3D environments is unmatched.",
        author: "Maria Chen",
        position: "Creative Director, Cosmic Entertainment"
      },
      featured: true
    },
    {
      id: 'project-2',
      title: 'Forest Guardian',
      category: '2d-animation',
      tags: ['2D', 'Character Animation', 'Fantasy', 'Commercial'],
      client: 'EcoAware',
      image: '/assets/images/portfolio/forest-guardian.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      description: 'A heartwarming 2D animated commercial featuring a magical forest guardian who helps teach children about environmental conservation. Hand-drawn frame by frame animation combined with digital compositing.',
      challenge: 'Balancing whimsical fantasy elements with educational content while maintaining an engaging narrative for young audiences.',
      solution: 'We created a character design workshop with educators to develop a guardian character that embodied both magical qualities and relatable personality traits that resonated with children.',
      testimonial: {
        quote: "The animation quality exceeded our expectations. The Forest Guardian character has become an icon for our educational program, with children immediately recognizing and connecting with the character.",
        author: "Thomas Reed",
        position: "Program Director, EcoAware"
      },
      featured: true
    },
    {
      id: 'project-3',
      title: 'Quantum Mechanics Explained',
      category: 'motion-graphics',
      tags: ['Motion Graphics', 'Educational', 'Science', 'Explainer'],
      client: 'National Science Foundation',
      image: '/assets/images/portfolio/quantum-mechanics.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      description: 'An educational series using motion graphics to explain complex quantum mechanics principles in an accessible way. Combining abstract visualizations with clear explanatory graphics.',
      challenge: 'Visualizing abstract, counter-intuitive quantum concepts in a way that general audiences could understand without oversimplification.',
      solution: 'We collaborated with quantum physicists to develop visual metaphors and progressive learning animations that build conceptual understanding step by step.',
      testimonial: {
        quote: "These animations have revolutionized how we teach quantum mechanics. Concepts that students struggled with for weeks are now grasped in a single session thanks to these brilliant visualizations.",
        author: "Dr. Amelia Wong",
        position: "Physics Professor, National Science Foundation"
      },
      featured: true
    },
    {
      id: 'project-4',
      title: 'RoboRacer',
      category: 'game-animation',
      tags: ['3D', 'Game Animation', 'Racing', 'Character Design'],
      client: 'Velocity Games',
      image: '/assets/images/portfolio/robo-racer.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      description: 'Character and vehicle animations for a futuristic racing game featuring robot competitors. Includes in-game animations, cinematics, and promotional materials.',
      challenge: 'Creating high-quality animations that would perform well within the game engine while maintaining the high-octane feel of futuristic racing.',
      solution: 'We developed an optimized animation pipeline that allowed for dynamic blending between animation states based on in-game physics.',
      testimonial: {
        quote: "The animation team at DevAgga understands game development constraints while delivering stunning visuals. Their character animations brought personality to our robots that players have fallen in love with.",
        author: "Jason Torres",
        position: "Lead Designer, Velocity Games"
      },
      featured: false
    },
    {
      id: 'project-5',
      title: 'Financial Concepts Simplified',
      category: 'motion-graphics',
      tags: ['Motion Graphics', 'Financial', 'Explainer', 'Corporate'],
      client: 'GlobalBank',
      image: '/assets/images/portfolio/financial-concepts.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example5',
      description: 'A series of motion graphic videos explaining complex financial concepts for banking customers. Clean, professional style with engaging visual metaphors.',
      challenge: 'Making dry, complex financial information engaging and understandable for customers with varying levels of financial literacy.',
      solution: 'We created a visual language of consistent metaphors and characters that guide viewers through concepts progressively, with careful attention to pacing and visual reinforcement.',
      testimonial: {
        quote: "Customer comprehension of our investment products increased 45% after implementing these videos. The animations strike a perfect balance between professionalism and accessibility.",
        author: "Sarah Johnson",
        position: "Head of Customer Education, GlobalBank"
      },
      featured: false
    },
    {
      id: 'project-6',
      title: 'Legends of Aetheria',
      category: '2d-animation',
      tags: ['2D', 'Fantasy', 'TV Series', 'Character Animation'],
      client: 'Dreamworld Studios',
      image: '/assets/images/portfolio/legends-aetheria.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example6',
      description: 'Character animation and background design for an epic fantasy animated series. Combines traditional hand-drawn animation with digital effects for a unique visual style.',
      challenge: 'Developing a distinctive animation style that would stand out in the crowded fantasy genre while meeting tight television production schedules.',
      solution: 'We created a hybrid animation pipeline combining hand-drawn keyframes with digital tweening and effects, allowing for artistic expression and production efficiency.',
      testimonial: {
        quote: "DevAgga's animation team brought emotional depth to our characters that we didn't think possible given our production constraints. Their artistic contributions elevated the entire project.",
        author: "Michael Patel",
        position: "Executive Producer, Dreamworld Studios"
      },
      featured: false
    },
    {
      id: 'project-7',
      title: 'Product Assembly Guide',
      category: '3d-animation',
      tags: ['3D', 'Technical', 'Instructional', 'Product'],
      client: 'TechCraft Industries',
      image: '/assets/images/portfolio/product-assembly.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example7',
      description: 'Interactive 3D animation showing step-by-step assembly instructions for consumer electronics. Precisely timed and detailed animations with focus on clarity.',
      challenge: 'Creating technically accurate animations that could be understood by users of varying technical ability, while highlighting safety considerations.',
      solution: 'We developed a modular animation system that allowed for interactive control of the assembly process, with detailed close-ups and multiple viewing angles.',
      testimonial: {
        quote: "Since implementing these interactive assembly guides, our customer support calls have decreased by 60%. The animations are clear, precise, and even elegant.",
        author: "Robert Kim",
        position: "Product Support Manager, TechCraft Industries"
      },
      featured: false
    },
    {
      id: 'project-8',
      title: 'Cellular Biology Visualization',
      category: 'motion-graphics',
      tags: ['Motion Graphics', 'Scientific', 'Medical', 'Educational'],
      client: 'BioMed Research Institute',
      image: '/assets/images/portfolio/cellular-biology.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example8',
      description: 'High-detailed scientific visualizations of cellular processes for medical education. Combines accurate scientific modeling with engaging visual presentation.',
      challenge: 'Balancing scientific accuracy with visual clarity while depicting microscopic processes that involve complex molecular interactions.',
      solution: 'We collaborated with cell biologists to develop scientifically accurate 3D models that could be animated to clearly show processes at different scales and speeds.',
      testimonial: {
        quote: "These visualizations have become essential teaching tools in our medical program. The ability to show dynamic cellular processes has significantly improved student comprehension of complex biological systems.",
        author: "Dr. Emily Nakamura",
        position: "Director of Medical Education, BioMed Research Institute"
      },
      featured: false
    }
  ];
  
  // Categories for filtering the portfolio
  export const portfolioCategories = [
    { id: 'all', name: 'All Projects' },
    { id: '3d-animation', name: '3D Animation' },
    { id: '2d-animation', name: '2D Animation' },
    { id: 'motion-graphics', name: 'Motion Graphics' },
    { id: 'game-animation', name: 'Game Animation' }
  ];
  
  // Filter projects by category
  export const filterProjects = (category) => {
    if (category === 'all') return portfolioData;
    return portfolioData.filter(project => project.category === category);
  };
  
  // Get featured projects
  export const getFeaturedProjects = () => {
    return portfolioData.filter(project => project.featured);
  };
  
  // Get project by ID
  export const getProjectById = (id) => {
    return portfolioData.find(project => project.id === id);
  };
  
  // Export portfolioData as both default export and named export
  export { portfolioData };
  export default portfolioData;