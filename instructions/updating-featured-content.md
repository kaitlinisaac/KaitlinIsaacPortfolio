# How to Update Featured Content on a Page

This guide explains how to modify a section on an existing page to feature specific content items, like lessons or projects, that are managed in your Astro content collections. We'll use the example of featuring specific lessons on the main Music Education page.

Think of this like picking your most beautiful, ready-to-harvest vegetables from your garden (your content collection) and arranging them in a special basket (a featured section) to display on your market stall (your webpage).

## Prerequisites

*   You have an Astro project with content collections set up (e.g., a 'lessons' collection in `src/content/`).
*   You know the `slug` (the filename without the extension) of the content items you want to feature.

## Steps

### 1. Identify the Target Page and Content

*   **Target Page**: The Astro file of the page you want to update. For example, `src/pages/music-education/index.astro`.
*   **Content to Feature**: The specific items from your collection. For instance, two lessons: `instrument-exploration-selection.md` and `self-lead-rehearsal.md` from the `lessons` collection. Their slugs are `instrument-exploration-selection` and `self-lead-rehearsal`.

### 2. Update the Frontmatter of Your Target Page

In the `---` (frontmatter) section at the top of your target Astro file:

*   **Import `getEntry`**:
    Make sure you import `getEntry` from `astro:content`. This function allows you to fetch individual content items.
    ```astro
    ---
    import { getEntry } from 'astro:content';
    // ... other imports ...
    ---
    ```

*   **Fetch Specific Entries**:
    Use `await getEntry('collectionName', 'itemSlug')` for each item you want to feature.
    ```astro
    ---
    // ... other imports ...
    import { getEntry } from 'astro:content';

    const lesson1Entry = await getEntry('lessons', 'instrument-exploration-selection');
    const lesson2Entry = await getEntry('lessons', 'self-lead-rehearsal');
    ---
    ```
    It's a good practice to give them descriptive variable names.

*   **Prepare an Array of Featured Items**:
    Create an array that holds the data for your featured items in a structured way. This makes it easier to loop through them in your page template. You'll extract the necessary data (like title, description, thumbnail, category, and a derived ID for the link) from each entry's `data` object and `id`.

    ```astro
    ---
    // ... (imports and getEntry calls) ...

    const featuredLessons = [
      {
        id: lesson1Entry.id.split('/').pop().split('.')[0], // Extracts 'instrument-exploration-selection'
        title: lesson1Entry.data.title,
        description: lesson1Entry.data.description,
        thumbnail: lesson1Entry.data.thumbnail || "/images/lessons/placeholder.jpg", // Fallback thumbnail
        category: lesson1Entry.data.category
      },
      {
        id: lesson2Entry.id.split('/').pop().split('.')[0], // Extracts 'self-lead-rehearsal'
        title: lesson2Entry.data.title,
        description: lesson2Entry.data.description,
        thumbnail: lesson2Entry.data.thumbnail || "/images/lessons/placeholder.jpg",
        category: lesson2Entry.data.category
      }
    ];
    ---
    ```
    *Why derive the `id`?* The `entry.id` from Astro content often includes the collection and file extension (e.g., `lessons/instrument-exploration-selection.md`). For creating clean URLs or unique identifiers, you might want just the base slug. The `split('/').pop().split('.')[0]` part is a common way to extract this.

### 3. Render the Featured Content in Your Page Template

In the HTML body of your Astro file, find the section where you want to display the featured items.

*   **Use a Loop**:
    Map over the `featuredLessons` array you created in the frontmatter to generate the HTML for each item.

*   **Structure Each Item (Card)**:
    For each item, create an `<a>` tag that links to the detailed page of that lesson. The styling should be consistent with how similar items are displayed elsewhere (e.g., on the main `/music-education/lessons` page).

    ```astro
    <!-- Example: In src/pages/music-education/index.astro -->
    <Section title="What I Bring to the Classroom" backgroundColor="accent">
      <h3 class="text-xl font-semibold text-primary mb-4">Featured Lessons and Materials</h3>
      <div class="space-y-6"> {/* Or 'grid grid-cols-1 md:grid-cols-2 gap-6' if side-by-side */}
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Container for cards */}
          {featuredLessons.map((lesson) => (
            <a
              href={`/music-education/lessons/${lesson.category}/${lesson.id}`}
              class="block bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={lesson.thumbnail}
                  alt={`Thumbnail for ${lesson.title}`}
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h3 class="font-medium text-lg text-primary mb-2">{lesson.title}</h3>
                <p class="text-body line-clamp-2">{lesson.description}</p>
              </div>
            </a>
          ))}
        </div>

        <!-- "See All" Button (if applicable) -->
        <div class="mt-6">
          <PillButton 
            href="/music-education/lessons" 
            backgroundColor="iconColor"
          >
            Explore All Lesson Plans
          </PillButton>
        </div>
      </div>
    </Section>
    ```

    *   **Key elements for each card**:
        *   **Link (`href`)**: Dynamically create the link using the `lesson.category` and `lesson.id`.
        *   **Styling Classes**: Use Tailwind CSS classes (e.g., `block bg-surface rounded-lg`, `aspect-video`, `p-6`, `font-medium`, `line-clamp-2`) to match the desired appearance. Refer to existing card implementations (like in `src/pages/music-education/lessons.astro`) for consistency.
        *   **Thumbnail**: An `<img>` tag for the lesson's thumbnail image.
        *   **Title and Description**: `<h3>` for the title and `<p>` for the description.

### 4. Verify

*   Save your changes.
*   Run your Astro development server (usually `npm run dev` or `yarn dev`).
*   Navigate to the page you updated and check if the featured items are displayed correctly, with the correct content, styling, and links.

## Example Analogy: Curating a Crochet Display

Imagine your `lessons` collection is like your big box of all crochet projects you've ever made.
1.  **Identify**: You want to feature your "Star Stitch Scarf" and "Amigurumi Bee" on your craft fair table (your `music-education` page).
2.  **Frontmatter (Preparation)**:
    *   You get the specific patterns (`getEntry`) for the scarf and the bee.
    *   You note down their key details (yarn type, hook size, a little story about them) and prepare little info cards (`featuredLessons` array).
3.  **Template (Display)**:
    *   You arrange the scarf and bee on your table (`<div class="grid ...">`).
    *   For each, you place its info card next to it (`<a href=... class=...> ... </a>`).
    *   You make sure they look appealing and match the overall style of your table.
4.  **Verify**: You step back and admire your display, checking if everything looks good and the info cards are correct.

This approach gives you fine-grained control over which specific items are highlighted on your pages, allowing you to curate content for your visitors effectively. 