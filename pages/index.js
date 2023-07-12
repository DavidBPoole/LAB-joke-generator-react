import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Jokes from '../components/Jokes';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');

  const handleClick = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
    });
    handleClick('Get Punchline');
  };

  return (
    <>
      <Jokes joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <Button type="button" onClick={getAJoke}>
          {btnText}
        </Button>
      ) : (
        <Button type="button" onClick={() => handleClick('Get A New Joke')}>
          {btnText}
        </Button>
      )}
    </>
  );
}

export default Home;

// ORIGINAL COE ABOVE FROM TEMPLATE
// <div
// className="text-center d-flex flex-column justify-content-center align-content-center"
// style={{
//   height: '90vh',
//   padding: '30px',
//   maxWidth: '400px',
//   margin: '0 auto',
// }}
// >
// <h1>Joke Generator</h1>
// <button type="button" onClick={handleClick}>Get A Joke</button>
// </div>
