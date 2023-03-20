import React from "react";
import "../../styles/Booking.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Booking = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/reservations/reserved")
  }

  return (
    <section className="bookings-sect">
      <h1 className="heading">Reserve a table</h1>
      <div className="form-div">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <label htmlFor="name">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              {...register(
                "name",
                {
                  required: true,
                  minLength: 2,
                  maxLength: 100,
                }
              )}
            />
            {errors.name && errors.name.type === "required" && <span>Name is required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Name should be atleast 2 characters long</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Name canot be more than 100 characters long</span>}
          </div>
          <div className="email">
            <label htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register(
                "email",
                {
                  required: true,
                  //eslint-disable-next-line
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
              )}
            />
            {errors.email && errors.email.type === "required" && <span>Email is required</span>}
            {errors.email && errors.name.email === "pattern" && <span>Enter valid Email address</span>}
          </div>
          <div className="phoneNumber">
            <label htmlFor="phoneNumber">
              Phone Number
            </label>
            <br />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(xxx)-xxx-xxxx"
              {...register(
                "phoneNumber",
                {
                  required: true,
                  //eslint-disable-next-line
                  pattern: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  minLength: 10
                }
              )}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && <span>Phone Number is required</span>}
            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && <span>The number should atleast be 10 digits</span>}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && <span>Enter a valid number</span>}
          </div>
          <div className="people">
            <label htmlFor="people">
              Number of People
            </label>
            <br />
            <input
              type="number"
              id="people"
              name="people"
              {...register(
                "people",
                {
                  required: true,
                  min: 1,
                  max: 100
                }
              )}
            />
            {errors.people && errors.people.type === "required" && <span>No. of people is required</span>}
            {errors.people && errors.people.type === "min" && <span>Atleast 1 person is required</span>}
            {errors.people && errors.people.type === "max" && <span>Number of people cannot be more than 100</span>}
          </div>
          <div className="date">
            <label htmlFor="date">
              Select Date
            </label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              {...register(
                "date",
                {
                  required: true,
                  valueAsDate: true
                }
              )}
            />
            {errors.date && errors.date.type === "required" && <span>Date is required</span>}
            {errors.date && errors.date.type === "valueAsDate" && <span>Enter a valid date</span>}
          </div>
          <div className="time">
            <label htmlFor="time">
              Select Time
            </label>
            <br />
            <select id="time" name="time" {...register(
              "time",
              {
                required: true,
              }
            )}>
              <option value="">Select</option>
              <option value="9 to 11">9:00 to 11:00</option>
              <option value="11 to 13">11:00 to 13:00</option>
              <option value="13 to 15">13:00 to 15:00</option>
              <option value="15 to 17">15:00 to 17:00</option>
              <option value="17 to 19">17:00 to 19:00</option>
              <option value="19 to 21">19:00 to 21:00</option>
              <option value="21 to 23">21:00 to 23:00</option>
            </select>
            {errors.time && errors.time.type === "required" && <span>Time is required</span>}
          </div>
          <div className="occasion">
            <label htmlFor="occasion">
              Ocassion
            </label>
            <br />
            <select id="occasion" name="occasion" {...register(
              "occasion",
              {
                required: true
              }
            )}>
              <option value="">Select</option>
              <option value="None">None</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other</option>
            </select>
            {errors.occasion && errors.occasion.type === "required" && <span>Occasion is required</span>}
          </div>
          <div className="seating">
            <label htmlFor="seating">
              Seting Preferences
            </label>
            <br />
            <select id="seating" name="seating" {...register(
              "seating",
              {
                required: true
              }
            )}>
              <option value="">Select</option>
              <option value="none">None</option>
              <option value="indoors">Indoors</option>
              <option value="outdoor(patio)">Outdoor (Patio)</option>
              <option value="outdoor(sidewalk)">Outdoor (Sidewalk)</option>
            </select>
            {errors.seating && errors.seating.type === "required" && <span>Seating is required</span>}
          </div>
          <button type="submit" className="reserve-btn">Book Table</button>
        </form>
      </div>
    </section>
  )
}

export default Booking