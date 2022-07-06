# Land of Hop

Beer catalogue with beverages I have drunk last few years. This is my playground to test some technologies and, above all, a place where I can prove that it is possible to build quite big application which is highly performant, scalable, has good accessibility etc. More about my motivation and development timeline you will find in the [CHANGELOG](CHANGELOG.md).

## Stack overview

I believe that scalable applications should be as simple as possible. In other words they should stick to the most basic technologies: HTML, CSS, JavaScript. Of course to build larger applications we need help with some dependencies. I believe we should use them carefully and they also should stay close to the basics.

In the Land of Hop I use Svelte and SvelteKit. They are easy, scalable, well documented, close to basics. I use them as a full-stack framework, I mean SvelteKit provides Server Side Rendering, Single Page Application and a middleware connecting the app with database. In the middleware, I mean using SvelteKit Endpoints, I also set authentication. So, this is a full back-end and front-end application, no additional service is needed. I mean I use some other helpers services, but none of them is essential.

The database is MongoDB which stands on paid plan on MongoDB Atlas. I do not use ORM like Prisma or any other tool to modeling the database like Mongoose. It is pure MongoDB. To make the requests and responses shapes reliable I use TypeScript. It is a very simple solution, maybe not the safest, but for now it fulfills my needs. I believe we should always start from simple solutions. There will always be time for making things complex.

There is also a kind of database for images: AWS S3. I connect the app with it through Amazon CloudFront.

I use pure CSS with CSS variables. PostCSS is needed only for media-queries variables. I use just one utility library, `lodash-es`. Besides that all other dependencies are used to a limited extent, like `d3` for charts on statistics pages. Most of them are used only in the admin pages (dashboard) to generate slugs (`slugify`, `nanoid`), authenticate (`jsonwebtoken`), save an images (`potrace`, `sharp`, `svgo`, `buffer-image-size`), validate form fields (`yup`), transform dates (`date-fns`) or get data from other services (web scraping with `puppeteer`). I hope that with such simple tools the application is truly scalable.

## Workspace configuration

I work on Node 16. Install dependencies by:

```bash
npm install
```

To run the project locally you will need an `.env` file with at least one variable: `VITE_MONGODB_URI`. These are credentials to connect SvelteKit Endpoints with MongoDB Atlas. It is top secret. `VITE_JWT_SECRET` is a salt for JSON Web Tokens (for authentication only) and `VITE_GCP_KEY` is Google Key for auto-translations in the admin, dashboard pages.

```bash
VITE_JWT_SECRET = example
VITE_MONGODB_URI = mongodb+srv://<user>:<password>@landofhop.sample.mongodb.net/db
VITE_GCP_KEY = example
```

If you have at least the one environmental variable, you can init a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab

npm run dev -- --open
```

## Testing

@ToDo

## Stack details

@ToDo

## Folder structure

@ToDo

## Live preview

I develop the application only by myself, so all changes I add to `develop` branch. When a release is ready, I rebase to `main` branch, and it is production deployed to [hop.land](https://hop.land).
