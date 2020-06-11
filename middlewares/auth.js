const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authConfig = {
	domain: 'dev-gbcxzine.auth0.com',
	audience: 'tJErjgd08P2uE8Nw50sni3q33vSiLQqa',
};

module.exports = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
	}),

	audience: authConfig.audience,
	issuer: `https://${authConfig.domain}/`,
	algorithm: ['RS256'],
});
