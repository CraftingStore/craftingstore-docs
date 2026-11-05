# Integrate CraftingStore into your website

There are a few ways how you can include your store into your website, some are better than others. We'll explain a few possibilities.

**Using an iFrame (not recommended)**

This is the oldest way to load a website into another one. An iframe will load your store directly into a page on your website. It works in most cases, but has its issues. Due to security changes in browsers, sites in iframes do not have a lot of permissions. So some functionality might break.

Example of an iframe:

```
<iframe src="https://example.craftingstore.net" height="200" width="300" ></iframe>
```

You can configure the height and width to your liking to make it fit correctly.

**Using the same theme. (recommended)**

Most bigger stores seem to be using this approach. They ask a designer to create two templates, one for their store, and one for their website. Then they configure their store to use "store.example.com" instead of our sub-domain and make sure that both sites have the same navigation bar. The transition between the two sites is seamless. The downside of this is that it requires you to hire a designer. It also requires the Silver plan on our service to use custom templates.