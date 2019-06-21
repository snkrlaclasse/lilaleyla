import React from 'react'
import {View, Text,Button} from 'react-native'
import firebase from '../../firebase/firebase'
import {A} from 'hookrouter'

function Header(){


    return (
        <View>
            
           <Text>Header</Text>
           <A href='/'>Home</A>
           <A href='/pagea'>Page B</A>
           <A href='/pageb'>Page B</A>
        </View>
    )
}

export default Header
