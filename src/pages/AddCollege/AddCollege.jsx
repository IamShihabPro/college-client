// src/MultiForm.js
import React, { useState } from 'react';

const MultiForm = () => {

    const [collegeData, setCollegeData] = useState({
        collegeName: '',
        collegeImage: '',
        collegeRatings: '',
        admissionProcess: '',
      });

  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventDescription: '',
  });

  const [sportData, setSportData] = useState({
    sportName: '',
    sportDate: '',
    sportDescription: '',
  });

  const [researchData, setResearchData] = useState({
    researchAuthor: '',
    researchPublishedDate: '',
    researchAbstract: '',
    researchFileLink: '',
  });


  const handleCollegeChange = (event) => {
    const { name, value } = event.target;
    setCollegeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEventChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSportChange = (event) => {
    const { name, value } = event.target;
    setSportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResearchChange = (event) => {
    const { name, value } = event.target;
    setResearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the form submission, e.g., send data to a server or perform other actions.
    // console.log('College Data:', collegeData);
    // console.log('Event Data:', eventData);
    // console.log('Sport Data:', sportData);
    // console.log('Research Data:', researchData);

    setCollegeData({ collegeName: '', collegeImage: '', collegeRatings: '', admissionProcess: '' });
    

    setEventData({ eventName: '', eventDate: '', eventDescription: '' });
    setSportData({ sportName: '', sportDate: '', sportDescription: '' });
    setResearchData({ researchAuthor: '', researchPublishedDate: '', researchAbstract: '', researchFileLink: '' });


    const collegesData = {collegeData, eventData, sportData, researchData}
    console.log(collegesData);

    fetch(`${import.meta.env.VITE_API_URL}/colleges`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(collegesData)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })

    
  };

  return (
    <div className="p-4 md:w-1/2 mx-auto mt-20">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4">





    

      <div className="mb-4">
          <label htmlFor="collegeName" className="block font-medium text-gray-700">College Name</label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={collegeData.collegeName}
            onChange={handleCollegeChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="collegeImage" className="block font-medium text-gray-700">College Image URL</label>
          <input
            type="text"
            id="collegeImage"
            name="collegeImage"
            value={collegeData.collegeImage}
            onChange={handleCollegeChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="collegeRatings" className="block font-medium text-gray-700">College Ratings</label>
          <input
            type="number"
            id="collegeRatings"
            name="collegeRatings"
            value={collegeData.collegeRatings}
            onChange={handleCollegeChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="admissionProcess" className="block font-medium text-gray-700">Admission Process</label>
          <textarea
            id="admissionProcess"
            name="admissionProcess"
            value={collegeData.admissionProcess}
            onChange={handleCollegeChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>


















        <h2 className="text-2xl font-semibold mb-4">Add Event</h2>
        <div className="mb-4">
          <label htmlFor="eventName" className="block font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventData.eventName}
            onChange={handleEventChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDate" className="block font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleEventChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDescription" className="block font-medium text-gray-700">Event Description</label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={eventData.eventDescription}
            onChange={handleEventChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <h2 className="text-2xl font-semibold my-4">Add Sport</h2>
        <div className="mb-4">
          <label htmlFor="sportName" className="block font-medium text-gray-700">Sport Name</label>
          <input
            type="text"
            id="sportName"
            name="sportName"
            value={sportData.sportName}
            onChange={handleSportChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sportDate" className="block font-medium text-gray-700">Sport Date</label>
          <input
            type="date"
            id="sportDate"
            name="sportDate"
            value={sportData.sportDate}
            onChange={handleSportChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sportDescription" className="block font-medium text-gray-700">Sport Description</label>
          <textarea
            id="sportDescription"
            name="sportDescription"
            value={sportData.sportDescription}
            onChange={handleSportChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <h2 className="text-2xl font-semibold my-4">Add Research Work</h2>
        <div className="mb-4">
          <label htmlFor="researchAuthor" className="block font-medium text-gray-700">Author</label>
          <input
            type="text"
            id="researchAuthor"
            name="researchAuthor"
            value={researchData.researchAuthor}
            onChange={handleResearchChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="researchPublishedDate" className="block font-medium text-gray-700">Published Date</label>
          <input
            type="date"
            id="researchPublishedDate"
            name="researchPublishedDate"
            value={researchData.researchPublishedDate}
            onChange={handleResearchChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="researchAbstract" className="block font-medium text-gray-700">Abstract</label>
          <textarea
            id="researchAbstract"
            name="researchAbstract"
            value={researchData.researchAbstract}
            onChange={handleResearchChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="researchFileLink" className="block font-medium text-gray-700">File Link</label>
          <input
            type="text"
            id="researchFileLink"
            name="researchFileLink"
            value={researchData.researchFileLink}
            onChange={handleResearchChange}
            className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiForm;
