
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

          {/* texto login */}
          <Text style={styles.text}>LOGIN</Text>

          {/* input de login */}
          <TextInput placeholder='Insira seu CPF' style={styles.input} />

          {/* texto da senha*/}
          <Text style={styles.text}>SENHA:</Text>

          {/* Input da senha */}
          <TextInput secureTextEntry placeholder='Insira sua senha' style={styles.input} />

          {/* div para alinhar os botões */}
          <View style={styles.subBtn} >
            <TouchableOpacity><Link href={'cadastro'} style={styles.subBtn1}>cadastrar</Link></TouchableOpacity>
            <TouchableOpacity><Link href={'home'} style={styles.subBtn1}>esqueci minha senha</Link></TouchableOpacity>
          </View>
        </View>
        {/* div para alinha o botão entrada */}
        <View style={styles.formbtn}>
          <Link href={'inicio'} style={styles.btn}>ENTRAR</Link>
        </View>
       </View>
      )
}