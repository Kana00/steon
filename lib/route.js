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