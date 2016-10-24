'use strict'

const redis = require("redis")

class RedisClient {
  constructor() {
    this.client = redis.createClient()
    this.roomUserKey = "draw_room_users"
  }

  addUser(id,user){
    this.client.hget(this.roomUserKey,id,function(err,res){
      if(err){
        console.log(err)
      }else{
        if(!res){
          var users = []
        }
        else{
          var users = JSON.parse(res)    
          if(users.length >= 6){
            return false
          }
          if(this.isInArray(users,user)){
            return true
          }
        }
        users.push(user)
        return this.client.hset(this.roomUserKey,id,JSON.stringify(users),redis.print)
      }
    })
  }


  isInArray(arr,str){
    var i = arr.length
    while(i--){
      if(arr[i] === str){
        return true
      }
    }
    return false
  }
}

