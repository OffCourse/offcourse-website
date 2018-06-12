# Offcourse Website
The repository for the Offcourse website. For the live website please visit [www.offcourse.io](https://www.offcourse.io).

## Getting Started
For a more detailed step-by-step instructions on getting started, see the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/).

Make sure you have installed [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/en/docs/install)

Step by step:

1. Open terminal and change the directory to the place you want to install the website (`cd /Users/yourname/`)
2. Clone this repo on your local machine by running `git clone  https://github.com/OffCourse/offcourse-website.git`
3. Install the dependencies by running `yarn`
4. Run a local version of the website by running `yarn run develop`
5. Open your browser and check [http://localhost:8000](http://localhost:8000)

## Developing
For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

### Creating and managing blog posts
Posts live in the `src/posts/YYYY-MM-DD-{permalink}` folder. It includes a `index.md` file, which is a markdown file and the assets used in the blogposts. The markdown file includes frontmatter and needs the following properties (`path`, `date`, `title`, `featuredImage`). Checkout an existing blog post to see how it works.

### Creating and editing pages
Pages live in `src/pages`. A page consists of reusable components found in `src/components`. Creating a new page is easy. Just copy an existing page and rename it to the permalink you want to give the page. You can change document head (for SEO purposes) in the `Helmet` component. You can add any reusable component found in `src/components`.

### How does the setup differ from normal Gatsby setup?
The only thing really special is the way we handle the compiling of Semantic. Before running `gatsby develop` we run `node semantic-fix.js` to fix `theme.config` import and font paths.


## Deploy
We use Netlify for hosting. Any update to the `master` branche will trigger a new build and deploys a new version of the website.

## Recommendations

* Remove the Semantic dependency (this is a huge performance killer)
* Add CMS to manage content easier (e.g. [Contentful](https://www.contentful.com))
