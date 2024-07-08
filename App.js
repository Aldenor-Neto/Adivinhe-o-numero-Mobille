import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Cabecario from './componentes/Cabecario';
import Jogo from './componentes/Jogo';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Cabecario />
      </View>
      <Jogo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
