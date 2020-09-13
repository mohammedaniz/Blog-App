const state = {
    blogs : []
};

const getters  = {
    'GET_ALL_BLOGS':(state) => {
        return state.blogs;
    }
}

const mutations = {
    'SET_ALL_BLOGS_MUTATION' :(state,payload) => {
        state.blogs = payload
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