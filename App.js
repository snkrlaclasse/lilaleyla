import React from 'react'
import {useRoutes} from 'hookrouter'
import Home from './components/home/home'
import Login from './components/login/login'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from './firebase/firebase'
import {View, Text} from 'react-native'
import Pagea from './components/pagea/pagea'
import Pageb from './components/pageb/pageb'



const authroutes = {
    '/': () => <Home/>,
    '/pagea' : () =><Pagea/>,
    '/pageb' : () =><Pageb/>
};

const nonauthroutes ={
    '/':()=> <Login/>
}

function App(){
const [user, initialising, error] = useAuthState(firebase.auth());


const authroutesresult = useRoutes(authroutes)
const nonauthresult = useRoutes(nonauthroutes)
    

if (error){
    return <View><Text>Error: {error}</Text></View>
}

if (initialising){
    return <View><Text>Initialisierifizierung</Text></View>
}
if (user){
    return authroutesresult
    }else{
    return nonauthresult
    }

}

export default App
