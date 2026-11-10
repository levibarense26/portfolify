export type CaseStudyFigure = {
  number: string
  imageAlt: string
  caption: string
  imageSrc?: string
}

export type CaseStudyContent = {
  title: string
  category: string
  teammates: string[]
  course: string
  professor: string
  overview: string
  figures: CaseStudyFigure[]
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
}
