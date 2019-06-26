import React, {useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import firebase from '../../firebase/firebase'
import {useNavigation} from 'react-navigation-hooks'

 
function Header(props){
    const { navigate } = useNavigation();
    const logout = () => {
        firebase.auth().signOut();
      };
      useEffect(() => {
        // Update the document title using the browser API
       
      });
    return (
        <View>
            
           <Text>Header</Text>
           <Text onPress={() =>
           navigate('Home')
          }>Home</Text>
           <Text onPress={() =>
           navigate('Pagea')
          }>Page B</Text>
          <Text onPress={() =>
            navigate('Pageb')
          }>Page B</Text>
           <Button
           onPress={logout}
           title='logout'/>
        </View>
    )
}

export default Header
