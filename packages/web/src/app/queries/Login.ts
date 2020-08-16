import { gql } from 'apollo-angular';

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(login: {
      username: $username
      password: $password
    }) {
      valid
    }
  }
`;
