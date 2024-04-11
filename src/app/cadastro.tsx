
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function login() {
    return (
       // div principal
       <View style={styles.imagemBody}>
        {/* Imagem logo senai */}
        <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />

        {/*inicio do formulario */}
        <View style={styles.form}>

          {/* texto cadastro */}
          <Text style={styles.text}>CADASTRO</Text>

          {/* input de Cadastro */}
          <TextInput placeholder='Insira seu CPF' style={styles.input} />

          {/* texto da senha*/}
          <Text style={styles.text}>SENHA:</Text>

          {/* Input da senha */}
          <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input} />

        </View>
        {/* div para alinha o botão entrada */}
        <View style={styles.formbtn}>
          <Link href={'login'} style={styles.btn}>Cadastrar</Link>
        </View>
       </View>
      )
}