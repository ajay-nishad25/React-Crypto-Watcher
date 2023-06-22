
# Introduction
`This project is a React JS` application that allows users to track the current price of cryptocurrencies and their price change in 24 hours. The application uses the coingecko API to get real-time cryptocurrency prices. The application is designed to be simple and easy to use and responsive. Users can quickly and easily find the coin by quick search. 

## NOTE

* Rate Limit, `i am currently using Free Public API which has a rate limit of 10-30 calls per minute, if you exceed that limit you will be blocked until the next 1 minute window. so if you exhausted the limit kindly wait for a minute`.

* The server responds to a user’s request by issuing status codes when the request is made to the server. Kindly refer to the table below to further understand the status codes when indicating the success or failure of an API call.

Status codes
* 400 (Bad Request)
* 401 (Unauthorised)
* 429 (Too many requests)
* 500 (Internal Server Error)
* 403 (Forbidden)
* 1020 (Access Denied)
* CORS error

[For more information regarding API rate limit click here](https://apiguide.coingecko.com/getting-started/error-and-rate-limit)

## autoFetch()

Also implementated autofetch code which fetch data after some interval, due to coingecko rate limit it is disabled. 

    // Set a timeout to fetch prices every minute
    const interval = setInterval(fetchData, 60000);

    // Clean up the interval when the component unmounts
    return () => {
        clearInterval(interval);
    };

## Demo



