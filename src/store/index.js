
import { reactive, computed, onBeforeMount } from 'vue'

const state = reactive({
    drawer: null,
    ProductDict: Array,
    filter: '/',
    rand10: Array,
    pagination: 0,
    categoriesdict: Array,
    shoppingcart: [],
    wishlist: [],
    page: 1,
})
const methods = {
    toggleDrawer() {
        for (const item of state.categoriesdict) {
            item.open = false
        }

        return state.drawer = !state.drawer;
    },
    fetchdata() {
        fetch('https://raw.githubusercontent.com/christkv/ecommerce/master/preload_data/categories.json')
            .then(x => x.json())
            .then(x => methods.lister(x))

        fetch('../../products.json')
            .then(x => x.json())
            .then(x => methods.cleandata(x))
    },
    lister(rawCategories) {
        let list = []
        for (const item of rawCategories) {

            item.isAparent = (item.children.length > 0 && item.name != '/') ? true : false
            if (item.isAparent) {
                list.push(item)
            }
        }
        let parents = list
        let index = 0
        for(const item of parents){
            item.id = index
            item.open = true
            index++;
        }
        state.categoriesdict = parents

    },
    cleandata(rawProduct) {
        let ok = 0
        let id = 0
        const stack = []
        stack.push(rawProduct[0])
        for (const item of rawProduct) {
            ok = 0
            for (const stackelement of stack) {
                if (item.title == stackelement.title) {
                    ok = 0
                    break;
                }
                else {
                    ok = 1
                }
            }
            if (ok == 1) {
                if (!item.price) {
                    item.price = 1999
                }
                stack.push(item)
            }
        }
        stack.forEach(element => {
            element.id = id++
        });
        state.ProductDict = stack
        methods.categorize_get(1)
    },
    categorize_get(arg) {
        const stack = []
        for (const item of state.ProductDict) {
            if (item.category.includes(state.filter)) {
                stack.push(item)
            }
        }
        state.pagination = Math.ceil(stack.length / 12)

        const b = (12 > stack.length) ? stack.length : 12
        state.rand10 = stack.sort(() => Math.random() - 0.5 * Number(arg)).slice(0 + 12 * (state.page - 1), b + 12 * (state.page - 1))

    },

    filterchange(filter) {

        state.filter = String(filter)
        methods.categorize_get(0)
    },

    addlist(product, liste) {
        if (liste.indexOf(product) >= 0) {
            liste[liste.indexOf(product)].times += 1
        }
        else {
            product.times = 1
            liste.push(product)
        }
    },
    removelist(product, liste) {
        liste.splice(liste.indexOf(product), 1)
    },
}

const getters = {
    cost_cart: computed(() => {
        let coste = 0
        for (const product of state.shoppingcart) coste += product.price * product.times
        return coste / 100
    }),
    cost_wishlist: computed(() => {
        let coste = 0
        for (const product of state.wishlist) coste += product.price
        return coste / 100
    })
}

export default {
    state,
    methods,
    getters

}