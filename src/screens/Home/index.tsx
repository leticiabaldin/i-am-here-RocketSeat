import { TextInput, Text, View, TouchableOpacity, ScrollView } from "react-native";

import { styles } from "./style";
import { Participant } from "../../components/Participant";

export default function Home() {

const participants = ['Letícia', 'Camila', 'Jorge Paulo', 'Gustavo', 'João', 'Larissa', 'Mark', 'Pedro','Maria'];

function handleParticipantAdd(){
  console.log('Voce clicou no botao add');
}

function handleParticipantRemove(){
  console.log(`Voce clicou no botao remove`);
}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022.
      </Text>

    <View style={styles.form}>
      <TextInput 
      style={styles.input}
      placeholder= "Nome do participante:"
      placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity style={styles.button} 
      onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
<ScrollView showsVerticalScrollIndicator={false}>
{
  participants.map( participant => (
    <Participant 
    key={participant}
    name={participant}
    onRemove={() => handleParticipantRemove()}/>
  ))
}
</ScrollView>
     
    </View>
  );
}
