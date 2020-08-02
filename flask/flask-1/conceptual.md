### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
	- JavaScript can run in a browser, Python cannot.
	- Python can be used to write backend of the applications, servers etc. JavaScript can be used to write backened (eg. node server) as well as frontend 
	- Python uses indentation as logical block separation, JavaSript uses curly brackets for the same
	- Python raises exceptions for incorrect number of parameters, JavaScript does not.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you can try to get a missing key (like "c") *without* your programming crashing.
	- use try and except
	- using `get` eg. `dict = {"a": 1, "b": 2}; dict.get("c")`	
	
- What is a unit test?
	- unit test is a kind of test that we would use to test a specific unit of code, which could generally boil down to a function. It checks only for the functionality of that specific part to be working fine or not. 	

- What is an integration test?
	- integration test is used to test the connection between 2 or more units or modules. It can be testing integration between templates and views, testing for api routes, etc. Unlike unit tests, these tests check if different pieces of an application are correctly wired.

- What is the role of web application framework, like Flask?
	- Frameworks help us follow a specific structure in writing the application. They define a set of rules and guidelines using which it makes easier and faster to develop applications
	- Another important role that frameworks play is, the define certain in-built (maybe complex) functionalities, which we do not have to deal with when writing our own apps, which help us concentrate on the functionality we would want to build rather than worry about the internal workings. (eg. `session` in flask)

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
	- When the information is used as parameter in the route url, that information should be important enough that the endpoint is dedicated to it. In this example, say if I want to describe what a pretzel is, what ingredients go into it's making, I would use it this way.
	- If the information is not very important, in a way that it is used as merely one of the describing attributes of a bigger theme, it should be used as a query parameter. For example, to indicate someone's favourite food is pretzel, I would use it this way
- How do you collect data from a URL placeholder parameter using Flask?
	- `@app.route('/question/<int:id>')`	

- How do you collect data from the query string using Flask?
	- using `request.args.get('some-param')`

- How do you collect data from the body of the request using Flask?
	- using `request.form['some-param'] or request.form.get('some-param')` if data is sent as post data using form

- What is a cookie and what kinds of things are they commonly used for?
	- A cookie is a small piece of information that can be stored in the browser. Cookies can be sent and received to or from the server. They are generally used to store user information which can be sent over to the server. 	

- What is the session object in Flask?
	- A session object in Flask is a cookie. They are signed and hence cannot be modified by the user. 

- What does Flask's `jsonify()` do?
	- It will convert any response to a json response of the parameters that we pass in. The response has the content-type `application/json`. For eg. `return jsonify(username=g.user.username, email=g.user.email, id=g.user.id)` would return `{
    "username": "admin",
    "email": "admin@localhost",
    "id": 42
}`
