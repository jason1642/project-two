## Project Two : Aliantra II - a bit closer to yahoo finance

## The sites main(and new) features
-Home page allows user to find a stock by either entering company name or symbol, to add to their watchList, limit 15
- Upon clicking on watchlist cell, it will take user to a different render where it shows more details about that company
-News will be displayed in the middle and left side of the home page, upon clicking on it, it will take user to the news website 
- Ticker will display etfs in an infinite loop
- Stock prices will update every 20 seconds or so automatically
- User can remove a watchlist cell
- User can select what kind of news they want the website to display- (example: Technology, world, business)
## Style : 
- Main section will use grid to divide sidebar news, main news, and watchlist
- Ticker between header and main section
- All price numbers
## Logic : 
- Ticker info will be retrieved from a json file, and be used with the api to display that data
Components : 
-Header
-Ticker
-Side News
-Main News
-Watch List
-Stock Info Page
![Main page
#API's used
- News API : https://developer.nytimes.com/
- Stock data API : https://iexcloud.io/console/
- Company news API : https://newsapi.org/
