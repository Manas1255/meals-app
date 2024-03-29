import { View,Text, StyleSheet, Image,Pressable, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({id,title, imageUrl, duration, complexity, affordability}){


    const navigation = useNavigation();

    function selectMealItemHandler(){

        navigation.navigate('MealDetail', {
            mealId: id
        });
    }


    return(
        <View style={styles.mealItem}>
            <Pressable style={({pressed})=> 
            pressed ? styles.buttonPressed : null}
            onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}></Image>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}></MealDetails>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles=StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height:2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },  
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },

    buttonPressed:{
        opacity:0.5
    }

})