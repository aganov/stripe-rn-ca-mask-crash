import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {CardField, StripeProvider} from '@stripe/stripe-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Stripe')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const StripeScreen = () => {
  return (
    <View style={styles.container}>
      <CardField
        postalCodeEnabled={false}
        cardStyle={styles.cardInput}
        style={styles.cardField}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <StripeProvider publishableKey="publishDatKey">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Stripe" component={StripeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginVertical: 16,
    padding: 16,
  },
  buttonText: {
    color: 'white',
  },
  cardField: {
    width: '90%',
    height: 48,
  },
  cardInput: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
});
