# nodejs_rest_example 
## sample run

ubuntu@ip-172-31-52-30:~$ curl  http://52.91.18.76/quote/all | python -m json.tool
[
    {
        "what": "I know words. I have the best words.",
        "who": "Trump"
    },
    {
        "what": "Bite my shiny metal ass",
        "who": "Bender"
    },
    {
        "what": "Indeed.",
        "who": "Teal'c"
    },
    {
        "what": "Can I take your picture before I beat you up?",
        "who": "Tyler"
    },
    {
        "text": "I'm Batman!",
        "who": "Batman"
    }
]

ubuntu@ip-172-31-52-30:~$ curl  http://52.91.18.76/quote/random | python -m json.tool
{
    "what": "I know words. I have the best words.",
    "who": "Trump"
}
ubuntu@ip-172-31-52-30:~$ curl  http://52.91.18.76/quote/1 | python -m json.tool
{
    "what": "Bite my shiny metal ass",
    "who": "Bender"
}
ubuntu@ip-172-31-52-30:~$ curl --data "who=Superman&what=I'm Superman!" http://52.91.18.76/quote -v
*   Trying 52.91.18.76...
* Connected to 52.91.18.76 (52.91.18.76) port 80 (#0)
> POST /quote HTTP/1.1
> Host: 52.91.18.76
> User-Agent: curl/7.47.0
> Accept: */*
> Content-Length: 31
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 31 out of 31 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 41
< ETag: W/"29-jMoXBKN9Q7/jP7qCclFQLA"
< Date: Sun, 04 Dec 2016 08:32:47 GMT
< Connection: keep-alive
<
* Connection #0 to host 52.91.18.76 left intact
{"who":"Superman","text":"I'm S http://52.91.18.76/quote/5 | python -m json.tool'm Superman!" http://52.91.18.76/quote -v
{
    "text": "I'm Superman!",
    "who": "Superman"
}
ubuntu@ip-172-31-52-30:~$ curl -X "DELETE" http://52.91.18.76/quote/5
trueubuntu@ip-172-31-52-30:~$ c http://52.91.18.76/quote/5 | python -m json.tool
No JSON object could be decoded
ubuntu@ip-172-31-52-30:~$ curl  http://52.91.18.76/quote/all | python -m json.tool
[
    {
        "what": "I know words. I have the best words.",
        "who": "Trump"
    },
    {
        "what": "Bite my shiny metal ass",
        "who": "Bender"
    },
    {
        "what": "Indeed.",
        "who": "Teal'c"
    },
    {
        "what": "Can I take your picture before I beat you up?",
        "who": "Tyler"
    },
    {
        "text": "I'm Batman!",
        "who": "Batman"
    }
]


