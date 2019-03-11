//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet,KeyboardAvoidingView,SafeAreaView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import LoginForm from './LoginForm';

// create a component
class Login extends Component {
    render() {
        return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled >

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../../images/kbilim.png')} />
                  
                    </View>
               <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <LoginForm {...this.props} />
                    </TouchableWithoutFeedback>
               </SafeAreaView>
               
         
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

//make this component available to the app
export default Login;