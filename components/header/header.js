import React from 'react'
import {View, Text} from 'react-native'

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
