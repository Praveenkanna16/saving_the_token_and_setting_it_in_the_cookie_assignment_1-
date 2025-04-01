const jwt = require('jsonwebtoken');

const secret = 'secretKey';

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, secret);
}

const decrypt = (token) => {
  // return decoded payload
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error('Token verification failed:', error);
    throw error;
  }
}

// Test the functions
const payload = { username: 'testUser', role: 'admin' };
const token = encrypt(payload);
try {
  const decodedPayload = decrypt(token);

  if (decodedPayload && decodedPayload.username === payload.username && decodedPayload.role === payload.role) {
    console.log('Success');
  } else {
    console.log('Failed');
  }
} catch (error) {
  console.log('Failed');
}

module.exports = {
  encrypt,
  decrypt
};
