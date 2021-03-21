import '../styles/global.css';

import React from "react";
import { Provider } from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import store, {wrapper} from '../redux/store';


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// class MyApp extends App {

//     static async getInitialProps({Component, ctx}) {

//         const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

//         return {pageProps};

//     }

//     render() {
//         const {Component, pageProps, store} = this.props;
//         return (
//             <Container>
//                 <Provider store={store}>
//                     <Component {...pageProps} />
//                 </Provider>
//             </Container>
//         );
//     }

// }

// const makeStore = () => store;

// export default withRedux(makeStore)(MyApp);

export default wrapper.withRedux(MyApp);