import { View, TextInput, TouchableOpacity, Image, } from "react-native"
import { estilos } from "./style"

export default function Home(){
    return(
        <View style={estilos.tela}>
            
        < View style={estilos.form}>
            
        <TextInput
            style={estilos.input_text}
        />
       
        </View>
    </View>
   
)
}