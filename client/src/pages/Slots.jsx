import React from 'react'
import "../components/slots.css"

 function Slots() {
  

  return (
    <>
      <div class="Booking-slots">
        <h2>booking</h2>
        <label>Select a Slot:</label>
        <select id="slots">
          <option value="Select a slot">Big cars</option>
          <option value="15">small cars</option>
          <option value="10">Motocycles</option>
          <option value="12">Lorries</option>
         
        </select>
      </div>

      <ul class="Booking-space">
        <li>
          <div class="slot"></div>
          <small>Available</small>
        </li>
        <li>
          \<div class="slot selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div class="slot occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div class="container">

        <div class="row">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>
        <div class="row">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot occupied"></div>
          <div class="slot occupied"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>
        <div class="row">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="sea"></div>
          <div class="slot"></div>
          <div class="slot occupied"></div>
          <div class="slot occupied"></div>
        </div>
        <div class="row">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>
        <div class="row">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
        </div>
        <div class="row">
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot"></div>
          <div class="slot occupied"></div>
          <div class="slot"></div>
        </div>
      </div>

      <p class="text">
      You have selected <span id="count">0</span> slot for price of $<span
        id="total">0</span>
      </p>
      <script src="script.js"></script>
    </>
  )
 }

export default Slots;
