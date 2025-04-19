// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  })

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Portfolio modal
  const portfolioLinks = document.querySelectorAll(".portfolio-link")
  const modal = document.querySelector(".portfolio-modal")
  const modalClose = document.querySelector(".modal-close")
  const modalImg = document.querySelector(".modal-img")
  const modalTitle = document.querySelector(".modal-title")
  const modalCategory = document.querySelector(".modal-category")

  portfolioLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const portfolioItem = link.closest(".portfolio-item")
      const imgSrc = portfolioItem.querySelector("img").getAttribute("src")
      const title = portfolioItem.querySelector("h3").textContent
      const category = portfolioItem.querySelector("p").textContent

      // Make sure we're getting the correct image path
      const portfolioImg = portfolioItem.querySelector("img")
      modalImg.setAttribute("src", portfolioImg.getAttribute("src"))
      modalTitle.textContent = title
      modalCategory.textContent = category

      modal.style.display = "flex"
      document.body.style.overflow = "hidden"
    })
  })

  modalClose.addEventListener("click", () => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  })

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".about-content, .timeline-item, .certificate-card, .skill-list-item, .portfolio-item",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate")
      }
    })
  }

  // Add animation class to elements
  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on page load
})
