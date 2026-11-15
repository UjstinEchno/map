# Sonic Metaphors: a mind map of the thesis

An interactive mind map of the research behind *Conceptual metaphor as sound design method*, a practice-led master's thesis by Justin Enoch.

It has a two-sided map you can drag and zoom, with key terms, illustrations, open questions and an APA 7 reference list. Every citation is clickable.

## Files

| File | Contents |
|---|---|
| `index.html` | Page layout, styles, app code, and the embedded Authentic Sans font |
| `nodes.js` | The ideas: clusters, definitions, body text with citations, links, questions |
| `refs.js` | References (APA 7), source groups, citation checks |
| `figs.js` | The illustrations, as inline SVG |

No build step and no dependencies. To edit content, change the `.js` data files. A citation in body text is written `[[refkey|p. 12]]`, and `refkey` must exist in `refs.js`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server
```

## Publish with GitHub Pages

1. Push these files to the root of a repository.
2. In the repository, go to **Settings → Pages**, set the source to **Deploy from a branch**, then pick `main` and `/ (root)`.
3. The site will appear at `https://<username>.github.io/<repository>/`.
