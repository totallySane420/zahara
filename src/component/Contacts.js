import React, { useState } from 'react'

const Contacts = () => {
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [people, setPeople] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = {firstName, email}
            setPeople((people)=>{return [...people,person]})
            console.log(people)
            setEmail("")
            setFirstName("")
        }
        else{
            window.alert("Please add a first name and email address.")
        }
    }
    return (
    <article className='m-4'>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="firstName">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              value={firstName}
              placeholder="Enter email"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={email}
              placeholder="Password"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
      
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        {people.map((value) => {
          return (
            <h1 key={value.firstName}>
              Name: {value.firstName} Email: {value.email}
            </h1>
          );
        })}
      </article>
    )
}

export default Contacts