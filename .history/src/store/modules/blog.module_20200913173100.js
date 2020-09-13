const state = {
    blogs : [],
    categories : [],
    offset : 0,
    records : 2,
    errors : {
        blogErrors : null
    },
    loadingStatus : false
};

const getters  = {
    'GET_RECORDS_VALUE_GETTER':(state) => {
        return state.records;
    },
    'GET_ALL_BLOGS':(state) => {
        return state.blogs;
    },'GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER':(state) => {
        return state.blogs.sort((post1,post2) =>{
            return new Date(post2.date) - new Date(post1.date);
        }).slice(state.offset,state.records)
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
    },'SET_RECORDS_VALUE_MUTATION':(state, records) => {
        if(records){
            state.records = records
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
    'SET_RECORDS_VALUE_ACTION':({commit},records) => {
        if(records){
            commit('SET_RECORDS_VALUE_MUTATION',records);
        }
    },'SET_LOADING_STATUS_ACTION':({commit},status) =>{
        console.log('Status stats==========', status)
        if(status){
            commit('SET_LOADING_TO_TRUE_MUTATION')
        }else{
            commit('SET_LOADING_TO_FALSE_MUTATION')
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}