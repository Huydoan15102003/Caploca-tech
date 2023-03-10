import { View, Text, Dimensions} from 'react-native'
import styles  from '../styles'
import {LineChart} from "react-native-chart-kit";
import React, { useState}  from 'react'

const MidChart = () => {
    const [chartHeight, setChartHeight] = useState(0);
    const onLayout=(event)=> {
        const {x, y, height, width} = event.nativeEvent.layout;
        setChartHeight(height);
    }
    

    const chartConfig = {
        backgroundColor: "#0d0b0b",
        backgroundGradientFrom: "#0d0b0b",
        backgroundGradientTo: "#0d0b0b",
      
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForLabels:{
          fontSize: 15,
          fontFamily: 'Montserrat'
        },
        
      };
      
      const screenWidth = Dimensions.get("window").width;
      const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [20, 45, 28, 80, 90, 43],
            
            
            color: (opacity = 1) => `rgba(175, 193, 112, ${opacity})`, // optional
            strokeWidth: 5// optional
          },
          {
            data: [60, 10, 10, 10, 10, 10],
            
            
            color: (opacity = 1) => `rgba(255, 188, 164, ${opacity})`, // optional
            strokeWidth: 5 // optional
          }
        ],
        // legend: ["Rainy Days"] // optional
      };
      
  return (
    <View style={styles.MidChartContainer} onLayout={onLayout}>
          <LineChart
            data={data}
            width={screenWidth}
            height={chartHeight}
            chartConfig={chartConfig}
            bezier
          />
        </View>
  )
}

export default MidChart