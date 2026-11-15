'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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

const placeholderProjects: ProjectPlaceholder[] = [
  {
    title: 'Project title coming soon',
    status: 'Case study in progress',
    href: '/case-studies/project-title-coming-soon',
  },
  {
    title: 'Second project coming soon',
    status: 'Project placeholder',
  },
]

const youthAvProject: ProjectPlaceholder = {
  title: 'Codesign with Youth in AV Development',
  status: 'Design research · General Motors',
  href: '/case-studies/codesign-with-youth-in-av-development',
}

const annArborDataProject: ProjectPlaceholder = {
  title: 'Making Data in Downtown Ann Arbor',
  status: 'Urban observation · Data visualization',
  href: '/case-studies/making-data-in-downtown-ann-arbor',
}

const rebarProject: ProjectPlaceholder = {
  title: 'Rebar',
  status: 'Business+Tech Innovation Jam · Ross School of Business',
  href: '/case-studies/rebar-construction-communication',
}

const categories: Category[] = [
  {
    id: 'organizing',
    title: 'Organizing',
    description:
      'Working with others to build community and collectively deciding actions to take together.',
    projects: placeholderProjects,
  },
  {
    id: 'systems-analysis',
    title: 'Systems Analysis',
    description:
      'Systems are what run our world. Understanding them and what makes them inefficient is key to changing them.',
    projects: [rebarProject, ...placeholderProjects],
  },
  {
    id: 'design-research',
    title: 'Design Research',
    description:
      'I enjoy using creative methods to find problems by talking to key stakeholders with diverse experiences.',
    projects: [youthAvProject, annArborDataProject],
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Writing is how my best thoughts get fleshed out. Read a few of my pieces.',
    projects: placeholderProjects,
  },
]

export function PortfolioHome() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const homeControlRef = useRef<HTMLButtonElement>(null)
  const panelHeadingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (activeCategory) panelHeadingRef.current?.focus({ preventScroll: true })
  }, [activeCategory])

  useEffect(() => {
    if (!activeCategory) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveCategory(null)
        window.requestAnimationFrame(() => homeControlRef.current?.focus())
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
    setActiveCategory(null)
    window.requestAnimationFrame(() => homeControlRef.current?.focus())
  }

  return (
    <main className="portfolio-shell">
      <header className="site-bar">
        <button
          className="home-control"
          type="button"
          ref={homeControlRef}
          onClick={closeCategory}
          aria-label="Return to the home page"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M7 4.9c0-.8.9-1.3 1.6-.9l11 6.5a1.7 1.7 0 0 1 0 2.9l-11 6.5c-.7.4-1.6-.1-1.6-.9V4.9Z" />
          </svg>
          <span>Home</span>
        </button>

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
              <div className="overlap-rings" aria-hidden="true">
                <span className="ring ring-one" />
                <span className="ring ring-two" />
              </div>

              <div className="intro-copy">
                <p className="intro-label">Systems thinker · organizer · designer</p>
                <h1 id="home-heading">
                  Levi
                  <br />
                  Barense
                </h1>
                <p className="intro-statement">
                  Finding the overlap between different systemic problems.
                </p>
                <p className="intro-disciplines">
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
                <p className="panel-kicker">Explore</p>
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
                  <p className="panel-kicker">Selected work</p>
                </div>
                <h2 id="panel-heading" ref={panelHeadingRef} tabIndex={-1}>
                  {activeCategory.title}
                </h2>
                <ul className="project-list" aria-label={`${activeCategory.title} projects`}>
                  {activeCategory.projects.map((project) => (
                    <li className="project-row" key={project.title}>
                      <div>
                        <p className="project-status">{project.status}</p>
                        {project.href ? (
                          <Link className="project-link" href={project.href}>
                            <h3>{project.title}</h3>
                          </Link>
                        ) : (
                          <h3>{project.title}</h3>
                        )}
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
