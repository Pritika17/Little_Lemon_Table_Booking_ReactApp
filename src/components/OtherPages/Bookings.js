import React from "react";
import "../../styles/Booking.css"

const Booking = () => {
  return (
    <section className="bookings-sect">
      <h1 className="heading">Reserve a table</h1>
      <div className="form-div">
        <form className="form">
          <div className="name">
            <label htmlFor="name">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Name"
              minLength={2}
              maxLength={20}
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              minLength={4}
              maxLength={100}
            />
          </div>
          <div className="phoneNumber">
            <label htmlFor="phoneNumber">
              Phone Number
            </label>
            <br />
            <input
              type="tel"
              id="phoneNumber"
              placeholder="(xxx)-xxx-xxxx"
              minLength={10}
              maxLength={25}
            />
          </div>
          <div className="people">
            <label htmlFor="people">
              Number of People
            </label>
            <br />
            <input
              type="number"
              id="people"
              min={1}
              max={100}
            />
          </div>
          <div className="date">
            <label htmlFor="date">
              Select Date
            </label>
            <br />
            <input
              type="date"
              id="date"
            />
          </div>
          <div className="time">
            <label htmlFor="time">
              Select Time
            </label>
            <br />
            <select id="time">
              <option>9:00 to 11:00</option>
              <option>11:00 to 13:00</option>
              <option>13:00 to 15:00</option>
              <option>15:00 to 17:00</option>
              <option>17:00 to 19:00</option>
              <option>19:00 to 21:00</option>
              <option>21:00 to 23:00</option>
            </select>
          </div>
          <div className="occasion">
            <label htmlFor="occasion">
              Ocassion
            </label>
            <br />
            <select id="occasion">
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
            </select>
          </div>
          <div className="seating">
            <label htmlFor="seating">
              Seting Preferences
            </label>
            <br />
            <select id="seating">
              <option>None</option>
              <option>Indoors</option>
              <option>Outdoor (Patio)</option>
              <option>Outdoor (Sidewalk)</option>
            </select>
          </div>
          <div className="btn">
            <button className="reserve-btn">Book Table</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking