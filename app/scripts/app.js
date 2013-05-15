/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create();
  //create a the mobile service client...
  var client = new WindowsAzure.MobileServiceClient('https://larrymob.azure-mobile.net/', 'nzlwbbEtQVkIPAJkznmahmnvMMXTzs45');


// ember-model-based adapter
  Ember.WAMAdapter = Ember.Object.extend({
    table: null,
    init: function() {
      this.table = this.get('table');
    },

    find: function(record, id) {
      var query = this.table.where({ id: id });
      return query.read().then(function(data) {
        Ember.run(record, record.load, data);
      });
    },

    findAll: function(klass, records) {
      return this.table.read().then(function(data) {
        Ember.run(records, records.load, klass, data);
      });
    },

    findQuery: function(klass, records, params) {
      var query = this.table.where(params);
      return query.read().then(function(data) {
        Ember.run(records, records.load, klass, data);
      });
    },

    createRecord: function(record) {
      return this.table.insert(record.toJSON()).then(function(data) {
        Ember.run(function() {
          record.load(data.id, data);
          record.didCreateRecord();
        });
      });
    }
  });

  var attr = Ember.attr;
  //define model
  App.Post = Ember.Model.extend({
    id: attr('number'),
    title: attr('string'),
    author: attr('string'),
    body: attr('string'),
    posted: attr('date')
  });

  
  //Point the adapter at the table you want to use.
  App.Post.adapter = Ember.WAMAdapter.create({ table: client.getTable('posts') });


  // Newpost controller
  App.NewpostController = Ember.ObjectController.extend({
    title: '',
    body: '',
    authStateBinding: Ember.Binding.oneWay('App.LoginStateManager.currentState.name'),
      authState: null,
    isAuthenticated: function () {
          return (this.get('authState') == 'isAuthenticated');
      }.property('authState'),
    save: function() {
      //create the post
      var now = new Date();
      var post=App.Post.create({
        title: this.get('title'),
        body: this.get('body'),
        posted: now.toString('dddd, MMMM, yyyy'),
      });
      post.save();
      // set these back to '' so the form is pretty
      this.set('title','');
      this.set('body','');
      //transition back to posts
      this.transitionToRoute('posts');
    }
  });

  App.Router.map(function () {
    // put your routes here
    this.resource('posts', function() {
      this.resource('post', { path: ':post_id' });
    });
    this.resource('newpost');

  });

  App.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('posts');
    }
  });
  App.PostsRoute = Ember.Route.extend({
    model: function () {
      return App.Post.findAll();
    }
  });

  //login statemachine
  App.LoginStateManager = Ember.StateManager.create({
      initialState: "isNotAuthenticated",
      isAuthenticated: Ember.State.create({
          enter: function () {
              console.log("enter " + this.name);
          },
          logout: function (manager, context) {
              manager.transitionTo('isNotAuthenticated');
          }
      }),
      isNotAuthenticated: Ember.State.create({
          enter: function () {
              console.log("enter " + this.name);
          },
          login: function (manager, credentials) {
              console.log(credentials);
              manager.transitionTo('isAuthenticated');
          }
      })
  });

  //Application controller, since we want login to be an application wide thing
  //login/logout events are bubbled up to here regardless of the page you are on
  App.ApplicationController = Em.Controller.extend({

      authStateBinding: Ember.Binding.oneWay('App.LoginStateManager.currentState.name'),
      authState: null,

      isAuthenticated: function () {
          return (this.get('authState') == 'isAuthenticated');
      }.property('authState'),
      login: function(provider) {
        client.login(provider).then(function(results) {
          App.LoginStateManager.send("login", client.currentUser);
        });
      },
      logout: function() {
        client.logout();
        App.LoginStateManager.send("logout");
      }
  });

})(this);
