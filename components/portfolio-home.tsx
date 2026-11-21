'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { BackToPortfolio } from '@/components/back-to-portfolio'

type ProjectPlaceholder = {
  title: string
  status: string
  href?: string
}

type Category = {
  id: string
  title: string
  description: string
  projects: ProjectPlaceholder[]
}



const youthAvProject: ProjectPlaceholder = {
  title: 'Codesign with Youth in AV Development',
  status: 'Tasked with exploring ‘the Future Autonomous Experience’ with the support of GM, our team used design ethnography and codesign to explore how autonomous vehicles might affect how adolescents develop their independence.',
  href: '/case-studies/codesign-with-youth-in-av-development',
}

const annArborDataProject: ProjectPlaceholder = {
  title: 'Making Data in Downtown Ann Arbor',
  status: 'An urban observation and data visualization project about storefront communication across four downtown Ann Arbor business areas.',
  href: '/case-studies/making-data-in-downtown-ann-arbor',
}

const rebarProject: ProjectPlaceholder = {
  title: 'Rebar',
  status: 'A mock startup developed to fill a gap in communication between contractors and nearby residents  in the current construction system.  Our team identified a problem, ideated upon solutions, and created wireframes for a potential product intervention.',
  href: '/case-studies/rebar-construction-communication',
}

const diningHallProject: ProjectPlaceholder = {
  title: 'Dining Hall Mechanics',
  status: 'Research on how the University of Michigan feeds its campus, from supplier contracts to dining hall operations.',
  href: '/case-studies/dining-hall-mechanics',
}

const categories: Category[] = [
  // {
  //   id: 'organizing',
  //   title: 'Organizing',
  //   description:
  //     'Working with others to build community and collectively deciding actions to take together.',
  //   projects: placeholderProjects,
  // },
  {
    id: 'systems-analysis',
    title: 'Systems Analysis',
    description:
      'Systems are what run our world. Understanding them and what makes them inefficient is key to changing them.',
    projects: [rebarProject, diningHallProject],
  },
  {
    id: 'design-research',
    title: 'Design Research',
    description:
      'I enjoy using creative methods to find problems by talking to key stakeholders with diverse experiences.',
    projects: [youthAvProject, annArborDataProject],
  },
  // {
  //   id: 'writing',
  //   title: 'Writing',
  //   description: 'Writing is how my best thoughts get fleshed out. Read a few of my pieces.',
  //   projects: placeholderProjects,
  // },
]

export function PortfolioHome() {
  const overlapClipId = useId()
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const homeHeadingRef = useRef<HTMLHeadingElement>(null)
  const panelHeadingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (activeCategory) panelHeadingRef.current?.focus({ preventScroll: true })
  }, [activeCategory])

  useEffect(() => {
    if (!activeCategory) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveCategory(null)
        window.requestAnimationFrame(() => homeHeadingRef.current?.focus({ preventScroll: true }))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeCategory])

  function openCategory(category: Category) {
    window.scrollTo(0, 0)
    setMenuOpen(false)
    setActiveCategory(category)
  }

  function closeCategory() {
    setMenuOpen(false)
    setActiveCategory(null)
    window.scrollTo(0, 0)
    window.requestAnimationFrame(() => homeHeadingRef.current?.focus({ preventScroll: true }))
  }

  return (
    <main className="portfolio-shell">
      <header className="site-bar">
        <div className="site-menu-wrap">
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close category menu' : 'Open category menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          {menuOpen && (
            <nav className="quick-menu" aria-label="Portfolio categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => openCategory(category)}
                >
                  {category.title}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <div className="portfolio-stage">
        <section
          className="home-surface"
          aria-label="Portfolio home"
          aria-hidden={Boolean(activeCategory)}
          inert={Boolean(activeCategory)}
        >
          <div className="home-content">
            <section className="intro-section" aria-labelledby="home-heading">
              <svg
                className="overlap-rings"
                viewBox="0 0 100 100"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <clipPath id={overlapClipId}>
                    <circle cx="24" cy="24" r="23.4" />
                  </clipPath>
                </defs>
                <circle
                  cx="32"
                  cy="44"
                  r="23.4"
                  fill="var(--portfolio-green)"
                  clipPath={`url(#${overlapClipId})`}
                />
                <circle className="ring" cx="24" cy="24" r="23.4" />
                <circle className="ring" cx="32" cy="44" r="23.4" />
              </svg>

              <div className="intro-copy">
                <h1 id="home-heading" ref={homeHeadingRef} tabIndex={-1}>
                  Levi
                  <br />
                  Barense
                </h1>
                <p className="disciplines">
                  Finding the overlap between different systemic problems.
                </p>
                <p className="intro-statement">
                  Systems-Thinking,
                  <br />
                  Community Organizing,
                  <br />
                  Design-Thinking and Facilitation
                </p>
              </div>
            </section>

            <nav className="category-list" aria-label="Explore portfolio categories">
              {categories.map((category) => (
                <button
                  className="category-teaser"
                  key={category.id}
                  type="button"
                  aria-controls="category-panel"
                  aria-expanded={activeCategory?.id === category.id}
                  onClick={() => openCategory(category)}
                >
                  <span className="teaser-copy">
                    <span className="teaser-title">{category.title}</span>
                    <span className="teaser-description">{category.description}</span>
                  </span>
                  <span className="teaser-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </section>

        <section
          id="category-panel"
          className="category-panel"
          data-active={Boolean(activeCategory)}
          aria-hidden={!activeCategory}
          inert={!activeCategory}
          aria-labelledby="panel-heading"
        >
          {activeCategory && (
            <div className="panel-content">
              <div className="panel-index">
                <BackToPortfolio
                  onNavigate={(event) => {
                    event.preventDefault()
                    closeCategory()
                  }}
                />
                <nav className="panel-category-list" aria-label="Portfolio categories">
                  {categories.map((category) => (
                    <button
                      className={activeCategory.id === category.id ? 'is-current' : ''}
                      key={category.id}
                      type="button"
                      aria-pressed={activeCategory.id === category.id}
                      onClick={() => openCategory(category)}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="panel-projects" key={activeCategory.id}>
                <div className="panel-heading-row">
              
                </div>
                <h2 id="panel-heading" ref={panelHeadingRef} tabIndex={-1}>
                  {activeCategory.title}
                </h2>
                <ul className="project-list" aria-label={`${activeCategory.title} projects`}>
                  {activeCategory.projects.map((project) => (
                    <li className="project-row" key={project.title}>
                      <div>
                        {project.href ? (
                          <Link className="project-link" href={project.href}>
                            <h3>{project.title}</h3>
                            <span className="teaser-arrow" aria-hidden="true">
                              <svg viewBox="0 0 24 24" fill="none">
                                <path d="M7 17 17 7M8 7h9v9" />
                              </svg>
                            </span>
                          </Link>
                        ) : (
                          <h3>{project.title}</h3>
                        )}
                        <p className="project-status">{project.status}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>

      <footer className="site-footer">
        <span>Levi Barense</span>
        <span>Finding the overlap</span>
      </footer>
    </main>
  )
}
