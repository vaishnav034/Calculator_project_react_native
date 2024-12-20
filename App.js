import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Use a safer evaluation method in production.
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        {['7', '8', '9', '/'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
        {['C', '0', '=', '+'].map((value) => (
          <TouchableOpacity
            key={value}
            style={value === '=' ? [styles.button, styles.equalButton] : styles.button}
            onPress={() => handlePress(value)}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by [RAM]</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    backgroundColor: '#e4e4e4',
    padding: 10,
  },
  inputText: {
    fontSize: 36,
    textAlign: 'right',
    color: '#000',
  },
  resultText: {
    fontSize: 28,
    textAlign: 'right',
    color: 'gray',
  },
  buttons: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    width: '22%',
    margin: 8,
    height: 60,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  equalButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#555',
  },
});
