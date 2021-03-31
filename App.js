

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  USD: 0.014,
  EURO: 0.012,
  POUND: 0.0099,
  RUB: 1.02,
  AUD: 0.018,
  CAD: 0.017,
  YEN: 1.5,
  DINAR: 20.18,
  PKR: 2.15 
}

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPress = (currency) => {
    if(!inputValue)
    {
      return Snackbar.show({
        text:'Please enter a value',
        backgroundColor: '#E21717',
        textColor: '#DDD101',
      });
    }
    
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
  }
  return(
    <>
    <ScrollView 
    backgroundColor='rgb(27,25,100)'
    keyboardShouldPersistTaps='handled'
    contentInsetAdjustmentBehavior='automatic'
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}> 
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputText}
            keyboardType='numeric'
            placeholder='Enter Value'
            placeholderTextColor='#c1c1c1'
            value={inputValue.toString()}
            onChangeText={(inputValue)=>setInputValue(inputValue)}
            underlineColorAndroid={'#51E1ED'}
            >
          </TextInput>
        </View>
        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
            onPress={()=>buttonPress(currency)}
            key={currency}
            style={styles.converterButton}>
              <Text style={styles.convertButtonText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
    backgroundColor: 'rgb(255,255,0)',
  },
  convertButtonText: {
    color: 'rgb(255,0,255)',
    fontSize: 20,
  },
});
