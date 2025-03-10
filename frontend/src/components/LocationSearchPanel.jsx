import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);
  

  // sample array for location  
  const locations = [
    "504Y, Ambika Township. Dindoli, Surat, Gujarat",
    "23 Krishna Heritage, Parvat Patia, Suart",
    "11B Regent Plaza, Near SBI Bank, Adajan, Surat",
    "18A Near Singh's Cafe, VR Mall, Surat"
  ]

  return (
    <div>
      {/* This is just a sample data */}

      {
        locations.map(function (elem, idx) {
          return <div key={idx} onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className="flex gap-4 border-2 border-grey-200 active:border-black rounded-xl items-center my-2 p-3 justify-start">
            <h2 className='bg-[#eee] flex items-center justify-center h-12 w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
        })
      }

    </div>
  )
}

export default LocationSearchPanel
