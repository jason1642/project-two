## Project Two : News Hub

## The sites main(and new) features
- Home page allows user to find a stock by either entering company name or symbol, to add to their watchList, limit 15
- Upon clicking on watchlist cell, it will take user to a different render where it shows more details about that company
-News will be displayed in the middle and left side of the home page, upon clicking on it, it will take user to the news website 
- Ticker will display etfs in an infinite loop
- Stock prices will update every 20 seconds or so automatically
- User can remove a watchlist cell
- User can select what kind of news they want the website to display- (example: Technology, world, business)

## MVP 
- Display news on the main page both in the middle and left side section
- Allow user to add to a stock watchlist and have that data stored in the state
- Clicking on a watchList cell will bring up a stock information rendered page that shows more information and news about that company
- Using both grid and flex
- Create multiple tests
- Media queries

## Post MVP
- Add suggested input for when the user types something in the search box 
## Style : 
- Main section will use grid to divide sidebar news, main news, and watchlist
- Ticker between header and main section
- All price numbers


## UI/Logic : 
- Ticker info will be retrieved from a json file, and be used with the api to display that data
- User can still add to their watchlist even if they are on the information page
- Two input buttons, one will take user to stock info page of the input and not add it to the watchlist, the other will just add it to the watchlist. If they exist
- Stock information page will require the name of the company the user selected to use that data to get specific news and stats about the company


## Components : 
- Header
- Ticker
- Side News
- Main News
- Watch List
- Stock Info Page

# Component Heirarchy
```
-src
--components
 -Header
  -Header.js
  -Header.css
 -MainNews
  -MainNews.js
  -MainNews.css
 -SideNews
  -SideNews.js
  -SideNews.css
 -StockDetail
  -StockDetail.js
  -StockDetail.css
 -Ticker
  -Ticker.js
  -Ticker.css
 -WatchList
  -WatchList.js
  -WatchList.css
  ```
  
# Main Page
![Main page](https://github.com/jason1642/project-two/blob/master/Screen%20Shot%202020-03-29%20at%2010.53.38%20PM.png)

# Info page
![Info page](https://github.com/jason1642/project-two/blob/master/Screen%20Shot%202020-03-29%20at%2011.47.10%20PM.png)
## API's used
- News API : https://developer.nytimes.com/
- Stock data API : https://iexcloud.io/console/
- Company news API : https://newsapi.org/
