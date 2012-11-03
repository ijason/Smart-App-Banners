Smart-App-Banners
=====================

**Script/CSS to include smart app banners in browsers other than Safari for iOS 6+**

![Smart App Banner Chrome Example](http://ijasoneverett.com/assets/img/chrome.png)

Tested on Chrome for iOS

## Usage

Include the meta tag required by Apple to display smart app banners in iOS 6.

```html
<meta name="apple-itunes-app" content="app-id=123456789" />
```

Drop the smart-app-banner.min.css stylesheet into your document's `<head>`.  Change the file path to reflect your own structure.

```html
<link href="./css/smart-app-banner.min.css" rel="stylesheet">
```

Include smart-app-banner.min.js file at the end of your page.  Be sure to include the jquery library if your aren't doing so already.  Again, change the file path to reflect your own structure.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="./js/smart-app-banner.min.js"></script>
```

Copy start-rating.png into an img directory on your server.

*Note: Responsive or mobile web pages are required for optimal app banner display.*

## Credit

- Kurt Zenisek @ kzeni.com - Banner styling and animation. http://kurtzenisek.com/p/smart-web-banner/
- Abdullah Rubiyath - Star Rating System.  http://www.itsalif.info/content/displaying-star-rating-using-css-sprites

## Contact

Jason Everett

- https://github.com/ijason
- http://twitter.com/ijayson66

##License
Smart-App-Banners is licensed under the &#9786; license. (http://licence.visualidiot.com/)