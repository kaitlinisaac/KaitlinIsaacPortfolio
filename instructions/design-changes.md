# Design Changes Guidelines

This document provides guidance on making design changes to the site, understanding the structure, and working effectively with AI assistants to implement these changes.

## Table of Contents

1. [Understanding Site Structure](#understanding-site-structure)
2. [Making Design Changes](#making-design-changes)
3. [Working with Fonts](#working-with-fonts)
4. [Using Images and SVGs](#using-images-and-svgs)
5. [Working with AI Assistants](#working-with-ai-assistants)
6. [Best Practices](#best-practices)

## Understanding Site Structure

The site is built with Astro and uses:
- **Tailwind CSS** for styling
- **Custom components** in the `src/components` directory
- **Layout templates** in the `src/layouts` directory
- **Content pages** in the `src/pages` directory
- **Global styles** in `src/styles/global.css`

When making changes, it's important to understand how these pieces work together.

## Making Design Changes

### Step 1: Identify the Component to Change

First, locate the file that needs to be modified:
- For page-specific content, check `src/pages/`
- For reusable components, check `src/components/`
- For layout structures, check `src/layouts/`

### Step 2: Plan Your Changes

Before making changes:
- Review existing styles in the Tailwind config (`tailwind.config.mjs`)
- Note the color palette, spacing system, and typography settings
- Consider responsive behavior (mobile, tablet, desktop)

### Step 3: Implement Changes

When implementing changes:
- Use Tailwind classes when possible to maintain consistency
- For custom styles, add them in component-specific `<style>` tags
- For global styles, consider adding them to `src/styles/global.css`

### Step 4: Test Across Devices

After making changes:
- Test on multiple screen sizes
- Check dark mode compatibility if applicable
- Verify that changes don't break other components

## Working with Fonts

### Adding Custom Fonts

1. Place font files in `public/fonts/`
2. Create font-face declarations in your component or a separate CSS file:

```css
@font-face {
  font-family: 'Your-Font-Name';
  src: url('/fonts/your-font-file.extension') format('format-type');
  font-weight: normal/bold;
  font-style: normal/italic;
  font-display: swap;
}
```

3. Apply the font using inline styles or Tailwind classes:

```html
<h1 style="font-family: 'Your-Font-Name', fallback-font;">Your Heading</h1>
```

### Font Best Practices

- Include fallback fonts for better performance
- Use `font-display: swap` to prevent invisible text during loading
- Consider font weight and style variations needed

## Using Images and SVGs

### Image Best Practices

1. Place images in `public/images/`
2. Use appropriate formats:
   - JPEG for photos
   - PNG for images needing transparency
   - SVG for icons and illustrations
   - WebP when possible for better performance
3. Include proper `alt` text for accessibility
4. Set appropriate width and height to prevent layout shifts
5. Use responsive image classes:

```html
<img 
  src="/images/your-image.svg"
  alt="Description of image"
  width="original-width"
  height="original-height"
  class="w-full h-auto max-w-md"
/>
```

### SVG Best Practices

- Use inline SVGs for elements that need color changes
- Set viewBox for proper scaling
- Include accessible attributes (aria-hidden="true" for decorative SVGs)

## Working with AI Assistants

### Preparing Requests for AI

When asking an AI assistant to help with design changes:

1. **Be Specific**: Clearly describe what you want to change and how
   ```
   "I want to update the homepage header to use the Lovelace font and change the background color to #F6EDF7"
   ```

2. **Provide Context**: Share relevant files or components
   ```
   "Please look at src/pages/index.astro and src/components/Header.astro to understand the current structure"
   ```

3. **Specify Design Details**: Include colors, fonts, spacing, and responsive behavior
   ```
   "The text should be centered on mobile and left-aligned on desktop"
   ```

4. **Reference Existing Patterns**: Point to similar components as examples
   ```
   "Use the same button style as seen in the contact page"
   ```

### Reviewing AI Changes

After the AI makes changes:

1. Review the code for:
   - Proper use of Tailwind classes
   - Responsive design considerations
   - Accessibility features
   - Consistent coding style

2. Test the changes locally before deploying

3. Make incremental adjustments as needed

## Best Practices

### Design Consistency

- Use the color palette defined in `tailwind.config.mjs`
- Maintain consistent spacing using Tailwind's spacing scale
- Follow the typography system for font sizes and weights
- Reuse existing components rather than creating new ones with slight variations

### Section Backgrounds

- Use accent backgrounds strategically to create visual hierarchy
- For hero sections with illustrations:
  - The lavender background (#F6EDF7) should only extend to contain the main illustration
  - Keep interactive elements like buttons and links on a neutral background for better contrast
  - Use padding and spacing to create clear separation between differently colored sections
- When adding colored backgrounds, ensure sufficient contrast with the text for accessibility

### Accessibility

- Ensure sufficient color contrast
- Include proper alt text for images
- Use semantic HTML elements
- Ensure keyboard navigability

### Performance

- Optimize images before adding them
- Minimize custom CSS when Tailwind classes can be used
- Avoid unnecessary JavaScript for visual-only elements

### Version Control

- Make one change at a time
- Use descriptive commit messages
- Test changes locally before deploying

By following these guidelines, you'll maintain a consistent, accessible, and maintainable design system for your site. 