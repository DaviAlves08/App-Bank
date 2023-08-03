import React from 'react';
import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity,ScrollView, StatusBar} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

export function TelaCartao({ navigation }) {
  
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.background}>
      <StatusBar backgroundColor="#193E75" />
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')}>
            <Image source={require('../assets/menu.png')} style={styles.imgmenu}/>
          </TouchableOpacity>
          <Text style={styles.titulo}>ADD CARD</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TelaConta')}>
            <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem}/>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('../assets/cartao.png')} style={styles.imgcartao}/>
      <View>
        <Text style={styles.titleinput}>YOUR NAME</Text>
        <TextInput placeholder='NAME' style={styles.txtinput}></TextInput>
      </View>
      <View>
        <Text style={styles.titleinput}>CARD NUMBER</Text>
        <TextInput placeholder='INSERT YOUR CARD NUMBER' style={styles.txtinput} keyboardType="numeric"></TextInput>
      </View>
      <View>
        <Text style={styles.titleinputdate}>EXPIRED DATE</Text>
        <View style={styles.rowdate}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Day" style={styles.txtinputsymbol} keyboardType="numeric"/>
          <Icon style={styles.iconarrows} name="expand-more" size={35} color="#184177" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Month" style={styles.txtinputsymbol} keyboardType="numeric"/>
          <Icon style={styles.iconarrows} name="expand-more" size={36} color="#184177" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Year" style={styles.txtinputsymbol} keyboardType="numeric"/>
          <Icon style={styles.iconarrows} name="expand-more" size={36} color="#184177" />
        </View>
        </View>
      </View>
      <View>
        <Text style={styles.titleinput}>PASSWORD</Text>
        <TextInput placeholder='*************' style={styles.txtinput}></TextInput>
      </View>
      <Text style={styles.titleinputphone}>PHONE NUMBER</Text>
      <View style={styles.rowphonenumber}>
      <View style={styles.inputContainerddd}>
        <TextInput placeholder="+55" style={styles.txtinputsymbol}/>
        <Icon name="expand-more" size={36}color="#184177" />
        </View>
        <TextInput style={[styles.txtinput, { width: '77.%', marginRight: '29.5%', marginLeft: '2%' }]} keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.coltext}>
        <Text style={styles.txtlorem}>* Lorem ipsum dolor sit amet adipiscing elit.</Text>
        <Text style={styles.txtlorem2}> Morbi et lorem elit, eu hendrerit lectus.</Text>
        <Text style={styles.txtlorem}>* Lorem ipsum dolor sit amet, adipiscing elit.</Text>
        <Text style={styles.txtlorem2}> Morbi et lorem elit, eu hendrerit lectus.</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')} style={styles.btnlink}> 
        <Text style={styles.txtbutton}>LINK CARD</Text>
      </TouchableOpacity>  
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#193E75',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    paddingBottom: 7
  },
  imgmenu: {
    height: 39,
    width: 39,
    left: 10
  },
  titulo: {
    fontSize: 29,
    color: '#fff',
    flex: 1,
    textAlign: 'center'
  },
  imgengrenagem: {
    height: 42,
    width: 42,
    right: 10
  },
  imgcartao: {
    height: 166,
    width: 240,
    marginBottom: 5,
    marginTop: 20
  },
  txtinput: {
    borderRadius: 4,
    width: 323,
    height: 40,  
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
  },
  titleinput: {
    fontSize: 14, 
    color: '#3975b2',
    marginLeft: 3,
    marginTop: 10
  },
  titleinputdate: {
    fontSize: 14, 
    color: '#3975b2',
    marginLeft: 10,
    marginTop: 10
  },
  titleinputphone: {
    fontSize: 14, 
    color: '#3975b2',
    marginLeft: -195,
    marginTop: 10
  },
  rowphonenumber: {
    flexDirection: 'row',
    marginLeft: 90
  },
  rowdate: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtlorem: {
    fontSize: 13,
    textAlign: 'center', 
    marginTop: 10
  },
  txtlorem2: {
    fontSize: 13,
    textAlign: 'center', 
  },
  coltext: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 12
  },
  txtbutton: {
    color: '#fff',
    fontSize: 14,
    fontFamily: ''
  },
  btnlink: {
    backgroundColor: '#193E75',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10
  },
  txtinputsymbol: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    fontFamily: 'NunitoSans_700Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginBottom: 5,
    width: 101,
    height: 40,
    margin: 5
  },
  inputContainerddd: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginBottom: 5,
    width: 85,
    height: 40,
  },
});