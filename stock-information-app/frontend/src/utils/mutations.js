import { gql } from '@apollo/client';

export const User_Profile = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
       User
       profile {
         _id
         email
       }
    }
  }`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user
    profile {
      _id
      email
    }
  }
}`;