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

class IntroPage extends React.Component<Props, State> {
  state = {
    users: [],
    selectedUser: null
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const users = res.data
      this.setState(prevState => ({
          users
      }))
    })
  }

  openUser = (index) => {
    const selectedUser = this.state.users[index]
    this.setState(prevState => ({
        selectedUser: selectedUser
    }))
    this.props.history.push('/profile/' + selectedUser.id)
  }

  render() {
    return (
      <SiteWrapper>
        <div className="my-3 my-md-5">
          <Container>
            <Grid.Row>
              <Grid.Col lg={12}>
                <div className="text-center py-5">
                  <Header.H1>Welcome to my Demo</Header.H1>
                </div>
                <Grid.Row>
                { this.state.users.map( (user, index) =>
                  <Grid.Col width={12} xl={3} lg={4} md={4} sm={12} xs={12} key={index}>
                    <Card>
                      <Card.Header>
                        <Card.Title>{ user.name }</Card.Title>
                      </Card.Header>
                      <StatsCard layout={2} movement={5} total="423" label="Users online" />
                      <Card.Body className="pt-0">
                        <Button color="primary" onClick={() => this.openUser(index)}>View</Button>
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

export default IntroPage;
