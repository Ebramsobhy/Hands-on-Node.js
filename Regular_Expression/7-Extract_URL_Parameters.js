  // Extracts query parameters from a URL

function parseQueryString(url){
    let queryParams = {}; 
    let queryRegex = /.+\?(.+)/; 
    let matchedQuery = queryRegex.exec(url); 
    // matchedQuery[1] = "param1=val1&param2=val2"

    if(matchedQuery != null){
        let paramRegex = /([^=&]+)=([^=&]+)/g; 
        let paramMatch = '';

        while(paramMatch = paramRegex.exec(matchedQuery[1])){
            // param1=val1 -> paramMatch[1] = param1   paramMatch[2] = val1
            queryParams[paramMatch[1]] = paramMatch[2];
        }
    }

    return queryParams;
}