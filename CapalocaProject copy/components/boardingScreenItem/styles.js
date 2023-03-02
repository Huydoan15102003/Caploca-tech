import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: 481,
        height: 350,
        marginBottom: 30,
    },

    midContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        paddingVertical: 17,
    },

    description: {
        fontSize: 18,
        width: 191,
        alignItems: 'center',
        fontWeight: '400',
        color: 'grey',
        textAlign: 'center',
        marginBottom: 40,
    },
    btn: {
        backgroundColor: '#6F6CD9',
        width: 330,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textBtn: {
        fontSize: 18,
        color: '#FFFFFF',

    } 


});

export default styles;