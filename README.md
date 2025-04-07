Likely supports following social networks and messengers:

* `facebook` – Facebook
* `linkedin` – LinkedIn
* `pinterest` – Pinterest
* `reddit` – Reddit
* `threads` – Threads
* `twitter` – Twitter
* `viber` – Viber
* `whatsapp` – WhatsApp
* `xcom` – x.com


## Setup

Link the files `likely.css` and `likely.js` from the compiled sources. Minified `.min.` versions also can be used for this.

If downloaded directly:
```html
<!-- Head -->
<link href="path/to/likely.css" rel="stylesheet">
<!-- End of body -->
<script src="path/to/likely.js" type="text/javascript"></script>
```

If installed with npm:

```html
<!-- Head -->
<link href="node_modules/@horoshop/likely/release/likely.css"
      rel="stylesheet">
<!-- End of body -->
<script src="node_modules/@horoshop/likely/release/likely.js"
        type="text/javascript"></script>
```

Then, create a `div` with the class `likely` and list necessary social networks:

```html
<div class="likely">
    <div class="facebook">Share</div>
    <div class="pinterest">Pin</div>
    <div class="telegram">Send</div>
    <div class="threads">Send</div>
    <div class="linkedin">Share</div>
    <div class="whatsapp">Send</div>
    <div class="viber">Send</div>
    <div class="reddit">Share</div>
    <div class="xcom">Share</div>
</div>
```

If you need several Likely widgets on the page, just create another `div` with the class `likely` and list the social networks in it.

### Using as a CommonJS module

Likely can be used as a CommonJS module, so you can use it within webpack or browserify build systems.

First, install Likely using npm:

```sh
$ npm install @horoshop/likely --save
```

Then, use it as CommonJS module somewhere in your program:

```js
var likely = require('@horoshop/likely');

// Finds all the widgets in the DOM and initializes them
likely.initiate();
```

## Service options
You can configure Likely by specifying `data-*` attributes on a button group with the `likely` class or on the button of a specific service.

Top-level options are passed down to all the services. They can also be overridden on an individual service tag.
* `data-url` – URL to share and load counters for, defaults to the current page URL. ⚠ Specify the full URL with the protocol – like in `https://ilyabirman.com` – because some social networks don’t recognize the partial one.
* `data-title` – Text that will be added to the shared URL. Defaults to the page title.
```html
<div class="likely" data-url="https://github.com/ilyabirman/Likely" data-title="My page">
    <!-- List of services -->
</div>
```

In 2020 most social networks rely on what is called [Open Graph Protocol](https://ogp.me/) to extract the information about shared links.
Below there is more information regarding how individual services support it,
but it's highly recommended to set up the proper <meta> tags for your page, to work in conjunction with Likely.

## Services
### Facebook
```html
<div class="facebook" data-quote="Best website ever!" data-hashtag="#puppies">Share</div>
```
* **url** - url to share.
* **hashtag** - a single word with hash(#) symbol, which is included in the post.
* **counter** - if provided, blocks the API call and instead shows the given value in the like counter

[Facebook Open Graph protocol documentation](https://developers.facebook.com/docs/sharing/webmasters)

### Linkedin
```html
<div class="linkedin">Post</div>
```
* **url** - url to share.

[Linkedin Open Graph protocol documentation](https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin).


### Pinterest
```html
<div class="pinterest" data-media="https://placekitten.com/200/400">Pin</div>
```
* **url** - url to share.
* **title** - text which is used as a comment to created pin.
* **media** - URL of an image that overrides the image in the Pin Create form.
If not provided, Pinterest will try to find image at the given webpage.
Use the this attribute to provide a better-quality version of the image if you have one.
* **counter** - if provided, blocks the API call and simply shows given value instead.

[Pinterest Open Graph protocol documentation](https://developers.pinterest.com/docs/rich-pins/overview/).

### Reddit
```html
<div class="reddit">Submit</div>
```
Reddit counter is calculated as a sum score of the 5 most up-voted posts for a given link, across all sub-reddits.
* **url** - url to share.
* **title** - title of the post, defaults to the page title.
* **counter** - if provided, blocks the API call and simply shows given value instead.

[Reddit Open Graph protocol documentation](https://github.com/reddit-archive/reddit/blob/master/r2/r2/lib/media.py#L725).

### Telegram
```html
<div class="telegram" data-title="Check this link above!">Send</div>
```
* **url** - url to share.
* **title** - text that appears after the link in the shared message, defaults to the page title.

[Telegram Open Graph protocol documentation](https://stackoverflow.com/questions/30160294).

### X and Twitter
```html
<div class="xcom" data-via="ilyabirman" data-hashtags="kittens,puppies">Xeet</div>
<div class="twitter" data-via="ilyabirman" data-hashtags="kittens,puppies">Tweet</div>
```
* **url** - url to share.
* **title** - comment that appears before the shared url.
* **via** - indicates a specific user a source of the information.
Adds a clickable username to the tweet, like so: `My page: https://google.com/ via @ilyabirman`
* **hashtags** - a comma-separated list of hashtags added to the tweet. Omit a preceding “#” from each hashtag.

[Twitter Open Graph protocol documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started).

### Viber
```html
<div class="viber">Send</div>
```
* **url** - url to share.
* **title** - text that appears on a separate line after the shared url.

⚠ Viber share messages are not editable in the client application,
so if you don't want the title to appear, please set empty `data-title=""` attribute on the Viber button.

⚠ Viber button works only if the user has Viber installed on their device.

[Viber Open Graph protocol documentation](https://stackoverflow.com/questions/34941283)

### Whatsapp
```html
<div class="whatsapp">Send</div>
```
* **url** - url to share
* **title** - text that precedes the link in the shared message, defaults to the page title.

[Whatsapp Open Graph protocol documentation](https://stackoverflow.com/questions/19778620).

## Additional info
### Reinitialize configuration on change data attributes
If you need to dynamically change the widget's configuration, you can re-initialize it:

```javascript
// Use global object, created by the library
likely.initiate();
// If you need to refresh the counters, pass the corresponding param,
// but be aware that it will issue xhr calls to all the relevant services.
likely.initiate({forceUpdate: true});
```

### How to disable the automatic counters
Counters are enabled by default, but there are two ways to disable them:
* To add `data-counters` attribute on the upper `likely` div with `"no"`value to disable all counters.
* Another option is to supply a custom value for `data-counter` attribute of the specific services.
Likely won't do an API request for those services and just display the given value instead.


### Light / dark theme
It's possible to use alternative (dark-mode suitable) styling by adding `likely-dark-theme` (or its old alias `likely-light`) class to the main `div.likely`
```html
<div class="likely likely-dark-theme">
    <!-- List of services -->
</div>
```
Additionally, if your website is responsive to users' color theme preferences, having `.likely-color-theme-based` will result in conditional switch between the themes.

### Supported browsers
We support IE 10+, Safari 9+ and the latest versions of Chrome, Firefox and Edge. Likely might work in the older versions too but we don’t maintain the compatibility on purpose.
