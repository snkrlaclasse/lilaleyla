import React,{useState} from 'react'
import {View, Button,TextInput} from 'react-native'
import firebase from '../../firebase/firebase'

function login() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email,password);
    };

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
                </View>
        </View>
    )
}

export default login
