import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


const axios = require('axios');

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "Value",
      done: false,
      heroe: []
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  handlerbtn(){
            var id = this.state.value;
            axios.get("https://www.superheroapi.com/api.php/10223922732878088/" + id)
            .then(heroe => {
              if (heroe.data != false) { 
                this.setState({
                 
                  done:true,
                  heroe: heroe.data
                })
                console.log(this.state);
                console.log(this.state.heroe.powerstats);
              }
            })
            .catch(error => {
              console.log(error);
            });
           
          
  }

  updateInputValue(evt) {

    this.setState ({id: evt.target.value});

}
  handlerTxt(text){
    var id = text;
    this.setState({ value: id });
           }

    render(){

      if(this.state.done !== true){
        return (

          <View style={styles.container}>
          <Image resizeMode="contain" style={styles.formatoImagen} source={require('./super.gif')}/>
          <Text style={styles.titulo}>Busca un personaje del 1 al 100: </Text>
          <TextInput
            style={{
              height: 40,
              width: 250,
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: '#ffebee'
            }}
            placeholder='Escriba aquí...'
            onChangeText={this.handlerTxt.bind(this)}
          />
           <Button title="Buscar" style={styles.button}  onChange={ this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='codigo de superheroe' />
        </View>
      )
      } else {
        return (
          <View style={styles.container}>
            <Image resizeMode="contain" style={styles.formatoImagen2} source={require('./superheroes02.jpg')}/>
            <Text style={styles.titulo}>Buscar otro personaje:</Text>
            <Text style={styles.titulo}>Recuerda del 1 al 100</Text>
            <TextInput
              style={{
                height: 40,
                width: 250,
                borderColor: 'white',
                borderWidth: 1,
                color: '#ffebee',
                marginBottom: 10,
              }}
              placeholder='Escriba aquí'
              onChangeText={this.handlerTxt.bind(this)}
            />
            <Button title="Buscar" style={styles.button}  onChange={ this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='codigo de superheroe' />
            
              <Text style={{color: '#000000', fontSize: 25, margin: 5}}>Nombre: {this.state.heroe.name} </Text>
              <Text style={{color: '#063880', fontSize: 20, margin: 5}}>Combat: {this.state.heroe.powerstats.combat} </Text>
              <Text style={{color: '#063880', fontSize: 20, margin: 5}}>Durability: {this.state.heroe.powerstats.durability} </Text>
              <Text style={{color: '#063880', fontSize: 20, margin: 5}}>Intelligence: {this.state.heroe.powerstats.intelligence} </Text>
              <Text style={{color: '#063880', fontSize: 20, margin: 5}}>Power: {this.state.heroe.powerstats.power} </Text>
              <Text style={{color: '#063880', fontSize: 20, margin: 5}}>Speed: {this.state.heroe.powerstats.speed} </Text>
              <Text style={{color: '#063880', fontSize: 20, margin: 5}}>Strength: {this.state.heroe.powerstats.strength} </Text>
             
                   
          </View>
        );
      }
  }
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d8ed4',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  titulo: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#02132b',
    marginTop: 50,
    
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  formatoImagen1: {

    flex: 0.5,
  },
  
  formatoImagen2: {
    flex: 0.8,
    
    resizeMode: 'contain' 
  },

});
