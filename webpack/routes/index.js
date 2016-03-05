var feedparser = require("ortoo-feedparser")

module.exports = {

  buoys: function (req, res) {
    buoyUrl = "http://www.ndbc.noaa.gov/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100"
    feedparser.parseUrl(buoyUrl, function(err, meta, response) {
      res.json(response)
    })
  }

}
