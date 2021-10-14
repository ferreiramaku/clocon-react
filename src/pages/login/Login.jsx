import './login.css';
import React from 'react';
import { AmplifySignIn } from '@aws-amplify/ui-react'
import Showcase from '../../componentes/showcase/Showcase';
import FooterPages from '../../componentesFr/footerPages/FooterPages';
import NavbarPages from '../../componentes/navbarPages/NavbarPages';

function Login() {
  return (
    <div>
        <NavbarPages/>
        <Showcase/>
        <div className="container bg-cor">
            <div className="d-flex flex-column align-items-center p-5 m-0">
                <AmplifySignIn />
            </div>
        </div>
        <FooterPages/>
    </div>
  );
}

export default Login;