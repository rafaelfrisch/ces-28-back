/* eslint-disable no-unused-vars */

/*
Notice that when not calling “next” in an error-handling function,
you are responsible for writing (and ending) the response.
Otherwise those requests will “hang” and will not be eligible for garbage collection.
https://expressjs.com/en/guide/error-handling.html
*/

const logErrors = (err, req, res, next) => {
  // log error then pass it along
  next(err);
};

const clientError = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).json({ error: 'Something failed!' });
  } else {
    next(err);
  }
};

const serverError = (err, req, res, next) => {
  // use a switch case to serve error messages
  res.status(500).json({ error: err.stack });
};

module.exports = function(app){
    app.use(logErrors)
    app.use(clientError)
    app.use(serverError)
}
