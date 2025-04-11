/**
 * Services data for animation studio website
 */

// Main animation services
export const animationServices = [
    {
      id: '2d-animation',
      title: '2D Animation',
      icon: 'layers',
      shortDescription: 'Captivating 2D animation with character, style, and movement that brings stories to life.',
      fullDescription: 'Our 2D animation services combine traditional principles with cutting-edge digital techniques. From concept development to final delivery, we create fluid, expressive animations that capture emotions and engage audiences. Whether you need character animation, motion graphics, or explainer videos, our team delivers polished 2D animation with meticulous attention to detail.',
      techniques: [
        {
          name: 'Frame-by-Frame Animation',
          description: 'Traditional hand-drawn animation created frame by frame for maximum expressiveness and artistic control.'
        },
        {
          name: 'Vector Animation',
          description: 'Scalable, clean vector-based animation ideal for character animation and smooth motion.'
        },
        {
          name: 'Cut-Out Animation',
          description: 'Character rigging and puppet-style animation for efficient production of dynamic content.'
        },
        {
          name: 'Rotoscoping',
          description: 'Tracing over live-action footage to create realistic movement and proportions.'
        }
      ],
      process: [
        'Concept Development & Storyboarding',
        'Character & Asset Design',
        'Animatic Development',
        'Animation Production',
        'Sound Integration',
        'Final Compositing & Delivery'
      ],
      portfolioSamples: ['project-2', 'project-6'],
      image: '/assets/images/services/2d-animation.jpg'
    },
    {
      id: '3d-animation',
      title: '3D Animation',
      icon: 'cube',
      shortDescription: 'Immersive 3D animation that brings depth, realism, and dimensional storytelling to any project.',
      fullDescription: 'Our 3D animation services leverage advanced modeling, rigging, and rendering techniques to create cinematic experiences with depth and dimension. From character animation to environmental visualization, our team crafts detailed 3D worlds that engage viewers and communicate complex ideas with visual clarity and emotional impact.',
      techniques: [
        {
          name: 'Character Animation',
          description: 'Expressive character performance with advanced rigging and natural movement.'
        },
        {
          name: 'Environmental Animation',
          description: 'Dynamic scenes with physics simulation, particle effects, and atmospheric elements.'
        },
        {
          name: 'Product Visualization',
          description: 'Photorealistic product animation showcasing features, assembly, and functionality.'
        },
        {
          name: 'Stylized 3D',
          description: 'Non-photorealistic rendering techniques that combine 3D capabilities with artistic style.'
        }
      ],
      process: [
        'Concept Development & Previsualization',
        '3D Modeling & Texture Creation',
        'Rigging & Animation Setup',
        'Animation & Simulation',
        'Lighting & Rendering',
        'Post-Production & Final Delivery'
      ],
      portfolioSamples: ['project-1', 'project-7'],
      image: '/assets/images/services/3d-animation.jpg'
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      icon: 'trending-up',
      shortDescription: 'Dynamic visual storytelling that transforms complex information into engaging visual experiences.',
      fullDescription: 'Our motion graphics services combine graphic design principles with animation techniques to create compelling visual narratives. We specialize in transforming complex data and abstract concepts into clear, engaging visual stories. From corporate explainers to broadcast packages, our motion graphics elevate your message with polished movement, thoughtful typography, and strategic visual hierarchy.',
      techniques: [
        {
            name: 'Kinetic Typography',
            description: 'Dynamic, animated text that enhances messaging through movement and visual emphasis.'
          },
          {
            name: 'Data Visualization',
            description: 'Animated charts, graphs, and infographics that make complex data accessible and engaging.'
          },
          {
            name: 'UI/UX Animation',
            description: 'Animated interface elements that demonstrate functionality and improve user experience.'
          },
          {
            name: 'Brand Animation',
            description: 'Logo animation and brand identity elements that bring company personalities to life.'
          }
        ],
        process: [
          'Concept Development & Storyboarding',
          'Style Frame Design',
          'Animatic Development',
          'Animation Production',
          'Sound Design Integration',
          'Final Delivery & Format Optimization'
        ],
        portfolioSamples: ['project-3', 'project-5', 'project-8'],
        image: '/assets/images/services/motion-graphics.jpg'
      },
      {
        id: 'game-animation',
        title: 'Game Animation',
        icon: 'gamepad',
        shortDescription: 'Interactive animation that brings gameplay to life with responsive character movement and visual effects.',
        fullDescription: 'Our game animation services focus on creating responsive, performance-optimized animations that enhance gameplay while meeting technical requirements. From character movement cycles to cinematic sequences, our team creates game-ready animations that maintain quality within engine constraints while supporting immersive player experiences through fluid movement and visual feedback.',
        techniques: [
          {
            name: 'Character Animation Cycles',
            description: 'Seamless movement loops for player characters and NPCs optimized for game engines.'
          },
          {
            name: 'Combat & Action Animation',
            description: 'Dynamic action sequences with proper anticipation, impact, and follow-through.'
          },
          {
            name: 'Cinematics & Cutscenes',
            description: 'Story-driven animated sequences that advance narrative during gameplay.'
          },
          {
            name: 'VFX Animation',
            description: 'Particle effects, environmental animations, and visual feedback elements.'
          }
        ],
        process: [
          'Game Design Consultation',
          'Character & Asset Rigging',
          'Animation Production',
          'Technical Implementation Support',
          'Performance Optimization',
          'Integration Testing'
        ],
        portfolioSamples: ['project-4'],
        image: '/assets/images/services/game-animation.jpg'
      }
    ];
    
    // Industry-specific animation services
    export const industryServices = [
      {
        id: 'entertainment',
        title: 'Entertainment',
        icon: 'film',
        description: 'From short films to series, we create character-driven animation that captivates audiences with engaging storytelling and visual style.',
        capabilities: [
          'Character Development & Design',
          'Narrative Animation',
          'Broadcast Packages',
          'Title Sequences',
          'Promotional Content'
        ],
        image: '/assets/images/industries/entertainment.jpg'
      },
      {
        id: 'education',
        title: 'Education',
        icon: 'book-open',
        description: 'Clear, engaging animated content that simplifies complex concepts and enhances learning retention through visual storytelling.',
        capabilities: [
          'Educational Series Development',
          'Interactive Learning Modules',
          'Scientific Visualization',
          'Historical Recreations',
          'Concept Explainers'
        ],
        image: '/assets/images/industries/education.jpg'
      },
      {
        id: 'marketing',
        title: 'Marketing',
        icon: 'trending-up',
        description: 'Eye-catching animated content that boosts brand visibility, explains products, and drives audience engagement across platforms.',
        capabilities: [
          'Commercial Animation',
          'Social Media Content',
          'Product Demonstrations',
          'Explainer Videos',
          'Brand Animation'
        ],
        image: '/assets/images/industries/marketing.jpg'
      },
      {
        id: 'gaming',
        title: 'Gaming',
        icon: 'gamepad',
        description: 'Performance-optimized game animations that enhance player experience while meeting technical requirements and enhancing gameplay.',
        capabilities: [
          'Character Animation',
          'Environmental Animation',
          'Cinematic Sequences',
          'VFX Animation',
          'UI/UX Animation'
        ],
        image: '/assets/images/industries/gaming.jpg'
      },
      {
        id: 'corporate',
        title: 'Corporate',
        icon: 'briefcase',
        description: 'Professional animation that communicates company values, explains services, and presents data with clarity and brand consistency.',
        capabilities: [
          'Corporate Explainers',
          'Training Videos',
          'Data Visualization',
          'Internal Communications',
          'Event Content'
        ],
        image: '/assets/images/industries/corporate.jpg'
      },
      {
        id: 'medical',
        title: 'Medical',
        icon: 'heart',
        description: 'Accurate medical animations that visualize procedures, biological processes, and healthcare concepts with scientific precision.',
        capabilities: [
          'Medical Procedure Visualization',
          'Anatomical Animation',
          'Pharmaceutical Mechanism of Action',
          'Patient Education',
          'Medical Device Demonstrations'
        ],
        image: '/assets/images/industries/medical.jpg'
      }
    ];
    
    // Technical expertise areas
    export const technicalExpertise = [
      {
        title: 'Animation Principles',
        skills: ['Timing & Spacing', 'Anticipation & Follow-through', 'Squash & Stretch', 'Staging & Composition']
      },
      {
        title: 'Technical Skills',
        skills: ['Advanced Rigging', 'Particle Systems', 'Physical Simulations', 'Procedural Animation']
      },
      {
        title: 'Software Mastery',
        skills: ['Blender', 'Cinema 4D', 'After Effects', 'Maya', 'Toon Boom Harmony', 'Unity & Unreal Engine']
      },
      {
        title: 'Production Pipeline',
        skills: ['Asset Management', 'Version Control', 'Render Farm Optimization', 'Collaborative Workflows']
      }
    ];
    
    // Animation process steps
    export const animationProcess = [
      {
        id: 'discovery',
        title: 'Discovery',
        icon: 'search',
        description: 'We begin by understanding your goals, audience, and message through collaborative discussions and research.',
        details: 'During this phase, we conduct client interviews, analyze reference materials, and research target audiences to ensure our animation strategy aligns with your objectives.'
      },
      {
        id: 'concept',
        title: 'Concept Development',
        icon: 'lightbulb',
        description: 'Our creative team develops visual concepts, storylines, and character designs that capture your vision.',
        details: 'We create mood boards, style frames, and character sketches to establish the visual direction before moving into full production.'
      },
      {
        id: 'storyboard',
        title: 'Storyboarding',
        icon: 'layout',
        description: 'We map out the visual narrative through detailed storyboards that outline each key moment in the animation.',
        details: 'Storyboards define camera movements, transitions, and scene composition to ensure clear storytelling and efficient production.'
      },
      {
        id: 'animatic',
        title: 'Animatic',
        icon: 'film',
        description: 'A preliminary timing sequence combines storyboards with basic movement to establish pacing and flow.',
        details: 'The animatic serves as a blueprint for the final animation, allowing for timing adjustments and approval before detailed animation begins.'
      },
      {
        id: 'production',
        title: 'Animation Production',
        icon: 'play-circle',
        description: 'Our animation team brings the concept to life, whether through 2D, 3D, or motion graphics techniques.',
        details: 'This core phase involves detailed animation work, from keyframing to in-betweening, rigging to rendering, depending on the project type.'
      },
      {
        id: 'sound',
        title: 'Sound & Music',
        icon: 'music',
        description: 'We integrate voice, sound effects, and music to enhance the emotional impact and clarity of the animation.',
        details: 'Professional sound design creates an immersive audio experience that complements the visual elements and reinforces key messages.'
      },
      {
        id: 'finalization',
        title: 'Finalization',
        icon: 'check-circle',
        description: 'Final revisions, color correction, and rendering produce the completed animation in your required formats.',
        details: 'We optimize the final animation for different platforms and delivery methods, ensuring optimal quality across all intended uses.'
      }
    ];
    
    // Consolidated services data export
    export const servicesData = {
      animationServices,
      industryServices,
      technicalExpertise,
      animationProcess
    };
    
    export default animationServices;