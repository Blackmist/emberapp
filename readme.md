An example single-page application that uses Ember.js for the client framework and ember-mobile and Windows Azure Mobile Services for data.

1. Provision a new Windows Azure Mobile service and create a table named 'posts'. Obtain the connection information for this new table. [This](http://blogs.msdn.com/b/silverlining/archive/2013/05/13/web-client-development-with-ember-js-and-windows-azure-mobile-services-part-3.aspx) has some details on accomplishing that.

2. Edit the app.js file and use the values obtained from the previous step to fill out this line:

        var client = new WindowsAzure.MobileServiceClient('https://yourmobilesvc.azure-mobile.net/', 'yourmobilesvckey');

3. Use the following commands from the emberapp directory to install the various bits it requires:

        npm install
        bower install

    You may also need to install Ruby, and the Compass gem.

4. Start the local server with `grunt server`. This should launch the browser and display the application.