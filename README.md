# NewTabFirefox
A custom new tab file for Firefox with a digital clock, a Google search bar, and Nord-based color scheme.
## Google Search
This page uses my personal *Search engine ID*, which has **Safe Search disabled**. If you're fine with this you don't need to change it, otherwise:  
1. Set up your own programmable search bar [here](https://programmablesearchengine.google.com/cse/create/new)
2. For *Sites to search* you can fill in whatever, later on you can remove it again and set it to search the entire web.
3. Customize the look and feel to reflect the colors op the page (all colors are defined at the top of the style.css file).  
4. Add your personal *Search engine ID* to the url in the script tag near the top of the page:
    <script async src="https://cse.google.com/cse.js?cx=Search_engine_ID"></script>
5. The search should now appear and work correctly.

**Note that leaving in my key does not give me access to your search results as I would have to have added Google Analytics in here as well (which, as you can see in the source, there isn't).**  
But again, feel free to set up your own search engine as per the instructions above.
## Setting up Firefox
To use this as your *New Tab* page
1. Edit *Firefox Config/firefox.cfg* to reflect the path to the HTML file:
    var newTabURL = "file:///C:/path/to/index.html";
2. Copy *Firefox Config/firefox.cfg* to the root directory of your Firefox installation.
3. Copy *Firefox Config/defaults/prefautoconfig.js* to the same folder within the root directory of your Firefox installation (*/defaults/pref/* should already exist).
4. Restart Firefox if it was already opened.