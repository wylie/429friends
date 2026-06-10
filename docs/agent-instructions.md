# Project Overview

## Project Name

429 Friends

## Primary Domain

429Friends.org

## Purpose

429 Friends is a simple website for a monthly outdoor Meeting for Worship held in a private backyard in Hendersonville, North Carolina.

The site exists to:

- Explain the meeting
- Help first-time visitors feel comfortable
- Provide logistics and directions
- Publish upcoming meeting dates
- Provide contact information
- Build a welcoming local community

The site is informational and largely static.

---

# Branding

Official Name:

429 Friends

Primary Domain:

429Friends.org

Tagline:

Outdoor Meeting for Worship
Hendersonville, North Carolina

Use "429 Friends" consistently throughout the site.

Avoid creating alternative names or abbreviations unless explicitly requested.

The architecture should support changing the site name from a single configuration file.

Store the following in a central site configuration file:

- Site name
- Tagline
- Contact email
- Physical address
- Social links
- Meeting location information

---

# Technology

Use:

- Astro
- Astro Islands
- HTML
- CSS
- Vanilla JavaScript

Hosting:

- GitHub Pages

Prefer Astro-native solutions whenever possible.

Do Not Use:

- React
- Vue
- Tailwind
- Bootstrap
- UI frameworks
- Server-side databases
- Authentication systems
- CMS platforms

The site should remain lightweight and easy to maintain.

---

# Design Philosophy

The site should feel:

- Warm
- Welcoming
- Calm
- Community-oriented
- Nature-centered
- Simple
- Human

Avoid:

- Corporate aesthetics
- Church aesthetics
- Heavy religious imagery
- Institutional design

Draw inspiration from:

- Forests
- Gardens
- Native plants
- Outdoor gathering spaces
- Backyard community events
- Walking paths
- Natural materials

The experience should feel closer to a neighborhood gathering than a religious institution.

---

# Community Positioning

The purpose of 429 Friends is to create a welcoming local community centered around:

- Shared silence
- Reflection
- Listening
- Connection
- Presence

This gathering is inspired by the Quaker tradition.

The goal is not to create a church.

When making design, content, or user experience decisions, prefer approaches that feel like a community gathering rather than a formal religious organization.

Visitors may include:

- Quakers
- Non-Quakers
- Atheists
- Agnostics
- Spiritual seekers
- Curious neighbors

All should feel welcome.

---

# Content Philosophy

The site should:

- Explain Meeting for Worship
- Explain silence
- Explain community practices
- Reduce uncertainty for first-time visitors
- Make visitors feel welcome

The site should NOT:

- Attempt to convert visitors
- Use dogmatic language
- Mention God unnecessarily
- Assume any particular belief system
- Present a single spiritual viewpoint as required

Use language that is:

- Accessible
- Friendly
- Plainspoken
- Welcoming

Avoid:

- Academic language
- Religious jargon
- Insider terminology without explanation

---

# Meeting Details

Current Meeting Information

- Outdoor Meeting for Worship
- Monthly gathering
- Second Sunday of each month
- Approximately 45–60 minutes
- Followed by informal community time

Location

- Private residence
- Enter via the right side of the house
- Continue directly into the backyard

Parking

- Driveway parking available
- Street parking available

Meeting Setup

- Participants sit in a circle facing the center
- Visitors should bring their own chair

Children

- Children are welcome
- No childcare is provided
- Children participate alongside adults

Dogs

- Visitors should not bring dogs
- Resident dog Meatball may occasionally attend

Late Arrivals

- Visitors arriving after the meeting begins should enter quietly and respectfully

---

# Visual Design

Prioritize:

- Photography
- White space
- Icons
- Cards
- Calm typography
- Clear hierarchy

Avoid large walls of text.

Break content into:

- Sections
- Cards
- Callouts
- FAQs
- Visual groupings

Use Material Symbols for icons.

Every page should contain at least one visual element.

Visitors should be able to scan most pages quickly.

---

# Photography Style

Photography should feel:

- Natural
- Real
- Welcoming
- Unstaged
- Seasonal

Preferred subjects:

- Backyard gathering space
- Trees
- Native plants
- Chairs arranged in a circle
- Walking paths
- Outdoor community spaces
- Seasonal landscape changes

Avoid stock photography whenever possible.

Prioritize authentic photographs of the actual meeting location.

---

# Images

The site should be highly visual.

Support:

- Backyard photos
- Gathering area photos
- Entry path photos
- Parking photos
- Nature photos

Create reusable gallery components.

Use Astro image optimization.

Optimize all images for performance.

---

# Content Guidelines

Prefer:

- Short paragraphs
- Cards
- FAQs
- Callouts
- Visual sections
- Lists

Avoid:

- Long essays
- Dense text blocks
- Academic language

Every page should have a clear purpose and call to action.

Focus on helping visitors feel comfortable attending.

---

# Accessibility

Follow WCAG AA standards.

Requirements:

- Keyboard accessible
- Proper heading hierarchy
- Semantic HTML
- Accessible forms
- Alt text for images
- Visible focus states
- Sufficient color contrast

Accessibility is a core requirement, not an optional enhancement.

---

# Architecture

Favor reusable components.

Create components for:

- Header
- Footer
- Hero
- Section wrappers
- Cards
- FAQs
- Photo galleries
- Callouts
- Schedule display
- Resource lists

Keep pages lightweight.

Avoid duplication.

Favor composability and reuse.

---

# Content Editing

Meeting dates should live in a single editable data file.

Contact information should live in a single configuration file.

Location information should live in a single configuration file.

Site-wide content should be easy for a non-developer to update.

Avoid hardcoding repeated information across pages.

---

# Source of Truth

Meeting information should originate from:

- Site configuration
- Meeting schedule data

Avoid duplicating information across pages.

When possible, display shared information from a single source.

---

# Future Features

The architecture should support future additions such as:

- Photo galleries
- Weather cancellations
- Special events
- Newsletter signup
- Additional meeting locations
- Community gatherings beyond Meeting for Worship

Favor extensibility over hardcoded solutions.

---

# Deployment

Hosting:

- GitHub Pages

Requirements:

- Static generation only
- No server dependencies
- No databases
- No authentication

The site should be deployable directly from GitHub Pages without additional infrastructure.

---

# Git Workflow

After each story:

- Run tests if present
- Verify build succeeds
- Verify pages render correctly
- Commit locally

Do not push.

Use clear commit messages that match the completed story.