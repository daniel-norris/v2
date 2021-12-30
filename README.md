# v2 Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/edaaea15-9a19-4626-88ef-849abfb69521/deploy-status)](https://app.netlify.com/sites/gallant-knuth-b47ccc/deploys)

This portfolio was originally built immediately after I completed a bootcamp in Aug, 2020. It's had few improvements since then simply due to my focus turned to improving other skills, completing my AWS certifications and other time constraints with work. It's built using Gatsby, GraphQL, React, Framer Motion and Tailwind CSS.

I've recently revisited the project in Dec, 2021 to dockerise the application.

I've written a two-part blog about how I built this which is available on my portfolio or on [Dev.to](https://dev.to/danielnorris/how-to-build-a-portfolio-using-gatsby-part-1-1kma).

# Installation

## Prequisities
If you want to run this locally you choose to do so by installing the required dependencies or better yet just use Docker. 

- Node ^14.18.2

- Docker Engine ^20.10.12 (optional)
- Docker Compose ^1.18.0 (optional)

## Using Docker

### Install the repository

```bash
git clone git@github.com:daniel-norris/v2.git /var/apps/portfolio
```

### Run the Docker container

```
docker-compose up
```

### View the app

On a Windows host, it's accessible at http://localhost:8000.

## Scripts
The `run` and `npm` bash scripts are wrappers for the docker-compose exec command. 

Any docker-compose command can be run on the container using, e.g.:
`./run bash`

Npm or any docker-compose command can be run on the container using, e.g.:
`./npm install`