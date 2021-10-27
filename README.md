# bearer-auth

Created by Evan Woodworth

## Additional Security Measures Implemented

I added an expiration to JWT:

```js
jwt.sign({ username: this.username }, SECRET, { expiresIn: '15m' })
```

## Links to application deployment

Heroku:   
Github Pull Request: 

## UML

![UML](./img/bearer-auth.png)