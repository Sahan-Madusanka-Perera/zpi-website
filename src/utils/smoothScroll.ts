/**
 * Smoothly scrolls to a target section when a navigation link is clicked
 * @param e - The click event
 * @param sectionId - The ID of the section to scroll to
 */
export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
  e.preventDefault();
  
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  const offsetTop = section.offsetTop;
  
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
  
  // Update URL without page reload
  history.pushState(null, '', `#${sectionId}`);
}; 