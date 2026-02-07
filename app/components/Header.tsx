'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
        }}>
          <Link href="/" onClick={closeMenu}>
            <Logo size={52} asLink={false} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link href="/" onClick={closeMenu}>Domů</Link>
            <Link href="/sluzby" onClick={closeMenu}>Služby</Link>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
            <Link href="/kontakt" onClick={closeMenu}>Kontakt</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isClient && isMenuOpen && (
        <nav
          className="mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'white',
            zIndex: 200,
            paddingTop: '5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            padding: '2rem',
            fontSize: '1.25rem',
          }}>
            <Link href="/" onClick={closeMenu}>Domů</Link>
            <Link href="/sluzby" onClick={closeMenu}>Služby</Link>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
            <Link href="/kontakt" onClick={closeMenu}>Kontakt</Link>
          </div>
        </nav>
      )}

      {/* Overlay */}
      {isClient && isMenuOpen && (
        <div
          className="nav-overlay"
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 150,
          }}
        />
      )}

      <style jsx>{`
        .desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .mobile-menu-toggle {
          display: none;
        }
        
        .mobile-nav {
          display: none;
        }
        
        .nav-overlay {
          display: none;
        }
        
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: flex !important;
          }
          
          .mobile-nav {
            display: block !important;
          }
          
          .nav-overlay {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}

