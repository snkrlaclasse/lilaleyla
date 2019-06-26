import React from 'react'


import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from './firebase/firebase'
import {View, Text} from 'react-native'
import Authpages from './pages/Authpages'
import Nonauthpages from './pages/Nonauthpages'



function App(){
const [user, initialising, error] = useAuthState(firebase.auth());



    

if (error){
    return <View><Text>Error: {error}</Text></View>
}

if (initialising){
    return <View><Text>Initialisierifizierung</Text></View>
}
if (user){
    return <Authpages/>
        
     
    }else{
    return <Nonauthpages/>
 



    
    }

}

export default App
