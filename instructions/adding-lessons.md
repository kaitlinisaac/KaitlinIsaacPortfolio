# Adding Lessons

This guide explains how to add new lesson content to your site. Lessons are displayed in the "Music Education" section and showcase your educational materials.

## File Structure

Lessons are stored as Markdown files in the `src/content/lessons/` directory:

```
src/
└── content/
    └── lessons/
        └── your-lesson-name.md
```

## Lesson Frontmatter

Each lesson requires the following frontmatter at the top of the file:

```yaml
---
title: "Your Lesson Title"
description: "A concise description of the lesson (1-2 sentences)"
category: "lesson-design"  # Choose an appropriate category
tags: ["tag1", "tag2", "tag3"]  # Related tags
thumbnail: "/images/lessons/thumbnails/your-thumbnail-image.jpeg"  # Path to thumbnail image
embedUrl: "<iframe src=\"...\" frameborder=\"0\" width=\"960\" height=\"569\" allowfullscreen=\"true\"></iframe>"  # Optional embed
---
```

### Required Fields:

- **title**: The title of your lesson
- **description**: A brief description (1-2 sentences)
- **category**: The category this lesson belongs to (e.g., "lesson-design", "music-theory")
- **tags**: Array of relevant tags
- **thumbnail**: Path to the thumbnail image (should be in `/public/images/lessons/thumbnails/`)

### Optional Fields:

- **embedUrl**: Full iframe HTML for embedding content (Google Slides, YouTube, etc.)
- **downloadUrl**: URL to a downloadable resource for this lesson
- **imageUrl**: Additional lesson image (only used if no embedUrl is provided)
- **draft**: Set to `true` to mark as draft (won't be published)

## Lesson Content

After the frontmatter, write your lesson content using Markdown:

```markdown
# Your Lesson Title

Introduction paragraph about your lesson.

## Lesson Context

Information about the context of the lesson, its goals, and implementation.

## Educational Highlights

*   Highlight point 1
*   Highlight point 2
*   Highlight point 3
*   Highlight point 4

## Standards Achieved

*   **Standard 1:** Description of standard
*   **Standard 2:** Description of standard
*   **Standard 3:** Description of standard
```

## Embedding Google Slides

To embed Google Slides:

1. In Google Slides, go to File → Share → Publish to the web
2. Choose "Embed" tab
3. Select your preferred settings
4. Click "Publish" and copy the generated iframe code
5. Add the full iframe HTML to your `embedUrl` frontmatter field:

```yaml
embedUrl: "<iframe src=\"https://docs.google.com/presentation/d/e/YOUR-EMBED-ID/pubembed?start=false&loop=false&delayms=3000\" frameborder=\"0\" width=\"960\" height=\"569\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>"
```

**Important**: Make sure to properly escape quotes with backslashes in your YAML.

## Adding Thumbnails

Lesson thumbnails should be:
- Placed in `/public/images/lessons/thumbnails/`
- Sized at 400x225 pixels (16:9 aspect ratio)
- In JPEG or PNG format
- Named consistently with your lesson file (e.g., `your-lesson-name.jpeg`)

See [thumbnail-images.md](thumbnail-images.md) for more details on image requirements.

## Example Lesson

Here's a complete example of a lesson file:

```markdown
---
title: "Tier List Listening Assignment"
description: "An interactive digital lesson designed to engage students through tier-ranking influential musical works. Students used Google Slides integrated with Schoology, promoting independent critical listening, analysis, and personal engagement with significant pieces of music history."
category: "lesson-design"
tags: ["music-education", "digital-learning", "listening-skills", "student-engagement", "Google-Slides"]
embedUrl: "<iframe src=\"https://docs.google.com/presentation/d/e/EXAMPLE-ID/pubembed?start=false&loop=false&delayms=3000\" frameborder=\"0\" width=\"960\" height=\"569\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>"
thumbnail: "/images/lessons/thumbnails/tier-list-listening-assignment.jpeg"
---

# Tier List Listening Assignment

This lesson leveraged popular "tier-ranking" culture to create a relatable and engaging listening experience. Each slide featured musical excerpts and contextual information about composers and compositions, while embedded questions prompted deeper critical thought. Assignments were easily managed and monitored through integration with Schoology, enabling seamless distribution and student accountability.

## Lesson Context

This lesson leveraged popular "tier-ranking" culture to create a relatable and engaging listening experience. Each slide featured musical excerpts and contextual information about composers and compositions, while embedded questions prompted deeper critical thought. Assignments were easily managed and monitored through integration with Schoology, enabling seamless distribution and student accountability.

## Educational Highlights

*   Enhanced critical listening and evaluation skills.
*   Integrated digital classroom tools for effective assignment management.
*   Promoted student-driven analysis and independent learning.
*   Flexible, expandable design adaptable for future content.

## Virginia Music Standards Achieved

*   **MIB.3 (MS Beginning):** Analyze, interpret, and evaluate music using inquiry skills and music terminology.
*   **MIB.4 (MS Beginning):** Formulate and justify personal responses to music, identifying emotional and intellectual responses.
*   **MIB.6 (MS Beginning):** Explore historical and cultural influences of music literature through listening.
```

## Troubleshooting

If your embedded content isn't displaying correctly:

1. Ensure the iframe HTML is properly escaped in the frontmatter (double quotes need backslashes: `\"`)
2. For Google Slides, make sure you're using the "pubembed" URL format, not just "pub"
3. If the embed still isn't working, try with a different type of embed (like YouTube) to diagnose if the issue is with the specific content or with the embedding system 