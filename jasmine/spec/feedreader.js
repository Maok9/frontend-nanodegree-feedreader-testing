/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed ensures it has a URL defined and that the URL is not empty. */
        it('ensures that URL defined and not empty', function(){

            for(feed in allFeeds){
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);
            }
            
        });

        /* This test loops through each feed ensures it has a name defined and that the name is not empty. */
        it('ensures that name defined and not empty', function(){

            for(feed in allFeeds){
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).not.toBe(0);
            }
            
        });
    });


    
    describe('The menu', function(){
        
        /* This test ensures the menu element is hidden by default. */
        it('ensure that menu element is hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


         /* This test ensures the menu changes visibility when the menu icon is clicked and it hide when clicked again. */
        it('ensure visibility when the menu icon is clicked and hide when clicked again', function(){
            menu = $('.menu-icon-link');
            menu.trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    
    });

    
    describe('Initial Entries', function(){
        /* This test ensures when the loadFeed function is called and completes its work and it has at least a single .entry element within the .feed container. */
        beforeEach(function(done){
            loadFeed(0,done);
        }); 
        
       it('test if there at least a single entry within the feed container',function(){
        expect($('.feed .entry').length).not.toBe(0);
       });

    });

    
    describe('New Feed Selection', function(){
        /* This test ensures when a new feed is loaded by the loadFeed function that the content actually changes. */
        beforeEach(function(done){
            loadFeed(1,function(){
              before = $('.feed').html();
              
              loadFeed(2,function(){
                after = $('.feed').html();
                done();
              });
            });
          }); 
        it('ensures that the content is changes when new feed is loaded', function(){
            expect(before).not.toBe(after);
        });
    });
    
}());
