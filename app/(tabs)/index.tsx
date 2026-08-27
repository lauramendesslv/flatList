import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
 
type Filme = {
  id: string;
  titulo: string;
  cor: string;
  image: string;
};
 
type Categoria = {
  id: string;
  titulo: string;
  filmes: Filme[];
};
 
const categorias: Categoria[] = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      {
        id: "1a",
        titulo: "Oppenheimer",
        cor: "#1a1a2e",
        image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      },
      {
        id: "1b",
        titulo: "Duna 2",
        cor: "#16213e",
        image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      },
      {
        id: "1c",
        titulo: "Barbie",
        cor: "#0f3460",
        image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      },
      {
        id: "1d",
        titulo: "Poor Things",
        cor: "#533483",
        image: "https://i.etsystatic.com/25432943/r/il/08e781/5945541949/il_fullxfull.5945541949_a90q.jpg",
      },
      {
        id: "1e",
        titulo: "Saltburn",
        cor: "#2b2d42",
        image: "https://www.prints4u.net/wp-content/uploads/2024/01/Saltburn-001.jpg",
      },
    ],
  },
 
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      {
        id: "2a",
        titulo: "John Wick 4",
        cor: "#1b1b2f",
        image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      },
      {
        id: "2b",
        titulo: "Missão Impossível",
        cor: "#162447",
        image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      },
      {
        id: "2c",
        titulo: "Top Gun",
        cor: "#1f4068",
        image: "https://tse3.mm.bing.net/th/id/OIP.BTJxjZaH6XnOyIrrrF9DqAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "2d",
        titulo: "Mad Max",
        cor: "#1b262c",
        image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
      },
    ],
  },
 
  {
    id: "3",
    titulo: "Comédia Romantica",
    filmes: [
      {
        id: "3a",
        titulo: "Como perder um homem em 10 dias",
        cor: "#2d132c",
        image: "https://play-lh.googleusercontent.com/qfVdhQ0UqzD5rMGyHxRhTs-N5y7mbAphRa45oYgSKspz-znp2tjwHQ3rzJy6n8EfgZ2zKw",
      },
      {
        id: "3b",
        titulo: "10 coisas que eu odeio em você",
        cor: "#1c3334",
        image: "https://static.wikia.nocookie.net/dublagem/images/7/76/10_Things_I_Hate_About_You.jpg/revision/latest?cb=20231228193109&path-prefix=pt-br",
      },
      {
        id: "3c",
        titulo: "Vestida para casar",
        cor: "#2c003e",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrVehflK-pbNr-jEbnpqn5jfN4G8ET01sLL_swbEIXVbmDObExXeRCcvTQbpVs8hc2CG7BJT1mRGJ_K7dFqkczcOyXbnRuvP-cCUJXCBrve2gJgZfY9hsS7bHhWJQzMKp8Z6ig2NQpzHyq/s1600/vestida+para+casar+27+dresses+resenha+blog+tudo+que+motiva.jpg",
      },
      {
        id: "3d",
        titulo: "Como se fosse a primeira vez",
        cor: "#2c003e",
        image: "https://www.querofilme.com.br/images/posters/b/436-como-se-fosse-a-primeira-vez-1.jpg",
      },
      {
        id: "3e",
        titulo: "Esposa de mentirinha",
        cor: "#2c003e",
        image: "https://media.fstatic.com/W9UZvN397yjUh566F2flmPAIcJ4=/210x312/smart/media/movies/covers/2011/01/d5f1e3613d0b70ae343e11f1b241a255.jpg",
      },
    ],
  },
 
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      {
        id: "5a",
        titulo: "Hereditary",
        cor: "#200122",
        image: "https://www.themoviedb.org/t/p/original/f0RdurRZa5GeovywRENEGgPJf1l.jpg",
      },
      {
        id: "5b",
        titulo: "Midsommar",
        cor: "#190a05",
        image: "https://th.bing.com/th/id/R.f67ac0a8156b469d172fb6cc577569eb?rik=ufmq0NbR71UuLQ&pid=ImgRaw&r=0",
      },
      {
        id: "5c",
        titulo: "Get Out",
        cor: "#0a0a0a",
        image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
      },
    ],
  },
 
  {
    id: "6",
    titulo: "Star Wars Series",
    filmes: [
      {
        id: "6a",
        titulo: "Episódio IV – Uma Nova Esperança",
        cor: "#1a1a2e",
        image: "https://tse1.mm.bing.net/th/id/OIP.Q87lhwEBdwA-o8rtiDDUNgHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "6b",
        titulo: "Episódio V – O Império Contra-Ataca",
        cor: "#16213e",
        image: "https://m.media-amazon.com/images/M/MV5BY2ViMjFhMDMtNTA4Yi00NGJjLTk0ZTktNGVkZjJjMGY4ZTFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: "6c",
        titulo: "Episódio VI – O Retorno de Jedi",
        cor: "#0f3460",
        image: "https://static.wikia.nocookie.net/ptstarwars/images/9/91/O_Retorno_de_Jedi_p%C3%B4ster_EN.png/revision/latest/scale-to-width-down/1200?cb=20140719130223",
      },
      {
        id: "6d",
        titulo: "Episódio I – A Ameaça Fantasma",
        cor: "#533483",
        image: "https://image.tmdb.org/t/p/original/kZZO7e2zlmDszQkla6zeTstOfFq.jpg",
      },
      {
        id: "6e",
        titulo: "Episódio II – Ataque dos Clones",
        cor: "#2b2d42",
        image: "https://tse3.mm.bing.net/th/id/OIP.euM2v3oJzfddxB1zH0Wt3AHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "6f",
        titulo: "Episódio III – A Vingança dos Sith",
        cor: "#2b2d42",
        image: "https://ingresso-a.akamaihd.net/prd/img/movie/star-wars-episodio-iii-a-vinganca-dos-sith-relancamento/afb90754-392a-4d82-b7ce-18b0ef6957dc.webp",
      },
      {
        id: "6g",
        titulo: "Episódio VII – O Despertar da Força",
        cor: "#2b2d42",
        image: "https://images.justwatch.com/poster/249956665/s718/star-wars-o-despertar-da-forca.{format}",
      },
      {
        id: "6h1",
        titulo: "Episódio VIII – Os Últimos Jedi",
        cor: "#2b2d42",
        image: "https://tse3.mm.bing.net/th/id/OIP.Q8RhGWOjjTFwPalQAGi1QwHaKk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "6h2",
        titulo: "Episódio IX – A Ascensão Skywalker",
        cor: "#2b2d42",
        image: "https://tse4.mm.bing.net/th/id/OIP.iOcEY_6LTLPx9yuf882j9QHaIx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
  },
 
  {
    id: "7",
    titulo: "Açãoes",
    filmes: [
      {
        id: "7a",
        titulo: "John Wick 4",
        cor: "#1b1b2f",
        image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      },
      {
        id: "7b",
        titulo: "Missão Impossível",
        cor: "#162447",
        image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      },
      {
        id: "7c",
        titulo: "Top Gun",
        cor: "#1f4068",
        image: "https://tse3.mm.bing.net/th/id/OIP.BTJxjZaH6XnOyIrrrF9DqAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: "7d",
        titulo: "Mad Max",
        cor: "#1b262c",
        image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
      },
    ],
  },
 
  {
    id: "8",
    titulo: "Comédia",
    filmes: [
      {
        id: "8a",
        titulo: "Superbad",
        cor: "#2d132c",
        image: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerZ0Q.jpg",
      },
      {
        id: "8b",
        titulo: "The Grand Budapest",
        cor: "#1c3334",
        image: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
      },
      {
        id: "8c",
        titulo: "Knives Out",
        cor: "#2c003e",
        image: "https://image.tmdb.org/t/p/w500/p2r9E6L2s7w7Z8sYqYxKqVZKQ.jpg",
      },
    ],
  },
 
  {
    id: "9",
    titulo: "Documentários",
    filmes: [
      {
        id: "9a",
        titulo: "Free Solo",
        cor: "#0d0d0d",
        image: "https://image.tmdb.org/t/p/w500/v8cJ1b7yR8Q3H4J9H5J6N4V6Q.jpg",
      },
    ],
  },
 
  {
    id: "10",
    titulo: "Terror",
    filmes: [
      {
        id: "10a",
        titulo: "Hereditary",
        cor: "#200122",
        image: "https://www.themoviedb.org/t/p/original/f0RdurRZa5GeovywRENEGgPJf1l.jpg",
      },
      {
        id: "10b",
        titulo: "Midsommar",
        cor: "#190a05",
        image: "https://th.bing.com/th/id/R.f67ac0a8156b469d172fb6cc577569eb?rik=ufmq0NbR71UuLQ&pid=ImgRaw&r=0",
      },
      {
        id: "10c",
        titulo: "Get Out",
        cor: "#0a0a0a",
        image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
      },
    ],
  },
];
 
type CardProps = {
  item: Filme;
  onPress: () => void;
};
 
function FilmeCard({ item, onPress }: CardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.filmeCard, { backgroundColor: item.cor }]}>
        <Image source={{ uri: item.image }} style={styles.imagemFilme} resizeMode="cover" />
 
        <View style={styles.sombra} />
 
        <Text style={styles.filmeTitulo}>{item.titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}
 
function FilmeCardDestaque({ item, onPress }: CardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.filmeCardDestaque, { backgroundColor: item.cor }]}>
        <Image source={{ uri: item.image }} style={styles.imagemFilmeDestaque} resizeMode="cover" />
 
        <View style={styles.sombra} />
 
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>🔥 Destaque</Text>
        </View>
 
        <Text style={styles.filmeTitulo}>{item.titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}
 
function FilmeCardBanner({ item, onPress }: CardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.filmeCardBanner, { backgroundColor: item.cor }]}>
        <Image source={{ uri: item.image }} style={styles.imagemBanner} resizeMode="cover" />
 
        <View style={styles.sombra} />
 
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>✨ Novo</Text>
        </View>
 
        <Text style={[styles.filmeTitulo, styles.filmeTituloCentralizado]}>{item.titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}
 
function renderFilmeCard(item: Filme, onPress: () => void) {
  switch (item.cor) {
    case "red":
      return <FilmeCardDestaque item={item} onPress={onPress} />;
 
    case "green":
      return <FilmeCardBanner item={item} onPress={onPress} />;
 
    default:
      return <FilmeCard item={item} onPress={onPress} />;
  }
}
 
function CategoriaRow({
  item,
  onFilmePress,
}: {
  item: Categoria;
  onFilmePress: (filme: Filme) => void;
}) {
  return (
    <View style={styles.categoriaContainer}>
      <Text style={styles.categoriaTitulo}>{item.titulo}</Text>
 
      <FlatList
        data={item.filmes}
        keyExtractor={(filme) => filme.id}
        renderItem={({ item: filme }) => renderFilmeCard(filme, () => onFilmePress(filme))}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
 
export default function Netflix() {
  const router = useRouter();
 
  // O filme.tsx é sempre o mesmo, independente de qual filme for clicado.
  const handleFilmePress = (_filme: Filme) => {
    router.push("/filme");
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>N</Text>
      </View>
 
      <FlatList
        data={categorias}
        keyExtractor={(cat) => cat.id}
        renderItem={({ item }) => <CategoriaRow item={item} onFilmePress={handleFilmePress} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
 
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
 
  logo: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
  },
 
  categoriaContainer: {
    marginBottom: 24,
    paddingLeft: 12,
  },
 
  categoriaTitulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    borderLeftWidth: 3,
    borderLeftColor: "#E50914",
    paddingLeft: 8,
    marginBottom: 10,
  },
 
  filmeCard: {
    width: 120,
    height: 170,
    borderRadius: 6,
    marginRight: 10,
    justifyContent: "flex-end",
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: "#E50914",
    overflow: "hidden",
  },
 
  filmeCardDestaque: {
    width: 120,
    height: 170,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: "flex-end",
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: "#E50914",
    overflow: "hidden",
  },
 
  filmeCardBanner: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 3,
    borderBottomColor: "#E50914",
    overflow: "hidden",
  },
 
  imagemFilme: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
 
  imagemFilmeDestaque: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
 
  imagemBanner: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
 
  sombra: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "rgba(0,0,0,0.65)",
  },
 
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    zIndex: 3,
  },
 
  badgeTexto: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "700",
  },
 
  filmeTituloCentralizado: {
    textAlign: "center",
  },
 
  filmeTitulo: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
    zIndex: 2,
  },
});
 