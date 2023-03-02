import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 195,
        height: 130,
        marginBottom: 40,
    },
    greeting: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 140, 
        marginBottom: 38,
    },
    form: {
        marginLeft: 36,
    },
    midContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 17,
        marginBottom: 29.5,  
    },
    rememberMe: {
        fontSize: 14,
        fontWeight: '500',
        paddingLeft: 10,

    },
    forgotPassword: {
        fontWeight: '500',
        fontSize: 14,
        color: '#57435C',
        paddingLeft: 80,
        textDecorationLine: 'underline',
    },
    signUp: {
        color: '#2B7979',
    },
    otherMethod: {
        color: 'grey',
        fontSize: 14,
        fontWeight: '500',  
    }

});

export default styles;