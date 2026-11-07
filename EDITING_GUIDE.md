# Editing Nipuni Hansika’s portfolio

This website uses plain HTML and CSS. There is no build step and no account or API key is required to edit the downloaded copy.

## Open your copy

1. Download and extract Nipuni_Hansika_Portfolio_Source.zip.
2. Open the extracted folder in a code editor such as Visual Studio Code.
3. Open index.html in your browser. Click the navigation to move between pages.
4. Save changes in your editor, then refresh the browser to see them.

## Files

| File | What to edit |
| --- | --- |
| index.html | Homepage introduction and illustration |
| research.html | Project descriptions and contributions |
| publications.html | Papers, authors and DOI links |
| experience.html | Employment and teaching |
| education.html | Degrees and qualifications |
| contact.html | Contact page |
| styles.css | Colours, type, spacing and responsive layout |

## Colours

Open styles.css. The settings at the top apply to every page.

```css
:root {
  --paper: #f7f5ef; /* background */
  --ink: #1b2924; /* main text */
  --muted: #4f6158; /* secondary text */
  --green: #194b39; /* main accent and buttons */
  --accent: #d8ed9f; /* light accent */
  --dark: #183c31; /* footer and illustration */
  --feature: #e7ecde; /* MOTUS background */
}
```

Change the six-digit colour values. Your editor may provide a colour picker. Keep text easy to read against its background. Search further down the file for the section you want to change. A few decorative borders have separate colours.

## Text, links and images

Edit the text between HTML tags. Keep the opening and closing tags.

```html
<p>Write your new description here.</p>
<a href="https://doi.org/YOUR-DOI">Read the paper</a>
```

To add a project, copy an entire existing <article class="card"> ... </article> in research.html. Change its title, description and contribution.

Create an images folder beside index.html. Place your image there, then insert this inside a project article.

```html
<img src="images/motus.jpg" alt="MOTUS drawing interface showing stroke feedback" style="max-width:100%;height:auto;">
```

Use the actual filename and a description of what the image shows. Use your own images or images you have permission to share.

## Navigation and repeated content

The navigation and footer appear in each HTML file. If you add a page or change the footer email, make the same edit in all six pages. The CSS file is shared, so style edits only need to happen once.

## Publish edits to the existing ChatGPT Site

Saving local files changes your local copy. To update the hosted portfolio, upload your edited files or ZIP into the same ChatGPT conversation and ask to apply and deploy them to the existing Nipuni Hansika portfolio. The Site source can then be updated and published at the existing URL. Keep your last working ZIP as a backup.

You can also request text and design changes directly in this conversation.

## Optional independent hosting with GitHub Pages

For a website you maintain through your own GitHub account, create a public repository named YOURUSERNAME.github.io. Upload the contents of this folder so index.html and styles.css are at the repository root. Under Settings > Pages, select Deploy from a branch, main, and /(root), then Save. GitHub provides the live URL in Pages settings.

You can then edit files in GitHub or push changes from your computer. For a custom domain, follow the current instructions in GitHub Pages settings and your domain provider.

Official instructions
https://docs.github.com/en/pages/quickstart
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Check after editing

Open every page. Test the navigation and project expanders. Check the layout on a phone and a computer. Confirm the email address and DOI links. Local previews do not reproduce the hosted Site’s sign-in and sharing controls.


## New Teaching page and profile photo

teaching.html contains your teaching roles. Its navigation link appears on all seven pages.

To add your real photo, save a portrait as images/profile.jpg. In index.html replace the placeholder image tag with this tag.

```html
<img src="images/profile.jpg" alt="Portrait of Nipuni Hansika" width="600" height="720">
```

The image is cropped to a 5:6 frame. In styles.css adjust .profile-photo img object-position (for example center 20%) to move the crop. The width and height attributes describe the display ratio and do not require a 600 by 720 source file. Use a clear portrait with your face near the centre. The ZIP includes an NH initials placeholder, pending your real photo.

The previous homepage stroke illustration has been replaced by the photo area. The Experience page still provides your employment summary. Teaching expands the teaching roles with responsibilities.
