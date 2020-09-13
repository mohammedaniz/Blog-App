const state = {
    blogs : []
};

const getters  = {
    'GET_ALL_BLOGS':(state) => {
        return state.blogs;
    },'GET_A_BLOG_BY_ID':(state) => {
        return (id) => {
            let blogs = state.blogs;
            if(id && blogs){
                return state.blogs.find(blog => todo.id === id);
            }
        }
    }

    
}

const mutations = {
    'SET_ALL_BLOGS_MUTATION' :(state,payload) => {
        state.blogs = payload
    },
    'SET_A_BLOG_BY_ID_MUTATION':(state,payload) => {

    }
}

const actions = {
    'SET_ALL_BLOGS_ACTION': ({commit},payload) => {
        commit('SET_ALL_BLOGS_MUTATION',payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}