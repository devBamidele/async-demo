// We use this for testing

Promise.reject(new Error('Reason for rejection'))
.then(result => console.log(result))
.catch(err => console.log(`An error occurred ${err}`));

