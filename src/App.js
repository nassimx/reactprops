import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProfile from './profile/Profile'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Pic2 from './profile/Pic2';


function App() {
  const name = "Nassim Frikha";
  const bio = `My name is Nassim. I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript.`;
  const profession = `Software engineer `;

  const handleName = (name) => {
    alert(`My Name Is ${name}`)
  }
  return (


    <Container>
      <Row>
        <Col>
          <Image src="https://raw.githubusercontent.com/nassimx/reactcomp/main/src/Components/Profile/ProfilePic.png" rounded />
          <Row style={{ padding: '10px 10px 10px 150px' }} >
            <Button onClick={() => { handleName(name) }} variant="primary" size="sm">
              Info
            </Button>
          </Row>
        </Col>
      </Row>








      <MyProfile name={name} bio={bio} profession={profession} >

      </MyProfile>

      <Pic2>
        <img src="https://thumbs.dreamstime.com/b/goodbye-written-sand-coast-78677330.jpg" alt="GoodBye" />
      </Pic2>


    </Container>
  );
}

export default App;
