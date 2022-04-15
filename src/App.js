import { useState } from "react";
import { Form, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToHomescreen from "react-add-to-homescreen";
function App() {
  const [nomor, setNomor] = useState("");
  const [pesan, setPesan] = useState("");
  let url = "";
  function handleClick(e) {
    e.preventDefault();
    if (nomor === null || nomor === "") {
      alert("NOMOR WAJIB DIISI");
    } else {
      url = "http://wa.me/" + nomor + "?text=" + pesan;
      window.location.href = url;
    }
  }

  function handleAddToOffscreenClick(e) {
    e.preventDefault();
    alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
  }

  return (
    <>
      <AddToHomescreen
        onAddToHomescreenClick={handleAddToOffscreenClick}
        title="Klik untuk mempermudah"
      ></AddToHomescreen>
      <Container fluid="md">
        <Card>
          <Card.Body>
            <h3 className="text-center">Chat Whatsapp Tanpa Simpan Nomor</h3>
            <Form>
              <Form.Group>
                <Form.Label>Nomor Whatsapp Tujuan</Form.Label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="628797xxxx"
                  onChange={(event) => setNomor(event.target.value)}
                  required
                ></input>
                <Form.Text className="text-danger">
                  Format Nomor wajib 0 diganti 62, contoh "62897055xxx"
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Pesan</Form.Label>
                <textarea
                  className="form-control"
                  placeholder="Pesan yang ingin diketik, tidak wajib"
                  onChange={(event) => setPesan(event.target.value)}
                ></textarea>
              </Form.Group>
            </Form>
            <br></br>
            <br></br>
            <a
              className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x"
              onClick={handleClick}
            >
              KIRIM
            </a>
            <script></script>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default App;
