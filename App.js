import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { Home } from './tela/Home';
import { TelaCadastro } from './tela/TelaCadastro';
import { TelaInicio } from './tela/TelaInicio';
import { TelaTransferencia } from './tela/TelaTransferencia';
import { TelaExtrato } from './tela/TelaExtrato';
import { TelaConta } from './tela/TelaConta';
import { TelaOpcoes } from './tela/TelaOpcoes';
import { TelaCartao } from './tela/TelaCartao';
import { TelaConversao } from './tela/TelaConversao';
import { TelaQrCode } from './tela/TelaQrCode';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaInicio" component={TelaInicio} />
        <Stack.Screen name="TelaTransferencia" component={TelaTransferencia} />
        <Stack.Screen name="TelaExtrato" component={TelaExtrato} />
        <Stack.Screen name="TelaConta" component={TelaConta} />
        <Stack.Screen name="TelaOpcoes" component={TelaOpcoes} />
        <Stack.Screen name="TelaCartao" component={TelaCartao} />
        <Stack.Screen name="TelaConversao" component={TelaConversao} />
        <Stack.Screen name="TelaQrCode" component={TelaQrCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
