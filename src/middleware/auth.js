export default function auth({next,store}){
   
   if(!store.state.user.loggedIn) {

    return next({
        name:'LoginPage'
    })

   }
   return next()
}