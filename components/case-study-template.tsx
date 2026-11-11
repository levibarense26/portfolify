import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudyContent } from '@/lib/case-studies'

type CaseStudyTemplateProps = {
  caseStudy: CaseStudyContent
}

export function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  return (
    <main className="portfolio-shell case-study-shell">
      <header className="site-bar case-study-site-bar">
        <Link className="case-study-back" href="/">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
          </svg>
          <span>Back to portfolio</span>
        </Link>
        <p className="case-study-bar-label">Project notes · 01</p>
      </header>

      <div className="case-study-stage">
        <article className="case-study-content">
          <header className="case-study-hero">
            <p className="case-study-kicker">
              <span className="case-study-kicker-chip">Case study</span>
              <span>{caseStudy.category}</span>
            </p>
            <h1>{caseStudy.title}</h1>
            <p className="case-study-hero-note">
              Project type: <span>{caseStudy.category.toLowerCase()}</span>
            </p>

            <div className="case-study-about-content">
              <ul className="case-study-meta" aria-label="Project details">
                <li aria-label={`Teammates: ${caseStudy.teammates.join(', ')}`}>
                  {caseStudy.teammates.join(', ')}
                </li>
                <li aria-label={`Class: ${caseStudy.course}`}>{caseStudy.course}</li>
                <li aria-label={`Professor: ${caseStudy.professor}`}>{caseStudy.professor}</li>
              </ul>
              <p className="case-study-overview">{caseStudy.overview}</p>
            </div>
          </header>

          <section className="case-study-gallery" aria-labelledby="case-study-gallery-title">
            <div className="case-study-gallery-heading">
              <div className="case-study-section-heading">
                <h2 id="case-study-gallery-title">Selected frames</h2>
              </div>
              <p className="case-study-gallery-note">
                Add project images and update each caption as the story takes shape.
              </p>
            </div>

            <div className="case-study-figure-grid">
              {caseStudy.figures.map((figure, index) => (
                <figure
                  className={`case-study-figure case-study-figure-${index + 1}`}
                  key={figure.number}
                >
                  <div className="case-study-image-frame">
                    {figure.imageSrc ? (
                      <Image
                        className="case-study-image"
                        src={figure.imageSrc}
                        alt={figure.imageAlt}
                        fill
                        sizes="(max-width: 760px) 100vw, 70vw"
                      />
                    ) : (
                      <div className="case-study-image-slot" aria-hidden="true">
                        <span className="case-study-slot-number">Frame {figure.number}</span>
                        <span className="case-study-slot-label">Image frame</span>
                      </div>
                    )}
                  </div>
                  <figcaption>
                    <span>{figure.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="case-study-endmark" aria-hidden="true">
            <span />
            <span />
          </div>
        </article>
      </div>

      <footer className="site-footer">
        <span>Levi Barense</span>
        <span>Finding the overlap</span>
      </footer>
    </main>
  )
}
