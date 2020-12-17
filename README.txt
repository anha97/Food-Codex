INF133-FinalProject
Avineesh Kompella, Andrew Ha, Matthew Corpus

Overview: 
The codex project displays a desktop-friendly database of different foods and their categories, as provided by TheMealDB API. Once the codex loads, the user is given a display of random foods. When one of these items is hovered over or clicked by the user, information about it is displayed on the right side of the screen. This information mainly revolves around the recipe for that dish, 
including a picture, a description (including ingredients), and instructions on how to prepare it. This recipe codex provides convenient and helpful information for users in a user-friendly and appealing manner. We utilized HTML, CSS, TypeScript, Bootstrap, and Angular for the codex project.


To run the Food Codex:
    1 - Install Angular within the food-codex file
    2 - Type the command 'cd food-codex' inside of the terminal to go food-codex folder
    3 - Run the command 'ng serve' inside of the terminal
    4 - Be amazed

Features:
    - Loading the page for the first time will load 20 random food cards on the left
    - Users can hover over any cards on the left, and it’s information will be displayed on the right side of the screen
    - Cards on the left include a thumbnail image, the name of the food, its area and its category
    - Clicking the “Select” button at the bottom of each card will keep the selected card information on the right
    - The right side display will show more recipe information, including the ingredients, measurements, instructions, and a link to the original source
    - Users can view the recipe for a selected dish in the display on the right side of the screen
    - Users can navigate to different categories in a navigation bar at the top
    - Clicking on a category will display all the food cards in that category
    - Users can also click the “Randomize!” button to display another 20 random food cards

Notes:
    - This app is not compatible for small-screen devices. 
    - The search bar bonus feature was not implemented in the final app.

Resources/References:
https://angular.io/guide/inputs-outputs (Parent/Child)
https://angular.io/guide/component-overview (Component)
https://angular.io/guide/two-way-binding (Two-way bindings)
https://angular.io/guide/event-binding (Event bindings)
https://angular.io/guide/http (Requesting data from a server)
https://stackoverflow.com/questions/20079782/changing-the-space-between-each-item-in-bootstrap-navbar (Spacing between navbar items)
https://www.themealdb.com/api.php (MealDB API)
https://stackoverflow.com/questions/28261287/how-to-change-btn-color-in-bootstrap (Changing button colors)
https://blog.hubspot.com/website/center-div-css#:~:text=You%20can%20do%20this%20by,the%20div)%20vertically%20and%20horizontally (Centering divs)
https://stackoverflow.com/questions/39325414/line-break-in-html-with-n/45178556 (Line Break in HTML)
https://stackoverflow.com/questions/8573890/using-new-line-n-in-string-and-rendering-the-same-in-html (New Lines in string)
https://stackoverflow.com/questions/15551779/open-link-in-new-tab-or-window (Opening a new link in tab)
https://stackoverflow.com/questions/41664991/bootstrap-4-how-do-i-center-align-a-button (Center Aligning button)
https://stackoverflow.com/questions/48757335/how-to-align-the-button-at-the-bottom-with-bootstrap-4/48757628 (Aligning button bottom)
https://getbootstrap.com/docs/4.0/utilities/spacing/ (Bootstrap Spacing)
https://getbootstrap.com/docs/4.0/utilities/sizing/ (Bootstrap Sizing)
https://inf133-fa20.markbaldw.in/assignments/a3.html (How to make requests/communicate with the webserver)
