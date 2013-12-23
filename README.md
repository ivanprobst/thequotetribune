thequotetribune
===============

tobd
* analytics check, if ko, fallback on this: https://npmjs.org/package/universal-analytics
* get everything up and running on instance reboot
* run through ok if DB fails? Use cases when quote/author missing
* fix wiki
* ...
* check TEST and ??? tags
* CLEAN AND REFILL THAT DB
* clean facebook url when error page

tobf
* create better template (separate in different parts to build the page)
* handle carriage return and links in quote txt
* clean data setting in quote and author
* monitor facebook access token
* db replications / backups
* nginx gzip, caching and static files handling (http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load/)
* store dev-prod configs (http://stackoverflow.com/questions/5869216/how-to-store-node-js-deployment-settings-configuration-files)

admin enhanced
* prevent adding author with existing author_id
* quote/author update/creation feedback on browser
* authorID and pubDate duplicate check
* delete items
* schedule in red when a quote is there but is missing something (date, etc.)
* handle schedule duplicates

modules
* twit: https://github.com/ttezel/twit
* request: https://github.com/mikeal/request
* rss: https://github.com/dylang/node-rss
* mongodb: http://mongodb.github.io/node-mongodb-native/
(* jquery: https://github.com/coolaj86/node-jquery)
(* jsdom)
(* xmlhttprequest)
(* geoip: https://github.com/bluesmoon/node-geoip)

icons ref
* quote: <a href="http://thenounproject.com/noun/quote/#icon-No23118" target="_blank">Quote</a> designed by <a href="http://thenounproject.com/i" target="_blank">irene hoffman</a> from The Noun Project
* share: <a href="http://thenounproject.com/noun/network/#icon-No14269" target="_blank">Network</a> designed by <a href="http://thenounproject.com/gregpabst" target="_blank">Greg Pabst</a> from The Noun Project
* save: <a href="http://thenounproject.com/noun/paper-clip/#icon-No17647" target="_blank">Paper Clip</a> designed by <a href="http://thenounproject.com/tinyxl" target="_blank">Erin Standley</a> from The Noun Project
* mail: <a href="http://thenounproject.com/noun/mail/#icon-No994" target="_blank">Mail</a> designed by <a href="http://thenounproject.com/marchaumann" target="_blank">Marc Haumann</a> from The Noun Project
* twitter: <a href="http://thenounproject.com/noun/tweet/#icon-No16224" target="_blank">Tweet</a> designed by <a href="http://thenounproject.com/joe_harrison" target="_blank">Joe Harrison</a> from The Noun Project
* fb: <a href="http://thenounproject.com/noun/facebook/#icon-No20845" target="_blank">Facebook</a> designed by <a href="http://thenounproject.com/Luboš Volkov" target="_blank">Luboš Volkov</a> from The Noun Project
* rss: <a href="http://thenounproject.com/noun/rss/#icon-No16950" target="_blank">RSS</a> designed by <a href="http://thenounproject.com/mollybramlet" target="_blank">Molly Bramlet</a> from The Noun Project
* info: <a href="http://thenounproject.com/noun/information/#icon-No2824" target="_blank">Information</a> designed by <a href="http://thenounproject.com/somerandomdude" target="_blank">P.J. Onori</a> from The Noun Project