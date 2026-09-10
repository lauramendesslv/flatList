import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FilmeDetalhes() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    titulo?: string;
    image?: string;
    cor?: string;
  }>();

  const titulo = params.titulo ?? "Filme";
  const image = params.image;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: titulo }} />

      <ScrollView contentContainerStyle={styles.conteudo}>
        {image ? (
          <Image source={{ uri: image }} style={styles.poster} resizeMode="cover" />
        ) : (
          <View style={[styles.poster, { backgroundColor: params.cor ?? "#383838" }]} />
        )}

        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>Detalhes do filme</Text>
        <Text style={styles.descricao}>
          Confira as informações e assista ao filme selecionado.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => Linking.openURL("https://www.max.com/movies/barbie/")}
        >
          <Text style={styles.textoBotao}>Assistir filme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          activeOpacity={0.8}
          onPress={() => router.back()}
        >
          <Text style={styles.textoVoltar}>Voltar para os filmes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  poster: {
    width: "100%",
    height: 460,
    backgroundColor: "#383838",
    borderRadius: 8,
  },
  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
  },
  subtitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 8,
  },
  descricao: {
    color: "#cfcfcf",
    fontSize: 16,
    lineHeight: 24,
  },
  botao: {
    alignItems: "center",
    backgroundColor: "#E50914",
    borderRadius: 6,
    marginTop: 24,
    paddingVertical: 14,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  botaoVoltar: {
    alignItems: "center",
    borderColor: "#777",
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 12,
    paddingVertical: 13,
  },
  textoVoltar: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});