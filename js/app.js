var initialCats = [
        {
            'name': 'Ashes',
            'imgSrc': 'img/22252709_010df3379e_z.jpg',
            'clickCount': 0,
            'imgAttribution': 'something',
            'nickname' : [{ 'nick': 'Bungle'},{ 'nick': 'George'},{ 'nick': 'Zippy'}]
        },
        {
            'name': 'Smoky',
            'imgSrc': 'img/434164568_fea0ad4013_z.jpg',
            'clickCount': 0,
            'imgAttribution': 'something',
            'nickname' : [{ 'nick': 'Bungle2'},{ 'nick': 'George2'},{ 'nick': 'Zippy2'}]
        },
        {
            'name': 'Kitty',
            'imgSrc': 'img/1413379559_412a540d29_z.jpg',
            'clickCount': 0,
            'imgAttribution': 'something',
            'nickname' : [{ 'nick': 'Bungle3'},{ 'nick': 'George3'},{ 'nick': 'Zippy3'}]
        },
        {
            'name': 'Oscar',
            'imgSrc': 'img/4154543904_6e2428c421_z.jpg',
            'clickCount': 0,
            'imgAttribution': 'something',
            'nickname' : [{ 'nick': 'Bungle4'},{ 'nick': 'George4'},{ 'nick': 'Zippy4'}]
        }];

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickname = ko.observableArray(data.nickname);
    this.levels = ko.computed(function(){
        if (this.clickCount() < 10) {
            return 'new born';
        }else if (this.clickCount() < 20) {
            return 'young';
        }else {
            return 'adult';
        };
    }, this);
};

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function(){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function(clickedCat){
        self.currentCat(clickedCat);
    };
}

ko.applyBindings(new ViewModel())