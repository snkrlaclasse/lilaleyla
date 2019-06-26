import React,{useState} from 'react'
import {View, Button,TextInput} from 'react-native'
import firebase from '../../firebase/firebase'
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

function login() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email,password);
    };


    //This shit aint gonna work cause google sucks... react-native-google-signin isch im projekt aber ha na nüt integriert..
    let provider = new firebase.auth.GoogleAuthProvider()
    const loginwithGoogle = (e) =>{
        e.preventDefault()
        firebase.auth().signInWithPopup(provider)
    }

    // LEYLA LOGIN: lilaleyla@schrumpfkopf.ch pw: 123456
    return (
        <View>
                <View>
                    <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    value={email}
                    onChangeText={(email)=>setEmail(email)}/>
                </View>
                <View>
                    <TextInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    value={password}
                    onChangeText={(password)=>setPassword(password)}/>
                </View>
                <View>
                    <Button 
                    onPress={login} 
                    title='login'/>
                    <Button
                    onPress={loginwithGoogle}
                    title='google login'/>
                </View>
        </View>
    )
}

export default login
