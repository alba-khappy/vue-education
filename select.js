Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        isOpened: true,
        list: [
            { id: 0, text: 'Начальник' },
            { id: 1, text: 'Заместитель начальника' },
            { id: 2, text: 'Директор' }
        ],
        value: 'Должность'
    },
    methods: {
        toggleList: function () {
            this.isOpened = !this.isOpened;
            console.log('999');
        },
        selectItem: function (item) {
            this.value = item.text;
        }
    }
});

var app = new Vue({
    el: '#app2',
    data: {
        months: [
            {id:0, text: 'январь'}, 
            {id:1, text: 'февраль'}, 
            {id:2, text: 'март'},
            {id:3, text: 'апрель'}
        ],
        wDays: ["пон","вт","ср","чет","пят","суб","вос"]
        
    },
    methods: {
        toggleList: function () {
            this.isOpened = !this.isOpened;
            console.log('999');
        }
    }
});