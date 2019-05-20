(function() {
    let people = {
        people: ['Vasyl', 'Ivan', 'Petro', 'Andriy'],
        init: function() {
            this.cacheDom();
            this.bindEvent();
            this.render();
        },
        cacheDom: function() {
            this.el = $('.box');
            this.button = this.el.find('#add');
            this.input = this.el.find('#name');
            this.ul = this.el.find('.people');
        },
        bindEvent: function() {
            this.button.on('click', this.addPersonName.bind(this));
            this.ul.on('click', 'span.x', this.delPersonName.bind(this));
        },
        render: function() {
            this.ul.html('');
            let data = {
                people: this.people
            };
            for (let i = 0; i < data.people.length; i++) {
                this.ul.append('<li>' + data.people[i] + ' <span class="x">X</span></li>');
            }
        },
        addPersonName: function() {
            this.people.push(this.input.val());
            this.render();
            this.input.val('');
        },
        delPersonName: function(e) {
            let remove = $(e.target).closest('li');
            let span = this.ul.find('li').index(remove);
            this.people.splice(span, 1);
            this.render();
        }
    };
    people.init();
})();
    