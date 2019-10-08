# Completed Endpoints
**/user/login**
data to post
```
{
  "username": "<username>",
  "password": "<password>"
}
```
returns a session cookie to the browser

**/user/createprofile** 

data to post
```
{
  'username': user.userName,
  'usertype': user.userType,
  'password': user.password,
  'phone': user.phone,
  'address': user.address,
  'email': user.email,
  'subscriptions': user.subscriptions,
  'family': user.familyInformation
}
```
returns if error
```
{
  "error" : "<error message>"
}
```
else
```
{
  "success" : "The user has been created"
}
```

**/user/updateprofile** 

data to post
```
{
  'username': user.userName,
  'usertype': user.userType,
  'password': user.password,
  'phone': user.phone,
  'address': user.address,
  'email': user.email,
  'subscriptions': user.subscriptions,
  'family': user.familyInformation
}
```
returns if error
```
{
  "error" : "<error message>"
}
```
else
```
{
  "success" : "The user has been updated"
}
```

**/inventory/registerfood** 

data to post
```
{
  "name": foodObj.name,
  "description": foodObj.description,
  "type": foodObj.type,
  "imageurl": foodObj.imageurl,
  "quantity": foodObj.quantity,
  "members": foodObj.members
 }
```
