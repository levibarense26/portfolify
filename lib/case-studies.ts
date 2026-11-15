export type CaseStudyFigure = {
  number: string
  imageAlt: string
  caption: string
  imageSrc?: string
  aspectRatio?: string
}

export type CaseStudyContent = {
  title: string
  category: string
  teammates: string[]
  course: string
  professor?: string
  overview: string
  shortDescription?: string
  projectType?: string
  galleryTitle?: string
  galleryNote?: string
  figures: CaseStudyFigure[]
  insights?: CaseStudyFigure[]
}

export const caseStudies: Record<string, CaseStudyContent> = {
  'project-title-coming-soon': {
    title: 'Project title coming soon',
    category: 'Project category',
    teammates: ['Levi Barense', 'Teammate name'],
    course: 'Class name',
    professor: 'Professor name',
    overview:
      'Write a short overview of the project here. Name the challenge, who it affects, and how the team approached it in two or three sentences.',
    figures: [
      {
        number: '01',
        imageAlt: 'Add descriptive alt text for the project image.',
        caption: 'Add a caption explaining what this image shows and why it matters.',
      },
      {
        number: '02',
        imageAlt: 'Add descriptive alt text for the project image.',
        caption: 'Describe the research, map, or process shown in this frame.',
      },
      {
        number: '03',
        imageAlt: 'Add descriptive alt text for the project image.',
        caption: 'Explain the outcome or insight represented by this visual.',
      },
    ],
  },
  'rebar-construction-communication': {
    title: 'Rebar',
    category: 'Business + Tech Innovation',
    teammates: [],
    course: 'Business+Tech Innovation Jam',
    overview:
      'This team project was completed for a Business+Tech Innovation Jam through the Ross School of Business. Competitors are first asked to identify a real problem which entrepreneurship could contribute to solving. Inspired by one of our teammate’s struggles with nearby construction noise, we aimed to create a platform which would enable contractors to inform residents that are affected by construction side effects.',
    shortDescription:
      'A mock startup developed to fill a gap in communication between contractors and nearby residents in the current construction system. Our team identified a problem, ideated upon solutions, and created wireframes for a potential product intervention.',
    galleryTitle: 'Rebar: from problem to product',
    galleryNote:
      'A mock startup concept that connects contractors and nearby residents through timely project updates and feedback.',
    figures: [
      {
        number: '01',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jy9J3CnTvipPLgYE8zPrArt41r0OYy.png',
        imageAlt:
          'Slide titled Developer Pain Points listing manual resident updates, difficult feedback, and trust challenges for small construction firms.',
        caption:
          'Our process began with evaluating the current conditions of the market and identifying the different stakeholders and their priorities.',
        aspectRatio: '16 / 9',
      },
      {
        number: '02',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GSNzxPPRAHWOY18tt8qzvIbpuCnuSM.png',
        imageAlt:
          'Problem mapping diagram connecting resident clarity, developer feedback, and construction timeline visibility.',
        caption:
          'Problem mapping helped our team understand the intersections of the different stakeholders’ opinions and struggles.',
        aspectRatio: '16 / 9',
      },
      {
        number: '03',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OgIz33KSJkRY7AuWpdMORiF5uYNVrm.png',
        imageAlt:
          'Solution slide outlining reduced wasted time, reduced costs, and increased trust and transparency.',
        caption:
          'We mapped potential solutions and ideated potential products that could be designed to alleviate the burdens which construction can create.',
        aspectRatio: '16 / 9',
      },
      {
        number: '04',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XTYnzuZRi5CkF2XegsIIyvSH2kOwUi.png',
        imageAlt:
          'Product demo slide showing Rebar project notifications, a project update feed, and resident feedback.',
        caption:
          'Our team settled on an app that serves as a hub for nearby construction projects. Contractors could alert neighbors of service notices and timeline changes. Residents would be able to give feedback and updates about each project.',
        aspectRatio: '16 / 9',
      },
      {
        number: '05',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y6Bhbuh2ImTRmHGzvWhqHmpK59dvVj.png',
        imageAlt:
          'Alternate product demo view of Rebar with project cards, construction notices, and a resident feedback callout.',
        caption:
          'The Rebar concept brings project notices and updates into one place, making it easier for residents to stay informed and share feedback.',
        aspectRatio: '16 / 9',
      },
      {
        number: '06',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5frkenhkiQbqtfpMFh7KtjfuHKu5kQ.png',
        imageAlt:
          'Rebar closing slide describing communication between developers and residents and a more streamlined, informed construction process.',
        caption:
          'We imagined developers requiring contractors to use Rebar to help build trust and transparency with nearby residents.',
        aspectRatio: '16 / 9',
      },
    ],
  },
  'codesign-with-youth-in-av-development': {
    title: 'Codesign with Youth in AV Development',
    category: 'Design research',
    teammates: ['Levi Barense', 'Amy Boeving', 'Swasti Hiremani', 'Jonah Riddle'],
    course: 'UT 210 Listening: Design Ethnography',
      professor: 'Dr. Sheng Hung Lee',
    overview:
      'In one of two research-based studios that served as introductions to the design component of the Urban Technology degree, our team worked with General Motors to explore how people might use autonomous vehicles (AVs) in the future. We used grounded theory and design ethnography methods to develop findings with our participants. During the semester, our team submitted an abstract to IDSA’s International Design Conference, and our submission was accepted. Once we finished our research, we wrote a research paper that developed insights into design research, codesign, and the social implications of AVs.',
    shortDescription:
      'Tasked with exploring ‘the Future Autonomous Experience’ with the support of GM, our team used design ethnography and codesign to explore how autonomous vehicles might affect how adolescents develop their independence.',
    projectType: 'interviewing, design research, and codesign',
    galleryTitle: 'Project Details',
    galleryNote: 'Interview materials, recruitment, and rapid iteration shaped our research with adolescents and their families.',
    figures: [
      {
        number: '01',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nnhs0dMy63GrfvCmLbSjvO302upZ6W.png',
        imageAlt:
          'Interview visual-assist materials introducing autonomous vehicles through exterior and interior examples and a dashboard design exercise.',
        caption:
          'Following the first round of interviews, we realized that AVs were an unfamiliar topic for participants. To establish a baseline understanding, we created materials to start a conversation about AVs.',
        aspectRatio: '16 / 9',
      },
      {
        number: '02',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cg0AsdDjUBmR3JueLrG4xVRTq6cWVD.png',
        imageAlt:
          'Interview synthesis slide with a parent participant quote and takeaways about location tracking and adolescent independence.',
        caption:
          'We conducted 10 interviews at a rapid pace, iterating and refining our process after each interview.',
        aspectRatio: '16 / 9',
      },
      {
        number: '03',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tiQ8qfOX16Sg918mOpcPEulziQkzwG.png',
        imageAlt:
          'Recruitment flow showing an initial interest email and screening survey with parents, consent, and a request to interview their children.',
        caption:
          'We first recruited parents as initial participants, then gained consent to interview their children.',
        aspectRatio: '16 / 9',
      },
      {
        number: '04',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y6pV3ZU1M5oYN5uepVwbkT3YOV5WkH.png',
        imageAlt:
          'Interview guide for the Future Autonomous Experience study, with an introduction and conversation prompts for adolescents.',
        caption:
          'Interview guides helped us have interesting conversations while still gathering information relevant to the research.',
        aspectRatio: '0.81 / 1',
      },
    ],
    insights: [
      {
        number: '01',
        imageSrc:
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ilA1mpaRQKVT34hfcGcyb8OZ3vDYpi.png',
        imageAlt:
          'Research diagram connecting questions about adolescent autonomy and family dynamics through autonomous vehicle capabilities.',
        caption:
          'Our research explored how autonomous vehicle capabilities might support adolescent independence while shaping family dynamics.',
        aspectRatio: '16 / 9',
      },
    ],
  },
}
