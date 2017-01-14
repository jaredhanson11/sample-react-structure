
const host = 'http://192.168.100.183';
const port = '5000';
const urlBase = host+port;

function get(endpoint, paramsObj) {
    const endpointUrl = urlBase + endpoint;
    var url = endpointUrl + $.param(paramsObj);
    fetch(url, {method:'get'})
        .then(function(response){
            return response.json();
        }).catch(function(error){
            console.log('error');
        });
}

function post(endpoint, paramsObj) {
    const endpointUrl = urlBase + endpoint;
    var url = endpointUrl;
    fetch(url, {
        method:'post',
        body: JSON.stringify(paramObj)
    }).then(function(response){
        return response.json();
    }).catch(function(error){
        console.log('error');
    });
}

export {get, post}
