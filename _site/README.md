# bushwick-brewing-tour

Website for my public walking tour of [Bushwick Brewing History](https://www.bushwickbrewingtour.com/)

Built with [Jekyll](https://jekyllrb.com/) and using [Cloudflare Pages](https://developers.cloudflare.com/pages) instead of [GitHub Pages](https://pages.github.com/) for better [performance](https://www.youtube.com/watch?v=TteAQq25_Ns). Migration guide [here](https://developers.cloudflare.com/pages/migrations/migrating-jekyll-from-github-pages/) for reference.

### Local Development

set Ruby version:

```
rvm list  
rvm use ruby-2.5.5
```

To install gems:

```
bundle install
```

To build the site:

```
<bundle exec> jekyll build
```

To run a local server:

```
<bundle exec> jekyll serve
```

view compiled site at

```
http://localhost:4000
```

### Deployment

push to `master` branch
