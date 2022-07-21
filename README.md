# Shop
### Table of Contents
- [General info](#general-info)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
  - [front-end](#front-End-project-setup)
  - [back-end](#Back-End-project-setup)
  - [database](#database-setup)
- [API Reference](#api-reference)
- [License](#license)

## General Info

Shop is a Full stack Online shop.

## Technologies

- HTML/CSS3
- NodeJs
- Express
- Vue 3
- Vue router
- Vuex
- MySQL

## How To Use

### Installation
You can install Shop locally using npm.

#### Front-End project setup

Install dependencies using:

```html
cd front
npm install
```

Compile and hot-reload for development using:

```html
npm run serve
```

Compile and minifile for production by running:

```html
npm run build
```

#### Back-End project setup

Install dependencies using:

```html
cd back
npm install
```

Compiles for development using:

```html
npm run dev
```

or start the server by using the following command:

```html
npm start
``` 

#### database setup
Run `back/sql/createDB.sql` file to create database called shop

## API Reference

You can get all carts using:
```http
GET   /getcart
```
Login is required to request this API. Make sure to put `Bearer accessToken` in `header.Authorization`.

200 status code return array of objects

---

get all comments of a product using:
```http
GET  /comment
```
| Parameter | Type |
| :--- | :--- |
| `ID` | `Number` |

200 status code return array of objects

---

get discounted product using:
```http
GET  /discount
```

200 status code return array of objects

---

get products for different genders using:
```http
GET  /gender
```
| Parameter | Type |
| :--- | :--- |
| `gender` | `String` |

200 status code return array of objects

---

get latest products using:
```http
GET  /newest
```

200 status code return array of objects

---

search products using:
```http
GET  /search
```
| Parameter | Type |
| :--- | :--- |
| `search` | `String` |

200 status code return array of objects

---

get the product using:
```http
GET  /product
```
| Parameter | Type |
| :--- | :--- |
| `ID` | `Number` |

200 status code return
```javascript
{
  commodityID  : Number,
  commodityName : String,
  gender : String,
  startingOdor : String,
  middleOdor : String,
  finalOdor : String,
  volume : Number,
  price : Number,
  discount : Number,
  pictureURL : String
}
```
---

post a cart :
```http
POST  /cart
```
The request should be a JSON in the form of
```javascript
{
  payment : String,
  cart    : [
      {ID : Number, quantity : Number},
      ...
  ],
}
```
Login is required to request this API. Make sure to put `Bearer accessToken` in `header.Authorization`.

201 status code return `{ "success": 'created!' }`

---

get the user:
```http
GET  /user
```
Login is required to request this API. Make sure to put `Bearer accessToken` in `header.Authorization`.

200 status code return
```javascript
{
  customerID : Number,
  customer : String,
  address : String,
  email : String,
}
```
---

make changes in user information :
```http
PUT  /user
```
The request should be a JSON and include one or more 
```javascript
{
  user  : String,
  pwd   : String,
  add   : String
}
```
200 status code return `{ "message": 'user changed' }`

---

Delete user :
```http
DELETE  /user
```
Login is required to request this API. Make sure to put `Bearer accessToken` in `header.Authorization`.
200 status code return `{ "message": 'user deleted' }`

---

Sign up :
```http
POST  /register
```
The request should be a JSON in the form of
```javascript
{
  user  : String,
  email : String,
  pwd   : String,
  add   : String
}
```
201 status code return `{ "success": 'new user ${user} created!' }`

other status code : 
| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 409 | `Conflict` |
| 500 | `INTERNAL SERVER ERROR` |

---

Login to an existing account :
```http
GET  /login
```
The request should be a JSON in the form of
```javascript
{
  user  : string,
  pwd   : string
}
```

200 status code return `{accessToken : string}` which expires after 30 seconds. The refreshToken is set as a cookie which expires after 1 day.

other status code : 
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 401 | `UNAUTHORIZED` |
| 500 | `INTERNAL SERVER ERROR` |

---

To get new accessToken :

```http
GET   /refresh
```
200 status code return `{accessToken : string}`

other status code : 
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 401 | `UNAUTHORIZED` |
| 403 | `FORBIDDEN` |
| 500 | `INTERNAL SERVER ERROR` |

---


## License

licensed under the [MIT](LICENSE) License.

[Back To The Top](#Shop)
