import LoginPage from './../login/loginpage';
import SignUpPage from '../registration/signup';
import Authentication from './../authentication/authentication';

const  routes = {
    component: BaseAudioContext,
    childRoutes: [
        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        }
    ]
};

export default routes;