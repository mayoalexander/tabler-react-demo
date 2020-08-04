// @flow
import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import tableStats from '../data/UserTableStats.json'

import {
  Header,
  Container,
  Grid,
  Alert,
  Button,
  Card,
  StatsCard,
  SocialNetworksList,
  Avatar,
  ContactCard,
  Table,
  Profile,
  List,
  Media,
  Text,
  Comment
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
    selectedUser: {},
    analyticsBlocks: ['Daily', 'New Sales', 'New Designs']
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

          <Alert type="primary" isDismissible>
            <Header.H4>New Ways to Explore Your Creatvity</Header.H4>
            <p>
              Get full access and take advantage of all the new tools available. You now have the latset version of our dashboard, registration, and public profiles.
            </p>
            <Button.List>
              <Button color="success" RootComponent="button">
                Learn more
              </Button>
              <Button color="secondary" RootComponent="button">
                No, thanks
              </Button>
            </Button.List>
            </Alert>

            <Grid.Row>
              <Grid.Col lg={12}>
                <div class="text-center">
                  <Avatar imageURL="https://via.placeholder.com/150" className="mb-4" />
                  <Header.H1>{this.state.selectedUser.name}</Header.H1>
                  <Header.H4>{this.state.selectedUser.email}</Header.H4>
                  <SocialNetworksList
                    itemsObjects={[
                      { name: "twitter", label: "Follow", to: "http://www.twitter.com"},
                      { name: "linkedin", label: "Connect", color: "blue", to: "http://www.linkedin.com" },
                    ]}
                    prefix="fa"
                    asButtons
                  />
                </div>

                <Grid.Row className="mt-5">
                { this.state.analyticsBlocks.map( (user, index) =>
                  <Grid.Col lg={4}>
                    <StatsCard layout={2} movement={5} total="423" label="Users online" />
                  </Grid.Col>
                ) }
                </Grid.Row>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col lg={12}>
                <ContactCard
                  cardTitle={this.state.selectedUser.name + '\'s Location'}
                  mapPlaceholder="https://i.stack.imgur.com/RdkOb.jpg"
                  rounded
                  objectURL="https://via.placeholder.com/150"
                  alt="Generic placeholder image"
                  name={"Axa Global Group"}
                  address={this.state.selectedUser.address && {
                    line1: `${this.state.selectedUser.address.street}`,
                    line2: `${this.state.selectedUser.address.city}, ${this.state.selectedUser.address.zipcode}`,
                  }}
                  details={this.state.selectedUser.company && [
                    { title: "Company Name", content: this.state.selectedUser.company.name },
                    { title: "Business Type", content: this.state.selectedUser.company.catchPhrase },
                    {
                      title: "Website",
                      content: <a href="http://www.axa.com">http://www.axa.com</a>,
                    },
                    { title: "Office Phone", content: "+123456789" },
                  ]}
                  description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Consectetur dignissimos doloribus eum fugiat itaque
                  laboriosam maiores nisi nostrum perspiciatis vero.`}
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="my-5">
              <Grid.Col lg={12}>
                <Header.H4>Recent Orders</Header.H4>
                <Table
                bodyItems={tableStats}
                  headerItems={[{ content: "ID" }, { content: "Name" }, { content: "Action" }]} />
              </Grid.Col>
            </Grid.Row>
          </Container>
        </div>
      </SiteWrapper>
    )
  }
}

export default PublicProfile;
