# Adding and Managing Video Content

This document outlines the process for adding and managing video content pages on the website.

## File Structure

Video content is stored in `src/content/videos/` as Markdown (`.md`) files. The videos are organized by categories and rendered using Astro's content collections.

## Required Fields

Each video page requires the following frontmatter fields:

| Field | Description | Example |
|-------|-------------|---------|
| `title` | The title of the video | `"8th Grade Winter Concert 2021"` |
| `description` | A brief description (1-2 sentences) | `"A backstage view of the 8th Grade Band's first concert after COVID..."` |
| `category` | Category identifier (used for routing) | `"student-concerts"` |
| `tags` | Array of related tags | `["8th-grade", "concert-band", "post-pandemic"]` |
| `embedUrl` | Full YouTube iframe embed code | `"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/VIDEO_ID\" ...></iframe>"` |
| `thumbnail` | Path to thumbnail image | `"/images/videos/student-concerts/winter-concert-2021.jpg"` |

## Creating a New Video Page

1. **Create a new Markdown file** in the `src/content/videos/` directory with a specific, descriptive name:
   - Use kebab-case (lowercase with hyphens)
   - Include key identifying information (event, year, ensemble, etc.)
   - Make the filename unique and descriptive of the actual content
   
   **Good examples**:
   - `8th-grade-winter-concert-2021.md`
   - `warmup-techniques-beginning-band.md`
   - `jazz-band-ellington-spring-2023.md`
   - `flute-bach-sonata-performance.md`
   
   **Avoid generic names**:
   - ❌ `student-concert-1.md` (not descriptive)
   - ❌ `classroom-video-2.md` (not specific to content)
   - ❌ `flute-performance.md` (too generic)

2. **Add the required frontmatter** at the top of the file:

```markdown
---
title: "Your Video Title"
description: "A brief description of your video"
category: "category-name" 
tags: ["tag1", "tag2", "tag3"]
embedUrl: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/VIDEO_ID\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
thumbnail: "/images/videos/category-name/your-thumbnail.jpg"
---
```

3. **Write your content** below the frontmatter using Markdown. Consider including:
   - An introduction to the video
   - Sections with headings for organization
   - Relevant timestamps or highlights
   - Teaching reflections or applications

## Getting YouTube Embed Code

1. Go to your YouTube video
2. Click "Share" beneath the video
3. Select "Embed"
4. Customize the embed options if needed
5. Copy the entire `<iframe>...</iframe>` code
6. Paste this code into the `embedUrl` field in your frontmatter

## Adding Thumbnail Images

1. **Prepare your thumbnail image**:
   - Create or capture a high-quality image representing your video content
   - Size recommendation: at least 1280×720px (16:9 aspect ratio)
   - Optimize the image for web (compress without losing too much quality)
   - Use clear, visually appealing images that represent the video content
   - Format options: `.jpg`, `.png`, or `.webp` (jpg recommended for photos)

2. **Name your thumbnail file** following the convention:
   - Use a descriptive name related to the video content
   - Example: `winter-concert-2021.jpg`, `flute-technique-vibrato.jpg`
   - Use kebab-case (lowercase with hyphens) for consistency
   - Match or relate to your markdown filename for consistency
   
3. **Store the image in the correct directory**:
   - Save the image in `public/images/videos/[category-name]/`
   - Create the category directory if it doesn't exist
   - Example paths:
     - `public/images/videos/student-concerts/winter-concert-2021.jpg`
     - `public/images/videos/classroom-videos/recorder-techniques.jpg`
     - `public/images/videos/flute-performances/bach-sonata.jpg`

4. **Reference the image in your markdown file**:
   - Add the thumbnail path to the frontmatter in your video's markdown file
   - Use the format: `/images/videos/[category-name]/filename.jpg`
   - The path should start with `/images/` (without `public/`)
   - Example:
   ```markdown
   ---
   title: "8th Grade Winter Concert 2021"
   // ... other frontmatter
   thumbnail: "/images/videos/student-concerts/winter-concert-2021.jpg"
   ---
   ```

5. **Default behavior**:
   - If no thumbnail is specified or the file is missing, a placeholder image will be used
   - The site will look for the image at the exact path specified
   - Make sure file paths and names match exactly (case-sensitive)

## Video Categories

Categories are used for organization and URL structure. Current categories include:

- `student-concerts`: Performances and concerts by students
- `classroom-videos`: Instructional and pedagogical content
- `flute-performances`: Personal flute performance videos

Adding a new category requires:
1. Creating videos with the new category name in the frontmatter
2. The category will automatically be displayed on the videos page

## Using AI to Create Video Pages

AI can significantly streamline the process of creating video content pages. Here's how to use AI efficiently:

1. **Prepare Your Information**:
   - YouTube video URL
   - Video title
   - Brief description
   - Category name
   - Relevant tags
   - Thumbnail image location (if available)
   - **Specific descriptive filename** for the markdown file

2. **Ask the AI to**:
   - Format the frontmatter with your information
   - Convert the YouTube URL to the proper embed format
   - Generate content sections based on the video type
   - Suggest timestamps or highlights if you provide them

3. **Example Prompt to AI**:
   ```
   Please create a video page for my website with the following information:
   - Title: "Planning Effective Rehearsals"
   - Description: "Strategies for maximizing rehearsal time with middle school bands."
   - YouTube URL: https://www.youtube.com/watch?v=EXAMPLE
   - Category: classroom-videos
   - Tags: rehearsal, planning, middle-school, time-management
   - Key points: Warmups (0:00-3:15), Section rotation (3:16-7:30), Assessment techniques (7:31-12:45)
   - Filename: rehearsal-planning-strategies-middle-school.md
   ```

4. **Review and Edit**:
   - Check the formatting of the embed code
   - Add any personal reflections or additional content
   - Make sure tags are relevant and consistent with your tagging system
   - Verify the filename is descriptive and unique

5. **Save the File**:
   - Save as a new markdown file in the `src/content/videos/` directory
   - Use the descriptive filename you specified

Using AI can help maintain consistency across video pages and save significant time, especially when adding multiple videos.

## Example Video Page

Here's an example of a complete video page:

```markdown
---
title: "8th Grade Winter Concert 2021"
description: "A backstage view of the 8th Grade Band's first concert after COVID, featuring works by Foster, Bernotas, and Grant."
category: "student-concerts"
tags: ["8th-grade", "concert-band", "post-pandemic", "conducting", "middle-school"]
embedUrl: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/zR5Jg0tMwXk?si=9W2_40pHBE6mNfA-\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
thumbnail: "/images/videos/student-concerts/winter-concert-2021.jpg"
---

# 8th Grade Winter Concert 2021

This video captures a backstage perspective of the Lincoln Middle School 8th Grade Band's Winter Concert in December 2021. You'll hear the students performing while I conduct just off stage — a behind-the-scenes look at a milestone moment in our program's return to live music.

## Program and Performance

The 8th Grade Band performed:
- **March of the Scots Guard** by Robert E. Foster
- **Dancing Kites** by Chris Bernotas
- **Chant and Fire Ritual** by Tyler S. Grant

This concert was especially meaningful — not only because of the students' dedication and musical growth, but because it marked their **first performance since the COVID-19 shutdowns**.

## Teaching Reflection

These students were my very first sixth-grade band class as a new teacher, and watching them take the stage again as eighth graders was deeply rewarding. Despite the challenges of remote learning and limited ensemble practice, they showed resilience, musicality, and joy.
```

## How Videos are Displayed

Videos are displayed on two pages:
1. The main videos page at `/music-education/videos`
   - Videos are grouped by category
   - Each category has its own section with a distinct background color
   - Thumbnails are displayed in a grid layout
2. Individual video pages at `/music-education/videos/[category]/[id]`
   - The embedded YouTube video is prominently displayed
   - The markdown content is rendered below the video
   - Navigation back to the main videos page is provided

The URL structure automatically follows the pattern based on the `category` field and the filename of the markdown file. 