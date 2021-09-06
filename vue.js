var app = new Vue({
  el: '#app',
  data: {
    message: 'Привет, Vue!'
  }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  })

var app21 = new Vue({
  el:'#app21',
  data: {
    message: 'Новое сообщение'
  }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

var app31 = new Vue({
    el: '#app-31',
    data: {
      seen: true
    }
  })

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Изучить JavaScript' },
        { text: 'Изучить Vue' },
        { text: 'Создать что-нибудь классное' }
      ]
    }
  })

  var app41 = new Vue({
    el: '#app-41',
    data: {
      items: [
        { text: '111111' },
        { text: '22222' },
        { text: '333333' }
      ]
    }
  })

  /*new component*/

  Vue.component('todo-item', {
    template: '<li>Это одна задача в списке</li>'
  })
  
  var app = new Vue()

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Привет, Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Привет, Vue!'
    }
  })

  Vue.component('todo-item', {
    // Компонент todo-item теперь принимает
    // "prop", то есть входной параметр.
    // Имя входного параметра todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app = new Vue()

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Овощи' },
        { id: 1, text: 'Сыр' },
        { id: 2, text: 'Что там ещё люди едят?' }
      ]
    }
  })

  var vm = new Vue({
    el: '#example',
    data: {
      message: 'Привет'
    },
    computed: {
      // геттер вычисляемого значения
      reversedMessage: function () {
        // `this` указывает на экземпляр vm
        return this.message.split('').reverse().join('')
      }
    }
  })


var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'Пока вы не зададите вопрос, я не могу ответить!'
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Ожидаю, когда вы закончите печатать...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce — это функция lodash, позволяющая ограничить то,
    // насколько часто может выполняться определённая операция.
    // В данном случае мы ограничиваем частоту обращений к yesno.wtf/api,
    // дожидаясь завершения печати вопроса перед отправкой ajax-запроса.
    // Узнать больше о функции _.debounce (и её родственнице _.throttle),
    // можно в документации: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
        return
      }
      this.answer = 'Думаю...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Ошибка! Не могу связаться с API. ' + error
        })
    }
  }
})