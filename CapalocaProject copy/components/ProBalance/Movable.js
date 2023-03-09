import React, { Component } from "react";
import { Animated, PanResponder, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'

export class Movable extends Component {
 constructor(props) {
    
   super(props);

   // Initialize state
   this.state = {
     // Create instance of Animated.XY, which interpolates
     // X and Y values
     animate: new Animated.ValueXY() // Inits both x and y to 0
   };

   // Set value of x and y coordinate
   this.state.animate.setValue({ x: 0, y: 0 });
    // Initialize panResponder and configure handlers
    this._panResponder = PanResponder.create({
        //     
        // Asks to be the touch responder for a
        // press on the View
        //
        onMoveShouldSetPanResponder: () => true,
        //
        // Actions taken when the View has begun
        // responding to touch events
        //
        onPanResponderGrant: () => {
          //
          // Set offset state.animate to prevent
          // Animated.View from returning to 0      
          // coordinates when it is moved again.
          //
          this.state.animate.setOffset({
            x: this.state.animate.x._value,
            y: this.state.animate.y._value
          });
          //
          // Set value to 0/0 to prevent AnimatedView
          // from "jumping" on start of
          // animate. Stabilizes the component.
          //
          this.state.animate.setValue({x: 0, y: 0})
        },
        //
        // The user is moving their finger
        //
        onPanResponderMove: (e, gesture) => {
          //
          // Set value of state.animate x/y to the
          // delta value of each
          //
          this.state.animate.setValue({
            x: gesture.dx,
            y: gesture.dy
          });
        },
        //
        // Fired at the end of the touch
        //
        onPanResponderRelease: () => {
          //
          // Merges the offset value into the
          // base value and resets the offset
          // to zero
          //
          this.state.animate.flattenOffset();
        }
      });
   } // End of constructor
   
     render() {
    const styles = StyleSheet.create({
            button: {
              width: 40,
              height: 40,
              backgroundColor: "#252429",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderColor: "#656F77",
              borderWidth: 2,
              //boxShadow: "1px 3px 10px 1px #656F77",
              
            },
            PlushIcon:{
              color: '#656F77',
              fontSize: 26,
              //boxShadow: "1px 1px 10px 1px #252429",
            },
          });
      return (
        <Animated.View
          // Pass all panHandlers to our AnimatedView
          {...this._panResponder.panHandlers}
          //
          // getLayout() converts {x, y} into 
          // {left, top} for use in style
          //
          style={[
            this.state.animate.getLayout(),
            styles.button
          ]}
        >
          <Entypo name='plus' color='#656F77' style={styles.PlushIcon} />
        </Animated.View>
      )
    }
    
    
 }