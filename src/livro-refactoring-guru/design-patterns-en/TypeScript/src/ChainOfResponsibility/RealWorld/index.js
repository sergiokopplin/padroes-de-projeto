"use strict";
/**
 * Real World Example for the Chain of Responsibility Design Pattern
 *
 * Need: Handle different types of authentication in an HTTP request
 *
 * Solution: Create a chain of authentication handlers, where each handler
 * checks a specific authentication type. If a handler can't authenticate the
 * request, it passes the request to the next handler in the chain.
 */
/**
 * The base AbstractAuthenticationHandler implements the default chaining
 * behavior
 */
class AbstractAuthenticationHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return { success: false, message: 'Unable to authenticate user.' };
    }
}
/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
class BasicAuthenticationHandler extends AbstractAuthenticationHandler {
    handle(request) {
        const user = request.user;
        if (user.name === 'admin' && user.password === 'password') {
            return {
                success: true,
                message: 'User authenticated with basic authentication.'
            };
        }
        return super.handle(request);
    }
}
class ApiKeyAuthenticationHandler extends AbstractAuthenticationHandler {
    handle(request) {
        if (request.apiKey === 'my-api-key') {
            return {
                success: true, message: 'User authenticated with API key.'
            };
        }
        return super.handle(request);
    }
}
class JwtAuthenticationHandler extends AbstractAuthenticationHandler {
    handle(request) {
        if (request.jwtToken === 'my-jwt-token') {
            return {
                success: true, message: 'User authenticated with JWT token.'
            };
        }
        return super.handle(request);
    }
}
