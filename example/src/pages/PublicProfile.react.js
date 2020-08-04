// @flow
import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

import {
  Header,
  Container,
  Grid,
  Card,
  StatsCard,
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
  users: array,
  selectedUser: object
|}

class PublicProfile extends React.Component<Props, State> {
  state = {
    users: [],
    selectedUser: {}
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id
    axios.get('https://jsonplaceholder.typicode.com/users/' + userId).then((res) => {
      const user = res.data
      this.setState(prevState => ({
          selectedUser: user
      }))
    })
  }

  render = () => {
    return (
      <SiteWrapper>
        <div className="my-3 my-md-5">
          <Container>
            <Grid.Row>
              <Grid.Col lg={12}>
                <div>
                  <Header.H1>{this.state.selectedUser.name}</Header.H1>
                </div>
                <Grid.Row>
                { this.state.users.map( (user, index) =>
                  <Grid.Col lg={4} key={index}>
                    <Card>
                      <Card.Header>
                        <Card.Title>{ user.name }</Card.Title>
                      </Card.Header>
                      <StatsCard layout={2} movement={5} total="423" label="Users online" />
                      <Card.Body>
                        <Link color="primary" onClick={() => this.openUser(index)}>A Button</Link>
                      </Card.Body>
                    </Card>
                  </Grid.Col>
                ) }
                </Grid.Row>
              </Grid.Col>
            </Grid.Row>
          </Container>
        </div>
      </SiteWrapper>
    )
  }
}

export default PublicProfile;
