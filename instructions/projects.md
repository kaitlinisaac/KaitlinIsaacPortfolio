# Managing Projects

This document outlines the process for adding and updating projects on the website.

## File Structure

Projects are stored in `src/pages/projects/` as Astro (`.astro`) files.

## Adding a New Project

1. Create a new file in the `src/pages/projects/` directory with the format `project-name.astro`
2. Use the following template:

```astro
---
import ProjectLayout from '../../layouts/ProjectLayout.astro';

const projectDetails = {
  title: "Project Title",
  description: "A brief description of the project",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  thumbnail: "/images/projects/thumbnail.jpg",
  featured: false,
  completionDate: "December 2023",
  links: [
    { text: "Live Demo", url: "https://example.com" },
    { text: "GitHub", url: "https://github.com/username/repo" }
  ]
};
---

<ProjectLayout projectDetails={projectDetails}>
  <!-- Project content goes here -->
  <p>Detailed description of your project.</p>
  
  <h2>The Challenge</h2>
  <p>Description of the problem you solved.</p>
  
  <h2>The Process</h2>
  <p>Information about your approach and process.</p>
  
  <h2>Key Learnings</h2>
  <p>What you learned from this project.</p>
  
  <!-- Add images, code samples, or other content as needed -->
  <img src="/images/projects/project-image.jpg" alt="Project screenshot" />
</ProjectLayout>
```

3. Customize the content for your project

## Adding Project Images

1. Place project images in the `public/images/projects/` directory
2. Reference images in your project file using the path `/images/projects/your-image.jpg`

## Updating the Projects Index Page

The main projects page (`src/pages/projects.astro`) automatically displays all projects based on their frontmatter.

To feature a project on the home page, set `featured: true` in the project's details.

## Updating Existing Projects

To update an existing project:

1. Open the project file from `src/pages/projects/`
2. Make your changes to the content or project details
3. Save the file

## Best Practices

- Use high-quality images for project thumbnails (recommended size: 1200×630 pixels)
- Write concise but descriptive project titles and descriptions
- Include relevant skills and technologies used in the project
- Add links to live demos, GitHub repositories, or other relevant resources 