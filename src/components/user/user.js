import React, { Fragment,Component } from 'react'
import Spinner from '../layout/spinner';
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getuserRepos(this.props.match.params.login);
    }
    render() {
         const{

            
           
             name,
             avatar_url,
             location,
             bio,
             blog,
             login,
             html_url,
             company,
             followers,
             following,
            public_repos,
             public_gists,
             hireable
         } = this.props.user;
         console.log(name + 'idk')

       const {loading, repos} = this.props;
       if(loading) return <Spinner/>
        return (
            
            <Fragment>
                <div> <Link to='/' className='btn btn-danger '>Back To Search</Link></div>
                {<br></br>}
                Hireable : {' '}
                {
                    hireable ? (<i className='fas fa-check text-success'/>)
                    :
                    (<i className='fas fa-times-circle text-danger'/>)
                }
               
               <div className='card grid-2 '>
                   <div className='all-center'>
                   <img src={avatar_url} alt='img'  className='round-img' style={{width:'150px'}}/>
                   <h1>{name}</h1>
                   <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>}
                       
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username:</strong> {login}
                                    </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company:</strong> {company}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website:</strong> {blog}
                                    </Fragment>}
                            </li>
                        </ul>
                        <p><br/></p>
                        <a href={html_url} target='blank' className='btn btn-dark'>Go to github</a>
                </div>
                
                </div>
                <div className='card text-center'>
                        <div className='badge badge-success'>Followers: {followers}</div>
                        <div className='badge badge-light'>Following: {following}</div>
                        <div className='badge badge-dark'> Public_repos: { public_repos}</div>
                        <div className='badge badge-primary'>Public_gists: {public_gists}</div>
                </div>
                 <Repos repos={repos}/>
            </Fragment> 
            
        )
    }
}

export default User
