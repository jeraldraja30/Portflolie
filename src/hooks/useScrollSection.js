import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for managing scroll-to-section functionality
 * Provides smooth scrolling and active section tracking
 */
export const useScrollSection = () => {
    const [activeSection, setActiveSection] = useState('home')

    // Scroll to a specific section
    const scrollToSection = useCallback((sectionId) => {
        const element = document.querySelector(`[data-section="${sectionId}"]`)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }, [])

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-section]')
            const scrollPosition = window.scrollY + window.innerHeight / 2

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight
                const sectionId = section.getAttribute('data-section')

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId)
                }
            })
        }

        // Debounce scroll events for performance
        let timeoutId
        const debouncedHandleScroll = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(handleScroll, 50)
        }

        window.addEventListener('scroll', debouncedHandleScroll, { passive: true })
        handleScroll() // Initial check

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll)
            clearTimeout(timeoutId)
        }
    }, [])

    return { activeSection, scrollToSection }
}
