Gifts = new Mongo.Collection("gifts");

Router.route('/', function() {
    this.render('Home');
});

Router.route('Gifts/Create', function(){
    this.render('Create');
})

Router.route('Gifts/For/:tag', function() {
    var gifts = Gifts.find( {  tags: this.params.tag } );
    this.render('Gifts', {data: {gifts: gifts} });
})