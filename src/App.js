import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import { GlobalStyles } from "./GlobalStyles";
import { Container } from './styles'

// aula 18 react e formularios
// PRATICA GUIADA 1

// no arquivo mainpage, observe os estados ja criados, agora iremos unifica-los
//1.1 crie um estado formulario e passe como seu estado inicial um objeto que contenha as propriedades nome e email
//1.2 \tribua essas propriedades aos values do input

// PRATICA GUIADA 2
//primeiro, vamos atribuir um name em cada input, o valor do atributo name deve ser o mesmo da propriedade  do estado form

// PRATICA GUIADA 3
// Crie uma funç~~ao inica de onchange , ela deve alterar  o estado formulario de acordo com os valores dos inputs (lembre-se de usar  A PROPIREDADE NAME para identificar os inputs) passe o onchage em todos os inputs

// PTRATICA GUIADA 4



function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
