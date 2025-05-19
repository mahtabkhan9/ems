import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.desc}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-blue-500 hover:bg-blue-600 py-1 px-2 text-sm rounded'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
