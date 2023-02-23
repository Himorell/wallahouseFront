import { Grid, Image, Container } from "semantic-ui-react";
import iconmail from "../Assets/Profile/icon_email.svg";
import iconstatement from "../Assets/Profile/icon_statement.svg";
import iconhouse from "../Assets/Profile/icon_house.svg";
import question from "../Assets/Profile/icon_questionmarkwithcircle.svg";
import yourself from "../Assets/Profile/image4.svg";

const Profile = () => {
  return (
    <Container>
      <Grid id="fonts">
        <Grid.Row columns={2} centered>
          <Grid.Row>
            <Image src={yourself} />
            <h3>Hola, Juancito</h3>
          </Grid.Row>

          <Grid.Column>
            <Image src={iconstatement} />
          </Grid.Column>

          <Grid.Column>
            <h3>Mis datos</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Image src={iconhouse} />
          </Grid.Column>

          <Grid.Column>
            <h3>Mis anuncios</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Column>
          <Image src={iconmail} />
        </Grid.Column>

        <Grid.Column>
          <h3>Mis mensajes</h3>
        </Grid.Column>

        <Grid.Column columns={2}>
          <Grid.Column>
            <Image src={question} />
          </Grid.Column>

          <Grid.Column>
            <h3>Algun problema?</h3>
            <h3>Contacta con nosotros</h3>
          </Grid.Column>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Profile;
