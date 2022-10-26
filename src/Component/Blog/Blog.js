import React from 'react';

const Blog = () => {
    return (
        <div className='mt-4'>
            <div >
                <p ><span className=' '>Q</span> what is cors??</p>
                <p ><span className=' '>Ans </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div >
                <p ><span className=' '>Q</span> Why are you using firebase? What other options do you have to implement authentication?</p>
                <p ><span className=' '>Ans </span>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    STYTCH.
                    Ory. 
                    Supabase. 
                    Okta.
                    PingIdentity.
                    Keycloak.
                    Frontegg.
                    Authress.</p>
            </div>
            <div >
                <p ><span className=' '>Q</span>How does the private route work?</p>
                <p ><span className=' '>Ans </span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div >
                <p ><span className=' '>Q</span>What is Node? How does Node work?</p>
                <p ><span className=' '>Ans </span>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>

        </div>
    );
};

export default Blog;