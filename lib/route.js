// --------------------- configuration globale ---------------------
Router.configure({
    layoutTemplate: 'baseLayout'
});

// --------------------- Routes ---------------------
Router.route('/', function () {
    this.render('header',   {to: 'header'       });
    this.render('home',     {to: 'page-content' });
    this.render('footer',   {to: 'footer'       });
});
Router.route('/liste', function () {
    this.render('header',   {to: 'header'       });
    this.render('liste',    {to: 'page-content' });
    this.render('footer',   {to: 'footer'       });
});
Router.route('/statistique', function () {
    this.render('header',           {to: 'header'       });
    this.render('statistique',      {to: 'page-content' });
    this.render('footer',           {to: 'footer'       });
});

Router.onBeforeAction(function() {
    if(!Meteor.userId()){
        this.render('header',   {to: 'header'       });
        this.render('home',     {to: 'page-content' });
        this.render('footer',   {to: 'footer'       });
    } else {
        this.next();
    }
}, {only: [ 'liste', 'statistique' ]});