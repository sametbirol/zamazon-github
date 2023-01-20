
import { reactive} from 'vue'

const state = reactive({
    drawer: null,
    rawProduct: Array,
    rawCategories: Array,
    parents:[],
    children:[],
    cleanProduct: Array,
    filter: '/',
    rand10: Array,
    categoriesdict: Array,
    shoppingcart: [],
    wishlist: [],
    cost: 0,
})
const methods = {
    toggleDrawer(){
        for(const item of state.categoriesdict ){
            item.open = false
        }
        
     return state.drawer = !state.drawer;
    },
     fetchdata(){
        fetch('https://raw.githubusercontent.com/christkv/ecommerce/master/preload_data/categories.json')
        .then(x => x.json())
        .then(x => state.rawCategories = x)
        .then(() => methods.lister())
        .then(() => methods.createdict())

        fetch('../../products.json')
        .then(x => x.json())
        .then(x => state.rawProduct = x)
        .then(() => methods.cleandata())
        .then(() =>methods.categorize_get(state.filter))
    },
    lister(){
        for(const item of state.rawCategories){
            item.isAparent = (item.children.length > 0 && item.name != '/') ? true : false
            if(item.isAparent){
                state.parents.push(item.name.toUpperCase())
                state.children.push(item.children)
            }
        }
    },
    cleandata(){
        let ok = 0
        let id = -1
        const stack = []
        stack.push(state.rawProduct[0])
        for(const item of state.rawProduct){
            ok = 0
            for(const stackelement of stack){
                if(item.title == stackelement.title){
                    ok = 0
                    break;
                }
                else{
                    ok = 1
                }
            }
            if(ok == 1){
                if(!item.price){
                    item.price = 1999
                }
                stack.push(item)
            }
            stack.forEach(element => {
                element.id = id++
            });
            }
        
        state.cleanProduct = stack
    },
    categorize_get(){
        const stack= []
        const rand12= []
        for(const item of state.cleanProduct){
            if(item.category.includes(state.filter)){
                stack.push(item)
            }
        }
        const b = (12 > stack.length) ? stack.length : 12
        for(let i = 0; i < b; i++){
            let a = Math.floor(Math.random()*stack.length)
            rand12[i] = stack[a]
            stack.splice(a,1)
        }
        
        state.rand10 = rand12.sort(() => Math.random())
        
    },

    filterchange(arg1){
        
        state.filter = String(arg1)
        
        methods.categorize_get()
    },
    createdict(){
        let myDict = state.parents.map((category,index) => {
            return { name: category, id: index, open: true}
        })
        state.categoriesdict = myDict

    },
    listreview(product,arg,liste){
        console.log(liste)
        if(arg == '+'){
            liste.push(product)
            if(liste === state.shoppingcart){
                state.cost += product.price
            }
            console.log(product)
        }
        else if(arg == '-') {
            liste.splice(liste.indexOf(product),1)
            if(liste == state.shoppingcart){
                state.cost -= product.price
            }
            console.log(product)
        }
    }
}

export default{
    state,
    methods,
    
}