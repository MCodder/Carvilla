import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";


  function ProfileTabel({ profiles, set, setProfiles}) {

    // function profiledelete(id){
    //   fetch("http://localhost:8000/profiledelete"+ id,{
    //     method: "delete",
    //   })
    //   .then ((res)=>{
    //     return res.json()
    //   })
    //   .then((res)=>{
    //     deleteprofile(res)
       
    //   })
    //   .catch((error)=>{console.log(error)})
    // }

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Github Profile Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {profiles.map((profile,index) => {
          return (
            <tr key={(profile.id)}>
              <td>{index+1}</td>
              <td>{profile.name}</td>
              <td>{profile.desc}</td>
              <td>
                <a href={profile.link} target="_" variant="primary">
                  <Button>Github Profile</Button>
                </a>
              </td>
              <td>
                {/* <a href={profile.link} target="_" variant="primary"> */}
                  <Button onClick={()=>{ fetch('http://localhost:8000/profile/'+ profile.id)
                   .then((res)=>{  
                    return res.json();
                    })
                   .then((res)=>{
                    console.log(res.data);
                    set(res)
                    })  
                   .catch((error)=>{console.log(error)})}}>Edit</Button>
                {/* </a> */}

                <Button className='m-1' onClick={()=>{
                  fetch("http://localhost:8000/profiledelete/"+ profile.id, {
                    method: "delete",
                  }).then((res)=>{  
                    return res.json();
                    })
                   .then((res)=>{
                    setProfiles(res)
                    })  
                   .catch((error)=>{console.log(error)})

                  }}>delete</Button>

              </td>

              
            </tr>
          );
        })}
      </tbody>
      
    </Table>
  );
}
  
  
export default ProfileTabel;