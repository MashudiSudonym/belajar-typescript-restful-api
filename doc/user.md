# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
    "username": "mashudi",
    "password": "123456rahasia",
    "name": "Mashudi",
}

```

Response Body (Success) :

```json
{
    "data": {
        "username": "mashudi",
        "name": "Mashudi"
    }
}
```

Response Body (Failed) :

```json
{
    "errors": "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username": "mashudi",
    "password": "123456rahasia",
}
```

Response Body (Success) :

```json
{
    "data": {
        "username": "mashudi",
        "name": "Mashudi",
        "token": "random_string_from_uuid"
    }
}
```

Response Body (Failed) :

```json
{
    "errors": "Username or password is incorrect"
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "data": {
        "username": "mashudi",
        "name": "Mashudi"
    }
}
```

Response Body (Failed) :

```json
{
    "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
    "password": "123456rahasia", // optional
    "name": "Mashudi" // optional
}
```

Response Body (Success) :

```json
{
    "data": {
        "username": "mashudi",
        "name": "Mashudi"
    }
}
```

Response Body (Failed) :

```json
{
    "errors": "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "data": "OK"
}
```

Response Body (Failed) :

```json
{
    "errors": "Unauthorized"
}
```
