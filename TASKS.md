# Task List: Kling AI Landing Page Clone

This project is broken down into the following tasks for the Coder. Please tackle them sequentially.

## Phase 1: Project Setup

### Task 1.1: Initialize Next.js Project
-   **Description:** Use `create-next-app` to initialize a new Next.js project with the App Router.
-   **Acceptance Criteria:** A blank Next.js project is running locally.

### Task 1.2: Install and Configure Dependencies
-   **Description:** Install and configure the necessary libraries.
    -   `npm install tailwindcss postcss autoprefixer` and follow the official guide to integrate it with Next.js.
    -   `npm install gsap` for animations.
    -   `npm install @gsap/react` for easier React integration.
-   **Acceptance Criteria:** Tailwind CSS is working, and GSAP is installed. The project structure matches the one defined in `ARCHITECTURE.md`.

## Phase 2: Static Components

### Task 2.1: Implement Header
-   **Component:** `src/app/components/Header.jsx`
-   **Description:** Create the static layout for the header, including the logo and navigation links. Make it responsive.
-   **Assets:** Logo image needs to be added to `/public/images`.

### Task 2.2: Implement Footer
-   **Component:** `src/app/components/Footer.jsx`
-   **Description:** Create the static layout for the footer.
-   **Acceptance Criteria:** The header and footer are styled correctly and are responsive.

## Phase 3: Core Sections & Animations

### Task 3.1: Implement Hero Section Layout & Video
-   **Component:** `src/app/components/HeroSection.jsx`
-   **Description:**
    -   Create the HTML/JSX structure for the Hero section.
    -   Embed the background video, ensuring it autoplays, is muted, and loops correctly. The video should cover the entire section.
    -   Style the text content over the video.
-   **Assets:** Download the hero video from the original site and place it in `/public/videos`.
-   **Acceptance Criteria:** The section is laid out correctly with the video playing in the background.

### Task 3.2: Implement Hero Section GSAP Animation
-   **Component:** `src/app/components/HeroSection.jsx`
-   **Description:** This is the most complex task.
    -   Use the `useGSAP` hook from `@gsap/react`.
    -   Create a GSAP timeline to animate the text elements in sequence, replicating the effects from the original site (fading, scaling, revealing).
    -   Pay close attention to timing and easing to make it feel smooth.
-   **Acceptance Criteria:** The text animation in the Hero section matches the original site.

### Task 3.3: Implement Other Static Sections
-   **Components:** `CinematicSection.jsx`, `PhysicsSection.jsx`, `ConceptSection.jsx`, etc.
-   **Description:**
    -   Create the layout and styling for all the remaining sections of the page *without* scroll animations first.
    -   Focus on making them look accurate and responsive.
-   **Assets:** Download all necessary video and image assets.
-   **Acceptance Criteria:** All sections are visually identical to the original site on all screen sizes, but without animations.

### Task 3.4: Implement Scroll-Triggered Animations
-   **Components:** All sections except Hero, Header, and Footer.
-   **Description:**
    -   Use the Intersection Observer API (either directly or via a library like `react-intersection-observer`) to detect when a section enters the viewport.
    -   When a section is visible, apply a simple fade-in or slide-in animation. This can be done with CSS transitions or a simple GSAP animation.
-   **Acceptance Criteria:** All sections have a subtle entrance animation as the user scrolls down the page.

## Phase 4: Finalization

### Task 4.1: Final Review and Optimization
-   **Description:**
    -   Review the entire page for any visual inconsistencies.
    -   Check for performance issues, especially video loading and animation smoothness.
    -   Ensure the site is perfectly responsive across a range of devices.
-   **Acceptance Criteria:** The cloned site is a pixel-perfect, performant replica of the original.
