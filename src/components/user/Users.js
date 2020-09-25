import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/spinner'
import Empty from '../layout/empty'

 function Users({users,loading,empty}) {
     if(loading){
         return <Spinner/>
     }
     else if(empty){
         return <Empty/>
     }
     else{
        return (
            <div style = {userstyle}>
            {users.map(function(user){
               return <Useritem key={user.id} user = {user}/>
            })}
       
        </div>
    )
     }
 }
  
    
    const userstyle = {
        display:'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gridGap: '1rem'
    }

export default Users
