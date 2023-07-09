const state={
    user: {
        loggedIn: true,
        isSubscribed: true
    }

};
const getters={
    auth(state)
    {
        return state.user
    }

};
const actions={

};
const mutations={

}
export default{
    state,
    getters,
    actions,
    mutations 
}