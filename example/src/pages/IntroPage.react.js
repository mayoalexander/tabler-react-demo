// @flow
import React from "react";
// import axios from 'axios'

import {
  Header,
  Container,
  Grid,
  Card,
  Button,
  Form,
  Avatar,
  Profile,
  List,
  Media,
  Text,
  Comment,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

// load users
type State = {|
  users: array
|}

class IntroPage extends React.Component<Props, State> {
  state = {
    users: [
      { name: 'Tim Cook', id: 1 },
      { name: 'Steve Jobs', id: 2 },
      { name: 'Alex Mayo', id: 3 },
    ]
  }

  render() {
    return (
      <SiteWrapper>
        <div className="my-3 my-md-5">
          <Container>
            <Grid.Row>
              <Grid.Col lg={12}>
                <div>
                  <Header.H1>Welcome to my Demo</Header.H1>
                </div>
                { this.state.users.map( user =>
                  <Grid.Col lg={12}>
                    <div>
                      <Header.H1>{ user.name }</Header.H1>
                    </div>
                  </Grid.Col>
                ) }
              </Grid.Col>
            </Grid.Row>
          </Container>
        </div>
      </SiteWrapper>
    )
  }
}

export default IntroPage;
