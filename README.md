# Comoki

> https://comoki.vercel.app

Track what you and your friends are eating.

## Development

This project uses [yarn](https://yarnpkg.com) to manage dependencies.

Install the dependencies

```sh
yarn
```

Run in local, for this to work you will need some environment variables, check
[deploy](#deploy).

```sh
yarn dev
```

For more check [development.md](./development.md).

## Deploy

Required environment variables

```sh
DB_URL=
GH_CLIENT_ID=
GH_CLIENT_SECRET=
```

You can get `GH_CLIENT_SECRET` and `GH_CLIENT_ID` by creating a
[GitHub Application](https://github.com/settings/applications/new).

The `DB_URL` variable is from [PlanetScale](https://planetscale.com), but any
MySQL should work.
