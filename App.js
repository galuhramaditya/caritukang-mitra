import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import HomePage from './pages/home/HomePage';
import MitraOtwPage from './pages/mitraOtw/MitraOtwPage';
import LoginPage from './pages/onboard/LoginPage';
import OnboardPage from './pages/onboard/OnboardPage';
import RegisterPage from './pages/onboard/RegisterPage';
import StartJobPage from './pages/startJob/StartJobPage';
import PaymentPage from './pages/payment/PaymentPage';

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="onboard" component={OnboardPage} hideNavBar />
        <Scene key="startJob" component={StartJobPage} title="Start Job" />
        <Scene key="mitraOtw" component={MitraOtwPage} hideNavBar />
        <Scene key="home" component={HomePage} hideNavBar />
        <Scene key="register" component={RegisterPage} title="Daftar" />
        <Scene key="login" component={LoginPage} title="Login" />
        <Scene key="payment" component={PaymentPage} title="Job Checked" />
      </Stack>
    </Router>
  );
}