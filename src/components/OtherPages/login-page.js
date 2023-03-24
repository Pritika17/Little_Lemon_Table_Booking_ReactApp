import React from 'react'
import "../../styles/login.css"

const Loginpage = () => {
  return (
    <article className='login'>
      <div class="center">
        <h1>Login to your account</h1>
        <form>
          <div class="inputbox">
            <input type="text" required="required" />
            <span>Email</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required" />
            <span>Password</span>
          </div>
          <div class="inputbox">
            <input type="button" className='btn' value="Submit" />
          </div>
        </form>
      </div>
    </article>
  )
}

export default Loginpage