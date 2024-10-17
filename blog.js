/**
 * JS for blog post exercise
 * You will be writing JavaScript to add the functionality of adding a new blog post to the blog.
 
  addEntry function specification:
  - An article should be appended to the #posts container. Inside should be a third level heading followed by a paragraph. The article should have the class .post added to it
  - The third level heading text content should be the text "Date: " followed by the date submitted. The paragraph's text content should be the text "Entry: " followed by the entry submitted
    - Hint: to grab the text from a form element use .value
  - If a user double clicks on any of the blog posts, the post that was clicked should be removed from the page
  The content in #date and #entry should be cleared

 */

  "use strict";
  (function() {
  
    window.addEventListener("load", init);
  
    /**
     * sets up necessary functionality when page loads
     */
    function init() {
      qs("button").addEventListener("click", addEntry);
    }
  
    /**
     * TODO
     * adds a blog entry to the blog post page
     */
    function addEntry() {
      let entryDate = id("date").value;   // Inputs the date
      let blogEntry = id("entry").value;  // Inputs the blog entry
  
      //  This will check if date and entry are blank
      if (entryDate !== "" && blogEntry !== "") {
  
        // Creates the article element
        let post = document.createElement("article");
        post.classList.add("post");
  
        // Creates the date header and set to (h3)
        let dateHeader = document.createElement("h3");
        dateHeader.textContent = "Date: " + entryDate;
  
        // Creates the entry paragraph (p)
        let entryPara = document.createElement("p");
        entryPara.textContent = "Entry: " + blogEntry;
  
        // adds the date header and the entry paragraph to the blog post 
        post.appendChild(dateHeader);
        post.appendChild(entryPara);
  
        // inserts the newly created blog post to the blog page
        id("posts").appendChild(post);
  
        // Clears the input fields, after the user has submitted a blog entry
        id("date").value = "";
        id("entry").value = "";
  
        // Add an event listener to remove the post on double-click
        post.addEventListener("dblclick", function() { 
          post.remove();  // deletes the element from the page
        });
      }
    }
    
      /**
       * Returns the element that has the ID attribute with the specified value.
       * @param {string} name - element ID.
       * @returns {object} - DOM object associated with id.
       */
      function id(id) {
        return document.getElementById(id);
      }
    
      /**
       * Returns first element matching selector.
       * @param {string} selector - CSS query selector.
       * @returns {object} - DOM object associated selector.
       */
      function qs(selector) {
        return document.querySelector(selector);
      }
    })();