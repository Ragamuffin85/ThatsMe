"use strict";(self.webpackChunkthats_me=self.webpackChunkthats_me||[]).push([[4075],{6346:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/tutorial-basics/create-a-blog-post","metadata":{"permalink":"/ThatsMe/blog/tutorial-basics/create-a-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-basics/create-a-blog-post.md","source":"@site/blog/tutorial-basics/create-a-blog-post.md","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":0.48,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":3},"unlisted":false,"nextItem":{"title":"Create a Document","permalink":"/ThatsMe/blog/tutorial-basics/create-a-document"}},"content":"Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...\\n\\n## Create your first Post\\n\\nCreate a file at `blog/2021-02-28-greetings.md`:\\n\\n```md title=\\"blog/2021-02-28-greetings.md\\"\\n---\\nslug: greetings\\ntitle: Greetings!\\nauthors:\\n  - name: Joel Marcey\\n    title: Co-creator of Docusaurus 1\\n    url: https://github.com/JoelMarcey\\n    image_url: https://github.com/JoelMarcey.png\\n  - name: S\xe9bastien Lorber\\n    title: Docusaurus maintainer\\n    url: https://sebastienlorber.com\\n    image_url: https://github.com/slorber.png\\ntags: [greetings]\\n---\\n\\nCongratulations, you have made your first post!\\n\\nFeel free to play around and edit this post as much as you like.\\n```\\n\\nA new blog post is now available at [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings)."},{"id":"/tutorial-basics/create-a-document","metadata":{"permalink":"/ThatsMe/blog/tutorial-basics/create-a-document","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-basics/create-a-document.md","source":"@site/blog/tutorial-basics/create-a-document.md","title":"Create a Document","description":"Documents are groups of pages connected through:","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":0.59,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":2},"unlisted":false,"prevItem":{"title":"Create a Blog Post","permalink":"/ThatsMe/blog/tutorial-basics/create-a-blog-post"},"nextItem":{"title":"Create a Page","permalink":"/ThatsMe/blog/tutorial-basics/create-a-page"}},"content":"Documents are **groups of pages** connected through:\\n\\n- a **sidebar**\\n- **previous/next navigation**\\n- **versioning**\\n\\n## Create your first Doc\\n\\nCreate a Markdown file at `docs/hello.md`:\\n\\n```md title=\\"docs/hello.md\\"\\n# Hello\\n\\nThis is my **first Docusaurus document**!\\n```\\n\\nA new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).\\n\\n## Configure the Sidebar\\n\\nDocusaurus automatically **creates a sidebar** from the `docs` folder.\\n\\nAdd metadata to customize the sidebar label and position:\\n\\n```md title=\\"docs/hello.md\\" {1-4}\\n---\\nsidebar_label: \'Hi!\'\\nsidebar_position: 3\\n---\\n\\n# Hello\\n\\nThis is my **first Docusaurus document**!\\n```\\n\\nIt is also possible to create your sidebar explicitly in `sidebars.js`:\\n\\n```js title=\\"sidebars.js\\"\\nexport default {\\n  tutorialSidebar: [\\n    \'intro\',\\n    // highlight-next-line\\n    \'hello\',\\n    {\\n      type: \'category\',\\n      label: \'Tutorial\',\\n      items: [\'tutorial-basics/create-a-document\'],\\n    },\\n  ],\\n};\\n```"},{"id":"/tutorial-basics/create-a-page","metadata":{"permalink":"/ThatsMe/blog/tutorial-basics/create-a-page","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-basics/create-a-page.md","source":"@site/blog/tutorial-basics/create-a-page.md","title":"Create a Page","description":"Add Markdown or React files to src/pages to create a standalone page:","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":0.52,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":1},"unlisted":false,"prevItem":{"title":"Create a Document","permalink":"/ThatsMe/blog/tutorial-basics/create-a-document"},"nextItem":{"title":"Deploy your site","permalink":"/ThatsMe/blog/tutorial-basics/deploy-your-site"}},"content":"Add **Markdown or React** files to `src/pages` to create a **standalone page**:\\n\\n- `src/pages/index.js` \u2192 `localhost:3000/`\\n- `src/pages/foo.md` \u2192 `localhost:3000/foo`\\n- `src/pages/foo/bar.js` \u2192 `localhost:3000/foo/bar`\\n\\n## Create your first React Page\\n\\nCreate a file at `src/pages/my-react-page.js`:\\n\\n```jsx title=\\"src/pages/my-react-page.js\\"\\nimport React from \'react\';\\nimport Layout from \'@theme/Layout\';\\n\\nexport default function MyReactPage() {\\n  return (\\n    <Layout>\\n      <h1>My React page</h1>\\n      <p>This is a React page</p>\\n    </Layout>\\n  );\\n}\\n```\\n\\nA new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).\\n\\n## Create your first Markdown Page\\n\\nCreate a file at `src/pages/my-markdown-page.md`:\\n\\n```mdx title=\\"src/pages/my-markdown-page.md\\"\\n# My Markdown page\\n\\nThis is a Markdown page\\n```\\n\\nA new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)."},{"id":"/tutorial-basics/deploy-your-site","metadata":{"permalink":"/ThatsMe/blog/tutorial-basics/deploy-your-site","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-basics/deploy-your-site.md","source":"@site/blog/tutorial-basics/deploy-your-site.md","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack).","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":0.42,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":5},"unlisted":false,"prevItem":{"title":"Create a Page","permalink":"/ThatsMe/blog/tutorial-basics/create-a-page"},"nextItem":{"title":"Markdown Features","permalink":"/ThatsMe/blog/tutorial-basics/markdown-features"}},"content":"Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).\\n\\nIt builds your site as simple **static HTML, JavaScript and CSS files**.\\n\\n## Build your site\\n\\nBuild your site **for production**:\\n\\n```bash\\nnpm run build\\n```\\n\\nThe static files are generated in the `build` folder.\\n\\n## Deploy your site\\n\\nTest your production build locally:\\n\\n```bash\\nnpm run serve\\n```\\n\\nThe `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).\\n\\nYou can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**)."},{"id":"/tutorial-basics/markdown-features","metadata":{"permalink":"/ThatsMe/blog/tutorial-basics/markdown-features","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-basics/markdown-features.mdx","source":"@site/blog/tutorial-basics/markdown-features.mdx","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":1.715,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":4},"unlisted":false,"prevItem":{"title":"Deploy your site","permalink":"/ThatsMe/blog/tutorial-basics/deploy-your-site"},"nextItem":{"title":"Manage Docs Versions","permalink":"/ThatsMe/blog/tutorial-extras/manage-docs-versions"}},"content":"Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.\\n\\n## Front Matter\\n\\nMarkdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):\\n\\n```text title=\\"my-doc.md\\"\\n// highlight-start\\n---\\nid: my-doc-id\\ntitle: My document title\\ndescription: My document description\\nslug: /my-custom-url\\n---\\n// highlight-end\\n\\n## Markdown heading\\n\\nMarkdown text with [links](./hello.md)\\n```\\n\\n## Links\\n\\nRegular Markdown links are supported, using url paths or relative file paths.\\n\\n```md\\nLet\'s see how to [Create a page](/create-a-page).\\n```\\n\\n```md\\nLet\'s see how to [Create a page](./create-a-page.md).\\n```\\n\\n**Result:** Let\'s see how to [Create a page](./create-a-page.md).\\n\\n## Images\\n\\nRegular Markdown images are supported.\\n\\nYou can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):\\n\\n```md\\n![Docusaurus logo](/img/docusaurus.png)\\n```\\n\\n![Docusaurus logo](/img/docusaurus.png)\\n\\nYou can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:\\n\\n```md\\n![Docusaurus logo](./img/docusaurus.png)\\n```\\n\\n## Code Blocks\\n\\nMarkdown code blocks are supported with Syntax highlighting.\\n\\n````md\\n```jsx title=\\"src/components/HelloDocusaurus.js\\"\\nfunction HelloDocusaurus() {\\n  return <h1>Hello, Docusaurus!</h1>;\\n}\\n```\\n````\\n\\n```jsx title=\\"src/components/HelloDocusaurus.js\\"\\nfunction HelloDocusaurus() {\\n  return <h1>Hello, Docusaurus!</h1>;\\n}\\n```\\n\\n## Admonitions\\n\\nDocusaurus has a special syntax to create admonitions and callouts:\\n\\n```md\\n:::tip My tip\\n\\nUse this awesome feature option\\n\\n:::\\n\\n:::danger Take care\\n\\nThis action is dangerous\\n\\n:::\\n```\\n\\n:::tip My tip\\n\\nUse this awesome feature option\\n\\n:::\\n\\n:::danger Take care\\n\\nThis action is dangerous\\n\\n:::\\n\\n## MDX and React Components\\n\\n[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:\\n\\n```jsx\\nexport const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'20px\',\\n      color: \'#fff\',\\n      padding: \'10px\',\\n      cursor: \'pointer\',\\n    }}\\n    onClick={() => {\\n      alert(`You clicked the color ${color} with label ${children}`)\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\nThis is <Highlight color=\\"#25c2a0\\">Docusaurus green</Highlight> !\\n\\nThis is <Highlight color=\\"#1877F2\\">Facebook blue</Highlight> !\\n```\\n\\nexport const Highlight = ({children, color}) => (\\n  <span\\n    style={{\\n      backgroundColor: color,\\n      borderRadius: \'20px\',\\n      color: \'#fff\',\\n      padding: \'10px\',\\n      cursor: \'pointer\',\\n    }}\\n    onClick={() => {\\n      alert(`You clicked the color ${color} with label ${children}`);\\n    }}>\\n    {children}\\n  </span>\\n);\\n\\nThis is <Highlight color=\\"#25c2a0\\">Docusaurus green</Highlight> !\\n\\nThis is <Highlight color=\\"#1877F2\\">Facebook blue</Highlight> !"},{"id":"/tutorial-extras/manage-docs-versions","metadata":{"permalink":"/ThatsMe/blog/tutorial-extras/manage-docs-versions","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-extras/manage-docs-versions.md","source":"@site/blog/tutorial-extras/manage-docs-versions.md","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":0.695,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":1},"unlisted":false,"prevItem":{"title":"Markdown Features","permalink":"/ThatsMe/blog/tutorial-basics/markdown-features"},"nextItem":{"title":"Translate your site","permalink":"/ThatsMe/blog/tutorial-extras/translate-your-site"}},"content":"Docusaurus can manage multiple versions of your docs.\\n\\n## Create a docs version\\n\\nRelease a version 1.0 of your project:\\n\\n```bash\\nnpm run docusaurus docs:version 1.0\\n```\\n\\nThe `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.\\n\\nYour docs now have 2 versions:\\n\\n- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs\\n- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**\\n\\n## Add a Version Dropdown\\n\\nTo navigate seamlessly across versions, add a version dropdown.\\n\\nModify the `docusaurus.config.js` file:\\n\\n```js title=\\"docusaurus.config.js\\"\\nexport default {\\n  themeConfig: {\\n    navbar: {\\n      items: [\\n        // highlight-start\\n        {\\n          type: \'docsVersionDropdown\',\\n        },\\n        // highlight-end\\n      ],\\n    },\\n  },\\n};\\n```\\n\\nThe docs version dropdown appears in your navbar:\\n\\n![Docs Version Dropdown](./img/docsVersionDropdown.png)\\n\\n## Update an existing version\\n\\nIt is possible to edit versioned docs in their respective folder:\\n\\n- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`\\n- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`"},{"id":"/tutorial-extras/translate-your-site","metadata":{"permalink":"/ThatsMe/blog/tutorial-extras/translate-your-site","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-extras/translate-your-site.md","source":"@site/blog/tutorial-extras/translate-your-site.md","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","date":"2024-12-18T20:08:33.000Z","tags":[],"readingTime":0.955,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":2},"unlisted":false,"prevItem":{"title":"Manage Docs Versions","permalink":"/ThatsMe/blog/tutorial-extras/manage-docs-versions"},"nextItem":{"title":"Welcome","permalink":"/ThatsMe/blog/welcome"}},"content":"Let\'s translate `docs/intro.md` to French.\\n\\n## Configure i18n\\n\\nModify `docusaurus.config.js` to add support for the `fr` locale:\\n\\n```js title=\\"docusaurus.config.js\\"\\nexport default {\\n  i18n: {\\n    defaultLocale: \'en\',\\n    locales: [\'en\', \'fr\'],\\n  },\\n};\\n```\\n\\n## Translate a doc\\n\\nCopy the `docs/intro.md` file to the `i18n/fr` folder:\\n\\n```bash\\nmkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\\n\\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\\n```\\n\\nTranslate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.\\n\\n## Start your localized site\\n\\nStart your site on the French locale:\\n\\n```bash\\nnpm run start -- --locale fr\\n```\\n\\nYour localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.\\n\\n:::caution\\n\\nIn development, you can only use one locale at a time.\\n\\n:::\\n\\n## Add a Locale Dropdown\\n\\nTo navigate seamlessly across languages, add a locale dropdown.\\n\\nModify the `docusaurus.config.js` file:\\n\\n```js title=\\"docusaurus.config.js\\"\\nexport default {\\n  themeConfig: {\\n    navbar: {\\n      items: [\\n        // highlight-start\\n        {\\n          type: \'localeDropdown\',\\n        },\\n        // highlight-end\\n      ],\\n    },\\n  },\\n};\\n```\\n\\nThe locale dropdown now appears in your navbar:\\n\\n![Locale Dropdown](./img/localeDropdown.png)\\n\\n## Build your localized site\\n\\nBuild your site for a specific locale:\\n\\n```bash\\nnpm run build -- --locale fr\\n```\\n\\nOr build your site to include all the locales at once:\\n\\n```bash\\nnpm run build\\n```"},{"id":"welcome","metadata":{"permalink":"/ThatsMe/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/ThatsMe/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/ThatsMe/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/ThatsMe/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/ThatsMe/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/ThatsMe/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Translate your site","permalink":"/ThatsMe/blog/tutorial-extras/translate-your-site"},"nextItem":{"title":"MDX Blog Post","permalink":"/ThatsMe/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nHere are a few tips you might find useful.\\n\\n\x3c!-- truncate --\x3e\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/ThatsMe/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/ThatsMe/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/ThatsMe/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/ThatsMe/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/ThatsMe/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\n{/* truncate */}\\n\\nFor example, use JSX to create an interactive button:\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>"},{"id":"long-blog-post","metadata":{"permalink":"/ThatsMe/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/ThatsMe/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/ThatsMe/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":2.06,"hasTruncateMarker":true,"authors":[{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/ThatsMe/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"yangshun","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/ThatsMe/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/ThatsMe/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!-- truncate --\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/ThatsMe/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet...","date":"2019-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/ThatsMe/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/ThatsMe/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.135,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/ThatsMe/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/ThatsMe/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":["slorber","yangshun"],"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/ThatsMe/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet...\\n\\n\x3c!-- truncate --\x3e\\n\\n...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);