import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center absolute top-0 flex items-center justify-center w-[90%] h-auto" onClick={() => { props.setVehicleFound(false) }}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Looking For Driver</h3>
            <div className='flex gap-2 justify-between items-center flex-col'>
                <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-2 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Surat</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-2 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Surat</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-2'>
                        <i className="text-lg ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Surat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver
