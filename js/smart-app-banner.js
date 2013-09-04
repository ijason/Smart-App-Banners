var origHtmlMargin = parseFloat($('html').css('margin-top'));

$(function() {      
  var iPad = navigator.userAgent.match(/iPad/i) != null; // Check if using an iPad
  var iPhone = navigator.userAgent.match(/iPhone/i) != null; // Check if using an iPhone
  var safari = navigator.userAgent.match(/Safari/i) != null; // Check if using Safari

  var standalone = navigator.standalone;
  var appBannerID = $('meta[name=apple-itunes-app]').attr("content"); //Check if using smart app banners
  if (!standalone && safari) { safari = false}; //Chrome is just a re-skinning of iOS WebKit UIWebView
  if (appBannerID != null) { 
    appBannerID = appBannerID.replace('app-id=',''); 
    if ((iPad || iPhone) && (!safari)) {
      $.getJSON('http://itunes.apple.com/lookup?id=' + appBannerID + '&callback=?', function(json) {
        if (json != null) {
          var artistName, artistViewUrl, artworkUrl60, averageUserRating, formattedPrice, trackCensoredName, averageUserRatingForCurrentVersion;
          artistName = json.results[0].artistName;
          artistViewUrl = json.results[0].artistViewUrl;
          artworkUrl60 = json.results[0].artworkUrl60;
          averageUserRating = json.results[0].averageUserRating;
          formattedPrice = json.results[0].formattedPrice;
          averageUserRatingForCurrentVersion = json.results[0].averageUserRatingForCurrentVersion;
          trackCensoredName = json.results[0].trackCensoredName;
          
          //make sure rating is not null. 
          if (averageUserRating == null) { averageUserRating = 0; }
          if (averageUserRatingForCurrentVersion == null) { averageUserRatingForCurrentVersion = 0; }

          var banner = '<div class="smart-banner">';  
          banner += '<a href="#" id="swb-close" onclick="CloseSmartBanner()">X</a>';
          banner += '<img src="' + artworkUrl60 + '" alt="" class="smart-glossy-icon" />';
          banner += '<div id="swb-info"><strong>' + trackCensoredName + '</strong>';
          banner += '<span>' + artistName + '</span>';
          banner += '<span class="rating-static rating-' + averageUserRating.toString().replace(".", "") + '"></span>';
          banner += '<span>' + formattedPrice + '</span></div>';
          banner += '<a href="' + artistViewUrl + '" id="swb-save">VIEW</a></div>';

          $('body').append(banner);                       
          $('.smart-banner').stop().animate({top:0},300);
          $('html').animate({marginTop:origHtmlMargin+78},300); 
        }
      }); 
    }
  }       
}); 
      
function CloseSmartBanner() {
  $('.smart-banner').stop().animate({top:-82},300);
  $('html').animate({marginTop:origHtmlMargin},300);
} 
