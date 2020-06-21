export default {
  jwt: {
    secret: process.env.SECRET_JWT,
    expiredsIn: '1d'
  }
}
