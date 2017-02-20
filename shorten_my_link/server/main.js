import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  console.log('Meteor server started');

  Meteor.publish('links', function(){
    return Links.find({});
  })
});


// Executed whenever a user visits with a route link
// 'localhost:3000/asdf'

function onRoute(req, res, next){

    const link = Links.findOne({token: req.params.token});

    if(link){

        Links.update(link, { $inc: {clicks: 1}});
        res.writeHead(307, {'Location': link.url});
        res.end();
    }else{
        next();
    }

}

const middleware = ConnectRoute(function(router){
    router.get('/:token', onRoute);
});

WebApp.connectHandlers
    .use(middleware);