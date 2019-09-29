
jsonFromPost = function( url, toSendBody ){
    fetch(url, {
        method: 'get',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: {toSendBody}
  })
  .then(json)
  .then(function (data) {
    //console.log('Request succeeded with JSON response', data);
    retun data;
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}

jsonFromGet = function( url ){
    fetch(url, {
        method: 'get',
  })
  .then(json)
  .then(function (data) {
    //console.log('Request succeeded with JSON response', data);
    retun data;
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
}

