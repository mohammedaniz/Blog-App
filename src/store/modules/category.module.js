const state = {
    categories : [],
    errors : null,
    loadingStatus : false
};

const getters  = {
    'GET_ALL_CATEGORY':(state) => {
        console.log('Invocked  ----------- ', state.categories)
        return state.categories;
    },'GET_A_CATEGORY_BY_ID':(state) => {
        return (id) => {
            let categories = state.categories;
            if(id && categories){
                return state.categories.find(category => category.ID == id);
            }
        }
    }

    
}

const mutations = {
   'SET_ALL_CATEGORIES_MUTATION':(state, categories) => {
        if(categories){
            state.categories = categories
        }
    }

}

const actions = {
   
    'SET_ALL_CATEGORIES_ACTION':({commit},categories) => {
        if(categories){
            commit('SET_ALL_CATEGORIES_MUTATION',categories);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}