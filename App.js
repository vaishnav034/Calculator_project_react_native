import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  
  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  const renderButton = (value, style = {}) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => handlePress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.row}>
        {['7', '8', '9', '+'].map(renderButton)}
      </View>
      <View style={styles.row}>
        {['4', '5', '6', '-'].map(renderButton)}
      </View>
      <View style={styles.row}>
        {['1', '2', '3', '*'].map(renderButton)}
      </View>
      <View style={styles.row}>
        {['C', '0', '=', '/'].map((item) => 
          item === '=' ? renderButton(item, styles.equals) : renderButton(item)
        )}
      </View>
      <Text style={styles.footer}>Calc by Saivyshnav</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  result: {
    fontSize: 50,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#3498db',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  equals: {
    backgroundColor: '#2ecc71', // Green button for "="
  },
  footer: {
    marginTop: 30,
    fontSize: 18,
    color: 'grey',
  },
});
