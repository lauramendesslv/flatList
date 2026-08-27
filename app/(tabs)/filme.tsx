import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
 
export default function FilmeScreen() {
  const router = useRouter();
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Text style={styles.textoVoltar}>← Voltar</Text>
        </TouchableOpacity>
 
        <Text style={styles.titulo}>Barbie</Text>
      </View>
 
      <View style={styles.card}>
        <View style={styles.poster} />
 
        <Text style={styles.informacoes}>Barbie (2023)</Text>
 
        <Text style={styles.descricao}>Gênero: Comédia, Fantasia e Aventura</Text>
 
        <Text style={styles.descricao}>Duração: 1h 54min</Text>
 
        <Text style={styles.descricao}>Direção: Greta Gerwig</Text>
 
        <Text style={styles.elenco}>
          Elenco: Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon e Will Ferrell.
        </Text>
 
        <Text style={styles.subtitulo}>Sinopse</Text>
 
        <Text style={styles.descricao}>
          Barbie vive em Barbieland, um mundo perfeito e colorido. Porém, ela começa a ter
          pensamentos e experiências diferentes do que está acostumada. Para descobrir o que está
          acontecendo, Barbie decide viajar para o mundo real acompanhada de Ken. Durante essa
          aventura, ela conhece uma realidade muito diferente da sua e começa a descobrir mais
          sobre si mesma, sua identidade e o verdadeiro significado de ser Barbie.
        </Text>
 
        <View style={styles.botaoAssistir}>
          <Text style={styles.textoBotao}>▶ Assistir filme</Text>
        </View>
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1fff",
    padding: 20,
  },
 
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
 
  botaoVoltar: {
    marginRight: 12,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
 
  textoVoltar: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
 
  titulo: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
 
  card: {
    backgroundColor: "#383838ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
 
  poster: {
    backgroundColor: "#555555ff",
    height: 300,
    marginBottom: 15,
  },
 
  informacoes: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
 
  subtitulo: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
  },
 
  descricao: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
 
  elenco: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
 
  botaoAssistir: {
    alignItems: "center",
    backgroundColor: "#e50914",
    borderRadius: 6,
    marginTop: 20,
    paddingVertical: 14,
  },
 
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});