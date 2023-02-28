
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'


const Card = () => {
  const img = [{
    img : Single
  } ,
  {
    img : Double
  } ,
  {
    img : Triple
  } ,
  ]
  return (
    <div className=' w-full py-[10rem] px-4 bg-white md:flex flex-row'>
     {img.map((e)=> <div className='max-w-[1240px] mx-auto grid-row-3 gap-8 '>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg 
        hover:scale-105 duration-150 mt-20 md:w-96'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={e.img} alt='Single'/>
          <h2 className=' text-2xl font-bold text-center py-8'>Single User</h2>
          <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
      </div>)}
      </div>
  )
}

export default Card
