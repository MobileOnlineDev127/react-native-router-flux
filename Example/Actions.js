import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Router from './Router';
import Launch from './components/Launch';
import Register from './components/Register';
import Login from './components/Login';
import Login2 from './components/Login2';

const scenes = new Router({
  modal: {
    initial: true,
    modal: true,
    hideNavBar: true,
    children: () => [scenes.root, scenes.loginContainer],
  },
  root: {
    hideNavBar: true,
    children: () => [scenes.launch, scenes.register],
  },
  launch: {
    hideNavBar: true,
    component: Launch
  },
  register: {
    title: 'Register',
    component: Register
  },
  loginContainer: {
    children: () => [scenes.login, scenes.login2]
  },
  login: {
    component: Login,
    title: 'Login'
  },
  login2: {
    component: Login2
  }

});
global.Actions = scenes;
export default scenes;
