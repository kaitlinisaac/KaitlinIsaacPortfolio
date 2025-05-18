# Thumbnail Image Best Practices

This document provides guidance on creating and managing thumbnail images for the website.

## Purpose of Thumbnails

Thumbnail images serve as visual representations of your content that:
- Help users quickly identify and navigate to content they're interested in
- Enhance the visual appeal of content listing pages
- Create a consistent and professional look across the site
- Improve user engagement with your content

## Image Specifications

### Technical Requirements

- **Format**: JPG, PNG, or WebP (JPG recommended for photos, PNG for graphics with transparency)
- **Dimensions**: 1280×720px (16:9 aspect ratio) recommended
- **Resolution**: 72-96 DPI (standard for web)
- **Size**: Optimize to under 200KB per image for fast loading
- **Color space**: RGB (not CMYK)

### Style Guidelines

- **Composition**: Focus on clear, uncluttered visuals that represent the content
- **Quality**: Use high-resolution, well-lit, in-focus images
- **Consistency**: Maintain a consistent style across thumbnail images when possible
- **Text**: Avoid heavy text on thumbnails as it may not be legible in smaller sizes

## Creating Effective Thumbnails

### For Video Content

1. **Frame Selection**: Choose a representative frame from the video that:
   - Shows the main subject clearly
   - Has good lighting and composition
   - Captures an engaging moment

2. **Screenshot Method**:
   - Play the video on YouTube in high-quality mode
   - Pause at the desired moment
   - Take a screenshot (Mac: Shift+Command+4, Windows: Win+Shift+S)
   - Crop to 16:9 aspect ratio if needed

3. **Custom Design Option**:
   - Use tools like Canva or Photoshop to create custom thumbnails
   - Incorporate subtle branding elements (consistent with site design)
   - Can combine high-quality images with minimal text or graphics

### For Other Content

- **Music lessons**: Show instruments, sheet music, or teaching situations
- **Projects**: Display final results or work-in-progress shots
- **Blog posts**: Use relevant imagery that captures the post's main theme

## Directory Structure and Naming

### File Organization

- **Path structure**: `/public/images/videos/[category-name]/[filename].[extension]`
- **Category folders**:
  - `/student-concerts/` - For concert and performance thumbnails
  - `/classroom-videos/` - For teaching and instructional content
  - `/flute-performances/` - For personal performance videos

### Naming Conventions

- Use kebab-case (lowercase with hyphens)
- Include descriptive keywords (e.g., `winter-concert-2021.jpg`)
- Be consistent with naming patterns within categories
- Avoid generic names like `image1.jpg` or `thumbnail.png`

## Optimization Tools

These free tools can help optimize your images for web use:

- [TinyPNG](https://tinypng.com/) - Compresses PNG and JPG without noticeable quality loss
- [Squoosh](https://squoosh.app/) - Browser-based image compression tool
- [Canva](https://www.canva.com/) - Create custom thumbnails with templates
- [Remove.bg](https://www.remove.bg/) - Remove backgrounds from images (for product or instrument photos)

## Implementation in Markdown Files

When adding thumbnails to your content, reference them in the frontmatter:

```markdown
---
title: "Your Content Title"
// ... other frontmatter fields
thumbnail: "/images/videos/category-name/your-image-name.jpg"
---
```

If no thumbnail is specified, a default placeholder image will be used automatically.

## Troubleshooting Common Issues

- **Image not displaying**: Check file path, name, and case sensitivity
- **Distorted image**: Ensure correct aspect ratio (16:9)
- **Low quality**: Use higher resolution source images and optimize appropriately
- **Slow loading**: Compress image files to under 200KB
- **Wrong format**: Ensure you're using web-compatible formats (JPG, PNG, WebP)

By following these guidelines, you'll create a visually cohesive and professional appearance across all content sections of your site. 