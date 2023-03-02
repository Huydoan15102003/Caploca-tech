import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 346,
        height: 135,
        backgroundColor: '#252429',
        borderRadius: 20,
        marginHorizontal: 15,
        // shadowOffset: {width: 0, height: 1},
        // shadowRadius: -2,
        // shadowColor: '#0000001F',
        // shadowOpacity: 16,
    },
    viewContainer: {
        paddingTop: 28,
        paddingLeft: 41,
        paddingBottom: 57,
    },
    title: {
        color: '#6A747E',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
    },
    midContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    currency: {
        color: '#6A747E',
        fontWeight: '600',
        fontSize: 24,
    },
    amount: {
        color: '#FAE1D0',
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 5,
    },
    botContainer: {
        width: 200,
        flexDirection: 'row',
    },
    account: {
        color: '#6A747E',
        marginLeft: 10,
        marginTop: 5,
    }
});

export default styles;