# How to update your website

Everything you say on this website lives in the **`data`** folder. You change the words there, and the design takes care of itself. You never need to touch the styling to add a paper, a job or a photo.

## Seeing your changes

1. Open this folder in **Visual Studio Code**. Turn on **View > Word Wrap** so long lines are easy to read.
2. Double-click **`index.html`** to open your website in a browser.
3. Edit a file and save it (**Ctrl + S**).
4. Refresh the browser (**F5**) to see the change.

Nothing goes live until you publish it (see [Publishing](#publishing-your-changes)), so you can experiment safely.

## Where everything is

| To change... | Edit this file |
| --- | --- |
| Email, social links, menu, footer | `data/site.js` |
| Homepage introduction and highlights | `data/home.js` |
| Project boxes on the Research page | `data/research.js` |
| A full research project page | a file in `data/projects/` |
| Papers | `data/publications.js` |
| Jobs | `data/experience.js` |
| Teaching roles | `data/teaching.js` |
| Degrees | `data/education.js` |
| Contact page | `data/contact.js` |
| **Colours and fonts** | `css/theme.css` |

Pictures go in `images`, papers in `papers`, and your résumé in `files`.

**Please leave these alone:** the `js` folder, every file in `css` other than `theme.css`, and the `.html` files. They hold the design and layout.

## Three rules for editing data files

**1. Keep the quotation marks around text.**

```js
title: "Research Engineer",
```

**2. Keep the comma at the end of each line or block.** A missing comma is the most common mistake.

**3. To add something, copy a whole block.** A block starts with `{` and ends with `},`. Copy all of it, paste it, and change the words.

If you need a double quotation mark inside your text, use the curly kind: “like this”.

Lines beginning with `//` are notes to you. They never appear on the website.

## Making text bold, italic or a link

| You type | It shows |
| --- | --- |
| `**these words**` | **these words** in bold |
| `_these words_` | *these words* in italics |
| `[Read more](https://example.com)` | a link called "Read more" |

## Common updates

### Add a paper

1. Put the PDF in the `papers` folder.
2. Open `data/publications.js`, copy a whole paper block, and paste it at the top of the `papers` list.
3. Change the details. Point the "Read PDF" link at your file, such as `papers/my-new-paper-2027.pdf`.

### Add a homepage highlight

Open `data/home.js`, find `items`, copy a block to the top of the list, and change it.

```js
{
  date: "March 2027",
  yearMonth: "2027-03",
  text: "Gave a talk at the [HCI Symposium](https://example.com).",
},
```

### Add a job, teaching role or degree

Open `data/experience.js`, `data/teaching.js` or `data/education.js`, copy a whole block to the top of the list, and change it. Put any new logo in the `images` folder.

### Change your photo

Put the new photo in the `images` folder. In `data/home.js`, change the `photo` line to its filename.

### Replace your résumé

Save the new PDF over `files/Nipuni_Hansika_Resume.pdf`, keeping exactly the same name.

### Change colours or fonts

Open `css/theme.css`. Every colour is labelled with where it is used. Click the small coloured square beside a code to open a colour picker.

### The contact form

Messages from the form on the Contact page are delivered to your inbox by a free service called Web3Forms. The wording of the form is in `data/contact.js`, under `form`.

To set it up, or to send messages to a different inbox:

1. Go to https://web3forms.com and enter the email address that should receive the messages.
2. Open the email they send you and copy the **access key**.
3. In `data/contact.js`, paste it between the quotation marks on the `accessKey` line.
4. Publish your changes, then send yourself a test message from the form. Check your spam folder the first time.

Changing your email in `data/site.js` does not change where form messages go. Only a new access key does that.

To answer someone, simply press **Reply** in your email.

### Add a new research project

This takes four steps.

1. **Write the content.** In `data/projects`, copy `_TEMPLATE.js` and rename the copy, for example `my-project.js`. Fill it in, following the notes inside. Put its pictures in a new folder such as `images/research/my-project`.
2. **Make its page.** Copy `research-motus.html` and rename the copy `research-my-project.html`. Open it and change two lines:
   - the `<title>` near the top
   - `data/projects/motus.js` near the bottom, to `data/projects/my-project.js`
3. **Add its box.** In `data/research.js`, copy a block in the `projects` list and fill it in. Set `page` to `research-my-project.html`, and make its `id` match the `id` in your project file.
4. **Check it.** Open the Research page and click through to your project.

## If something looks wrong

A **yellow message** at the top of the page means a data file has a typo. It tells you which file to check. Look for a missing comma or quotation mark near the last thing you changed.

If you cannot find it, press **Ctrl + Z** in your editor to undo your recent changes.

## Publishing your changes

Your website is hosted by GitHub Pages at https://github.com/KANipuniHansika/kanipunihansika.github.io.

**The simple way, for small edits in your browser:**

1. Open the link above and sign in.
2. Click through to the file, for example `data` then `publications.js`.
3. Click the **pencil icon**, make your change, and click **Commit changes**.
4. Your website updates within a minute or two.

**From Visual Studio Code:** open the **Source Control** panel on the left, type a short note about your change, click **Commit**, then **Sync Changes**.

Before publishing, open the pages you changed and check them on both a computer and a phone-sized window.
