/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide()
  }

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){

    if(this.state.altura == '' || this.state.massa == '') {
      Alert.alert("Por favor, preencha os dados necessários.");
    }
    else{

      this.state.altura = this.state.altura.replace(",", ".");
      let imc = (this.state.massa / (this.state.altura * this.state.altura)).toFixed(2)
      let s = this.state
      s.resultado = imc
      this.setState(s)

      if (s.resultado < 16) {
        s.resultadoText = "Magreza grave"

      }
      else if (s.resultado < 17) {
        s.resultadoText = "Magreza moderada"
      }
      else if (s.resultado < 18.5) {
        s.resultadoText = "Magreza leve"

      }
      else if (s.resultado < 25) {
        s.resultadoText = "Saudável"

      }
      else if (s.resultado < 30) {
        s.resultadoText = "Sobrepeso"

      }
      else if (s.resultado < 35) {
        s.resultadoText = "Obesidade Grau I"

      }
      else if (s.resultado < 40) {
        s.resultadoText = "Obesidade Grau II"

      }
      else  {
        s.resultadoText = "Obesidade Grau III"

      }
      s.resultado = s.resultado.toString().replace(".", ",");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
        </View>
        <TouchableOpacity onPress={this.calcular}><Text  style={styles.button}>Calcular</Text></TouchableOpacity>
        <Text  style={styles.resultado}>{this.state.resultado}</Text>
        <Text  style={[styles.resultado, {fontSize: 40}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
input:{
  height: 80,
  textAlign: 'center',
  width: '50%',
  fontSize: 50,
  marginTop: 24,
  color: 'gray'

},
button:{
  backgroundColor: '#5C2327',
  color: '#fff',
  textAlign: 'center',
  padding: 30,
  fontSize: 25,
  fontWeight: 'bold'
},
entradas:{
  flexDirection: 'row'

},
resultado:{
  backgroundColor: '#fff',
  color: '#5C2327',
  textAlign: 'center',
  padding: 15,
  fontSize: 65,
  fontWeight: 'bold'
},
});
