import Vue from 'vue'
import gridworks from './js/gridWorksVue.vue'
import titlemain from './js/infoTitle.vue'
import './scss/common.scss'
import fullpage from 'fullpage.js'
import './js/common.js'

var fullPageInstance = new fullpage('#fullpage', {
  navigation: true,
});

Vue.config.productionTip = false;

const vm = new Vue({
  el: '#table',
  data: {
    items: [{
        name: '',
        quantity: 0,
        price: 0,
    }],
    total: '',
    error: [],

},
methods: {
    addNewItem() {
        if (this._checkForm()) {
            this.items.push({
                name: this.items.name,
                quantity: this.items.quantity,
                price: this.items.price,
            });
            localStorage.setItem('items', JSON.stringify(this.items));
            this.calculate();
        }
    },
    deleteThisItem(index) {
        this.items.splice(this.items.indexOf(index), 1);
        localStorage.setItem('items', JSON.stringify(this.items));
        this.calculate();
    },
    editThisItem(item) {
        console.log(item);
    },
    calculate() {
        var sum = 0;
        this.items = JSON.parse(localStorage.getItem('items'));
        this.items.forEach(element => {
            sum += Number(element.price) * Number(element.quantity);
        });
        this.total = '$' + sum;

    },

    _checkForm: function (e) {
        this.error = [];

        if (!this._validNumber(this.items.quantity)) {
            this.error.push('Укажите колличество.');
            if (!this._validNumber(this.items.price)) {
                this.error.push('Укажите цену.');
            }
            return false;
        }
        if (!this._validNumber(this.items.price)) {
            this.error.push('Укажите цену.');
            if (!this._validNumber(this.items.quantity)) {
                this.error.push('Укажите колличество.');
            }
            return false;
        }

        if (!this.error.length) {
            return true;
        }

        e.preventDefault();
    },

    _validNumber: function (number) {
        var re = /[0-9]/;
        return re.test(number);
    }

},
mounted() {
    if (localStorage.items) {
        try {
            this.items = JSON.parse(localStorage.getItem('items'));
            this.calculate();
        } catch (e) {
            localStorage.removeItem('items');
        }
    }
},
  components: {
    gridworks,
    titlemain
  }
})
