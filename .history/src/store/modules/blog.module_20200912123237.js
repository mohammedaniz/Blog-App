const state = {
    blogs : [],
    errors : {
        blogErrors : null
    }
};

const getters  = {
    'GET_ALL_BLOGS':(state) => {
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
        if(errors)
            state.errors.blogErrors = errors;
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