// App.js
import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

function App() {
  const [pais, setPais] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Geografia Brasileira</Text>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/as.jpg')}
      />
      <Picker
        selectedValue={pais}
        onValueChange={(value, index) => setPais(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Quem faz fronteira?" value="" />
        <Picker.Item label="Argentina" value="Bolívia, Brasil, Chile, Paraguai e Uruguai"/>
        <Picker.Item label="Brasil" value="Argentina, Bolívia, Chile, Colômbia, Equador, 
        Guiana, Guiana Francesa, Paraguai, Peru, Suriname, Uruguai e Venezuela" />
        <Picker.Item label="Bolívia" value="Argentina, rasil, Chile, Paraguai e Peru"/>
        <Picker.Item label="Chile" value="Argentina, Bolívia e Peru"/>
        <Picker.Item label="Colômbia" value="Brasil, Equador, Peru e Venezuela"/>
        <Picker.Item label="Equador" value="Colômbia e Peru"/>
        <Picker.Item label="Guiana" value="Brasil, Suriname e Venezuela"/>
        <Picker.Item label="Guiana Francesa" value="Brasil e Suriname"/>
        <Picker.Item label="Paraguai" value="Argentina, Bolívia e Brasil"/>
        <Picker.Item label="Peru" value="Bolívia, Brasil, Chile, Colômbia e Equador"/>
        <Picker.Item label="Suriname" value="Brasil, Guiana e Guiana Francesa"/>
        <Picker.Item label="Uruguai" value="Argentina e Brasil"/>
        <Picker.Item label="Venezuela" value="Brasil, Colômbia e Guiana"/>
      </Picker>
      <Text style={styles.text}>Quem faz fronteira: {pais}</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    width: 300,
  },
  tinyLogo: {
    height: 200,
    width: 150,
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: 'center',
    paddingBottom: 20,
  },
  picker: {
    fontSize: 30,
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});