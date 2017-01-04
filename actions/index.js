import request from 'axios';

export const USER_AUTH = 'USER_AUTH';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_AUTH_FAIL = 'USER_AUTH_FAIL';
export const USER_IS_AUTHENTICATED = 'USER_IS_AUTHENTICATED';

const API_URL = 'http://localhost:5000';

/**
 * Signup
 * @param {string} email user email
 * @returns {promise}.
 */
export function signup(email) {
  const params = {
    email
  };
  return {
    type: USER_SIGNUP,
    promise: request.post(`${API_URL}/api/signup`, params)
  };
}

/**
 * Auth
 * @param {string} email user email
 * @param {string} pass user pass
 * @returns {promise}.
 */
export function auth(email, pass) {
  const params = {
    email,
    password: pass
  };

  return {
    type: USER_AUTH,
    promise: request.post(`${API_URL}/authenticate`, params)
  };
}

/**
 * Logout
 * @returns {promise}.
 */
export function logout() {
  return {
    type: USER_LOGOUT
  };
}

/**
 * Check if user is authenticated.
 * @returns {promise}.
 */
export function isAuthenticated() {
  return {
    type: USER_IS_AUTHENTICATED
  };
}
