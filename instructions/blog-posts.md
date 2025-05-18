# Adding and Managing Blog Posts

This document outlines the process for adding and managing blog posts on the website.

## File Structure

Blog posts are stored in `src/pages/blog/` as Astro (`.astro`) files or Markdown (`.md`) files.

## Creating a New Blog Post

1. Create a new file in the `src/pages/blog/` directory with the format `your-blog-post-title.md` (or `.astro` for more complex posts)
2. Add the required frontmatter at the top of the file:

```markdown
---
layout: ../../layouts/BlogPostLayout.astro
title: Your Blog Post Title
description: A brief description of your blog post
publishDate: 2023-12-31
author: Kaitlin Isaac
tags: [tag1, tag2, tag3]
image: 
  url: /path/to/image.jpg
  alt: Description of the image
---

Your blog post content goes here...
```

3. Write your blog post content below the frontmatter using Markdown

## Adding Images to Blog Posts

1. Place images in the `public/images/blog/` directory
2. Reference images in your blog post using the path `/images/blog/your-image.jpg`

## Updating Existing Blog Posts

To update an existing blog post:

1. Open the blog post file from `src/pages/blog/`
2. Make your changes to the content or frontmatter
3. Save the file

## Publishing Process

After creating or updating a blog post:

1. Preview your changes locally with `npm run dev`
2. Commit your changes to the repository
3. Push to main branch or create a pull request
4. The website will automatically rebuild and deploy with your changes 