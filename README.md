# Local Development

`npm run dev-front` will run frontend website **ONLY** on _http://localhost:3000_

`npm run build` to build react static website.

`npm run dev` will start the node server with nodemon.

- server will run on _http://localhost:80_ (=_http://localhost_)
- backend api endpoint is _http://localhost/statistics_
- server renders the react static website from `build` directory (`npm run build` before `npm run dev` for latest frontend)

After `git add, commit, push`, deploy to heroku using either heroku-CLI or web UI.

Once deployed, heroku will automatically do the following:

`npm run build` (build static from react)

`npm run start` (`node server`)
