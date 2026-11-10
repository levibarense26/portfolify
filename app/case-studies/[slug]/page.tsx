import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudyTemplate } from '@/components/case-study-template'
import { caseStudies } from '@/lib/case-studies'

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies[slug]

  if (!caseStudy) return { title: 'Case study | Levi Barense' }

  return {
    title: `${caseStudy.title} | Levi Barense`,
    description: caseStudy.overview,
  }
}

export default async function CaseStudyRoute({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = caseStudies[slug]

  if (!caseStudy) notFound()

  return <CaseStudyTemplate caseStudy={caseStudy} />
}
