var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req,res, next){
  request({
    uri: 'http://api.devexhacks.com/rewards/accounts',
    headers:{
      //code:'http://api.devexhacks.com/oauth2/authorize',
      //redirect_uri:'http://api.devexhacks.com/oauth2/token',
      //clientid:'vgw3sf4f8nq3b98i1gdfr8wpx4gpty0ska52',
      //clientsecret:'eb5f6rda6v0d1ld8y4fymkudo86gorrc47cj',
      //grant_type:'authorization_code',
      Authorization: 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicGNrIjoxLCJhbGciOiJkaXIiLCJ0diI6Miwia2lkIjoiYTdxIn0..Q8EPUTo189PyagVaeXKw9XgvYN1pEz5Vgp1bgF4Hj9TE2anFkmGILcf7UX9iO6L0cUTgJQm3blatkUZUyUKc6cHFyyuVPKmtZDIU2zmP6VEhxmroUfeqh8YJnOEw9LRVKU1Pq4fVRuZMsIM1Mf6F2oMOAFL8JTw7AK4CQVUWtti4KHaNBtDX9cHOuwRtDbKhQbmySLP0g5ENzrC9gWMLprmq66hX5bI4TAiF2f7KlgjtT9lvph9pLyDsfBhtOanWj6gVmYMqxcNQlUHcgtsH3nlthX1PsOKQppDtmS09hPELzTxEn2kxk2btJ0KPy2iQFQyDSWfER1xgJnFDASr1sg8MNeQh3Qjmp4vuruQMimu1IFVvb1cIsIDS7cWPCUPa2UFYz9YfW1uXVnUpOyZTCWZ3E28YL70Rn2TbP4Hw030rgBWF5Ok1YD51e7BWJXXCq1lIWUG85WmjWZ5Il4nVNZBxBFDPR7lQMG2Gw36ibffzfTDwwHfWhlpkmbqtRLawKEVtYNDcpIvocujQJFHlwCRJ9uex5BXJzQQ6Mrp1cvxp3sp65mU5EPSU4J1OK0Iuj8Yv.I3YRuEIDtnqtHjjjrb9OK0A'
    },

    function(err, res, body){
      if(!err && res.statusCode ===200){
        console.log(body);

        res.json(body);
      }
      else{
        res.json(err);
      }
    }
  }).pipe(res);
});

module.exports = router;
