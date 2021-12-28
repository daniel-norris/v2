# v2 Personal Portfolio

This portfolio was originally built immediately after I completed a bootcamp in Aug, 2020. It's had few improvements since then simply due to my focus turned to improving other skills, completing my AWS certifications and other time constraints with work. It's built using Gatsby, GraphQL, React, Framer Motion and Tailwind CSS. 

I've written a two-part blog about how I built this which is available on my portfolio or on [Dev.to](https://dev.to/danielnorris/how-to-build-a-portfolio-using-gatsby-part-1-1kma).

# Installation

## Prequisities
If you want to run this locally you choose to do so by installing the required dependencies or better yet just use Docker. 

- Node @ 14.18.2
- Docker Engine @ latest (optional)
- Docker Compose @ 1.18.0 (optional)

## Using Docker

### Install the repository

```bash
git clone git@github.com:daniel-norris/v2.git /var/apps/portfolio
```

### Install npm dependencies

```bash
npm i
```

### Run the Docker container

```
docker-compose up
```

### View the app

On a Windows host, it's accessible at http://localhost:8000.