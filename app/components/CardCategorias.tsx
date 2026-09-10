import { FlatList, StyleSheet, Text, View } from "react-native";

import type { Categoria, Filme } from "./DadosDosFilmes";

type CardCategoriasProps = {
  categoria: Categoria;
  renderFilmeCard: (filme: Filme) => React.ReactElement;
};

export default function CardCategorias({
  categoria,
  renderFilmeCard,
}: CardCategoriasProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{categoria.titulo}</Text>

      <FlatList
        data={categoria.filmes}
        keyExtractor={(filme) => filme.id}
        renderItem={({ item }) => renderFilmeCard(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    paddingLeft: 12,
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderLeftWidth: 3,
    borderLeftColor: "#E50914",
    paddingLeft: 8,
    marginBottom: 10,
  },
});