const state = {
    blogs : [],
    categories : [],
    errors : {
        blogErrors : null
    },
    loadingStatus : false
};

const getters  = {
    'GET_ALL_BLOGS':(state) => {
        console.log('Invocked  ----------- ', state.blogs)
        return state.blogs;
    },'GET_A_BLOG_BY_ID':(state) => {
        return (id) => {
            let blogs = state.blogs;
            if(id && blogs){
                return state.blogs.find(blog => blog.ID == id);
            }
        }
    },
    'GET_LOADING_STATUS_GETTER':(state) =>{
        return state.loadingStatus;
    }

    
}

const mutations = {
    'SET_ALL_BLOGS_MUTATION' : (state,payload) => {
        
        
        if(payload){
            
             (state.blogs = payload);
                state.loadingStatus = false
                
        }
        
        
    },
    'SET_BLOG_ERRORS_MUTATION' :(state, errors)=> {
        
        if(errors){
            state.errors.blogErrors = errors;
            // state.loadingStatus = false
        }
            
    },
    'SET_LOADING_TO_TRUE_MUTATION':(state) => {
        state.loadingStatus = true
    },'SET_LOADING_TO_FALSE_MUTATION':(state) => {
        state.loadingStatus = false
    },'SET_ALL_CATEGORIES_MUTATION':(state, categories) => {
        if(categories){
            state.categories = categories
        }
    }

}

const actions = {
    'SET_ALL_BLOGS_ACTION': ({commit},payload) => {
        commit('SET_LOADING_TO_TRUE_MUTATION');
        commit('SET_ALL_BLOGS_MUTATION',payload);
    },
    'SET_BLOG_ERRORS_ACTION' :({commit}, errors)=> {
        
        if(errors)
            commit('SET_BLOG_ERRORS_MUTATION',errors);
    },
    'SET_ALL_CATEGORIES_MUTATION':({commit},categories) => {
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