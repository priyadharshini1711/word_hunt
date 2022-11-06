import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Meanings from './components/Meaning/Meaning';
import Header from './components/Header/Header';

function App() {

  const [meanings, setMeanings] = useState([]);

  const [phonetics, setPhonetics] = useState("");

  const [word, setWord] = useState("");

  const [language, setLanguage] = useState("en");


  const dictionary = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`)
      console.log("response", data.data[0].phonetics[0].audio)
      setMeanings(data.data)
      if (data.data[0].phonetics[0].audio) {
        setPhonetics(data.data[0].phonetics[0].audio)
      }

    } catch (error) {
      console.log(error)
      setMeanings([])
      setPhonetics("")
    }

  }

  useEffect(() => {
    dictionary();

  }, [word, language])

  console.log("meanings", meanings)
  return (
    <div className="App" style={{ height: "100vh", backgroundColor: "#282c34", color: 'white' }}>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header language={language} setLanguage={setLanguage} word={word} setWord={setWord} />
        {meanings && <Meanings word={word} meanings={meanings} language={language} phonetics={phonetics} />}
      </Container>
    </div>
  );
}

export default App;
