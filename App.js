import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ViewBase,
} from 'react-native';
import { renderElement } from 'react-native/types_generated/Libraries/ReactNative/RendererImplementation';

class App extends Component {
  constructor(props) {   
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      descripcion: '',
      mostrarperfil: false,
      mensajeAprobacion: 'Tu perfil ha sido aprobado',
    };
  }

  manejarcambiodenombre = (texto) => {
    this.setState({ 
      nombre: texto,
      mostrarperfil: false, 
      mensajeAprobacion: 'Informacion actualizada' 
    });
  };

  manejarcambiodeapellido = (texto) => {
    this.setState({ 
      apellido: texto,
      mostrarperfil: false, 
      mensajeAprobacion: 'Informacion actualizada'
    });
  };

  manejarcambiodeemail = (texto) => {
    this.setState({ 
      email: texto, 
      mostrarperfil: false, 
      mensajeAprobacion: 'Informacion actualizada'
    });
  };

  manejarcambiodetelefono = (texto) => {
    this.setState({ 
      telefono: texto,
      mostrarperfil: false, 
      mensajeAprobacion: 'Informacion actualizada'
    });
  };

  manejarcambiodedescripcion = (texto) => {
    this.setState({ 
      descripcion: texto,
      mostrarperfil: false, 
      mensajeAprobacion: 'Informacion actualizada'
    });
  }; 

  limpiarCampos = () => {
    this.setState({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      descripcion: '',
      mostrarperfil: false,
      mensajeAprobacion: 'Campos limpiados',
    });

    Alert.alert(
      'Limpiar Campos',
      'Todos los campos han sido limpiados',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  render(){
    const { nombre, apellido, email, telefono, descripcion, mostrarperfil, mensajeAprobacion } = this.state;

    return (
      <>
      <ScrollView>
        <View>  
          <image source={{UR:'ruta de imagen' }}
          resizeMode='cover' />
          <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Formulario de Registro</Text>
          <text>app demo</text>
        </View>
        <view>
          <text>Nombre</text>
          <TextInput
            value={nombre}
            onChangeText={this.manejarcambiodenombre}
            placeholderTextColor={'#999'}
            placeholder="Ingrese su nombre">
            </TextInput>
          <text>Apellido</text>
          <TextInput
            value={apellido}
            onChangeText={this.manejarcambiodeapellido}
            placeholderTextColor={'#999'}
            placeholder="Ingrese su apellido">
          </TextInput>
          <text>Email</text>
          <TextInput
            value={email}
            onChangeText={this.manejarcambiodeemail}
            placeholderTextColor={'#999'}
            placeholder="Ingrese su email">
          </TextInput>
          <text>Telefono</text>
          <TextInput
            value={telefono}
            onChangeText={this.manejarcambiodetelefono}
            placeholderTextColor={'#999'}
            placeholder="Ingrese su telefono">
          </TextInput>
          <text>Descripcion</text>
          <TextInput
            value={descripcion}
            onChangeText={this.manejarcambiodedescripcion}
            placeholderTextColor={'#999'}
            placeholder="Ingrese una descripcion">
          </TextInput>
          <view>
            <Button
              title="Limpiar Campos"
              onPress={this.limpiarCampos}
              color="#841584"
            />
            <Button
              title="Guardar Perfil"
              onPress={() => this.setState({ mostrarperfil: true })}
              color="#841584"
            />
            </view>                 
          
        </view>
      </ScrollView>
      </>
        
    )    
  
  }


};

export default App;
