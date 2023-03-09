import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0D0B0B',
      },

      TopContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 14,
        
      },


      TopLeftBorder: {
        
        width: 35,
        height: 35,
        left: 3,
        borderWidth: 1,
        backgroundColor: "#242529",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
      },

      VectorPNG: {
        width: 5,
        height: 10,
      },

      textIcon:{
        paddingBottom: 10,
        fontFamily: "Montserrat-SemiBold",
        textAlign: "center",
        fontSize: 20,
        width: 125,
        color: "#AFC170",
        borderBottomColor: "#AFC170",
        borderBottomWidth: 2,
      },

      skipIcon:{
        fontFamily: "Montserrat",
        width: 35,
        height: 35,
      },
      
      MidContainer:{
        flex: 6,
        
      },

      MidBalanceContainer:{
        width:"100%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        
      },

      MidBalanceNumber:{
        paddingLeft: 20,
        fontFamily: "Montserrat-SemiBold",
        color: "#AFC170",
        fontSize: 25,
      },

      PlushIconContainer:{
        width: 40,
        height: 40,
        backgroundColor: "#252429",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: "#656F77",
        borderWidth: 2,
        //boxShadow: "1px 3px 10px 1px #656F77",
        position: "absolute",
        right: 10,
        top: 0,

        
      },
      PlushIcon:{
        color: '#656F77',
        fontSize: 26,
        //boxShadow: "1px 1px 10px 1px #252429",
      },

      MidSelectContainer:{
        height: "10%",
        width: '100%',
        color: "red",
        justifyContent: "center",
      },

      SelectButton:{ 
        width: 100, 
        height: 25, borderRadius: 30, 
        backgroundColor: '#0D0B0B', 
        borderWidth: 1, 
        borderColor: "#AFC170"
      },

      SelectButtonText:{
        color: "#AFC170", 
        fontFamily:"Montserrat", 
        fontSize: 11,
      },

      SelectDropdownStyle:{
        backgroundColor: '#0D0B0B',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginTop: -40,
      },

      dropdownRowStyle: {backgroundColor: '#0D0B0B', borderBottomColor: '#C5C5C5'},
      dropdownRowTxtStyle: {
        color: '#AFC170',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Montserrat',
      },

      MidChartContainer:{
        height: "60%",
      },
      

      MidBalanceInfoContainer: {
        height: "20%",
        justifyContent:"space-evenly",
        flexDirection: "row",
      },

      Income:{
        width: "40%",
        height: "55%",
        borderWidth: 2,
        borderColor: "#AFC170",
        borderRadius: 15,
        flexDirection: "row",
      },

      Outcome:{
        width: "40%",
        height: "55%",
        borderWidth: 2,
        borderColor: "#FFBCA4",
        borderRadius: 15,
        flexDirection: "row",
      },

      BalanceBorderLeft:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
      },
      BalanceBorderRight:{
        flex:2,
        justifyContent: "center",
      },

      Bot:{
        flex: 1,
        alignItems: "center",
      },

      closeLineContainer: {
        alignSelf: 'center',
        marginVertical: 5,
      },
      closeLine: {
        width: 40,
        height: 5,
        borderRadius: 3,
        backgroundColor: "#AFC170",
        marginTop: 9,
      },

      BotSheetBackground:{
        backgroundColor: "#0D0B0B",
        borderColor: "#AFC170",
        borderWidth: 2,
        borderRadius: 40,
      },

      BottomSheetHeader:{
        textAlign: "center", 
        fontFamily:'Montserrat-SemiBold', 
        color: '#AFC170'
      },

      BotSheetContainer:{
        marginTop: 20, 
        width: "90%", 
        alignSelf: "center"
      },

      BotSheetDay:{
        fontSize: 10,
        fontFamily:'Montserrat-SemiBold', 
        color: '#6A747E',
      },

      BotSheetImgContainer:{
        boderWidth: 1,
        width: 40, 
        justifyContent: "center", 
        height: 40, 
        borderRadius: 100, 
        alignSelf:"center"
      },

      BotSheetImg:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
      },
      BotSheetTo:{
        color: "#FFBCA4", 
        fontFamily: "Montserrat-SemiBold"
      },
      BotSheetTo2:{
        color: "#AFC170", 
        fontFamily: "Montserrat-SemiBold"
      },
      BotSheetInfo:{
        color: "#000000", 
        fontSize:9, 
        fontFamily: "Montserrat", 
        backgroundColor: "#FFBCA4", 
        width: "60%" , 
        borderRadius:10, 
        textAlign:"center", 
        paddingVertical: 3
      },
      BotSheetInfo2:{
        color: "#000000", 
        fontSize:9, 
        fontFamily: "Montserrat", 
        backgroundColor: "#AFC170", 
        width: "60%" , 
        borderRadius:10, 
        textAlign:"center", 
        paddingVertical: 3
      },
      BotSheetMoney:{
        textAlign: "right",
        color: "#FFBCA4",
        fontFamily: "Montserrat-SemiBold"
      },
      BotSheetMoney2:{
        textAlign: "right",
        color: "#AFC170",
        fontFamily: "Montserrat-SemiBold"
      },
      BotSheetTime:{
        textAlign: "right",
        textAlign: "right",
        color: "#6A747E", 
        fontSize: 10
      },
}); 

export default styles;