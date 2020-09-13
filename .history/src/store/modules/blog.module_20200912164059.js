const state = {
    blogs : [],
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
    }

    
}

const mutations = {
    'SET_ALL_BLOGS_MUTATION' :(state,payload) => {
        state.blogs = payload
    },
    'SET_BLOG_ERRORS_MUTATION' :(state, errors)=> {
        state.loadingStatus = true
        if(errors){
            state.errors.blogErrors = errors;
            state.loadingStatus = false
        }
            
    }

}

const actions = {
    'SET_ALL_BLOGS_ACTION': ({commit},payload) => {
        commit('SET_ALL_BLOGS_MUTATION',payload);
    },
    'SET_BLOG_ERRORS_ACTION' :({commit}, errors)=> {
        
        if(errors)
            commit('SET_BLOG_ERRORS_MUTATION',errors);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}