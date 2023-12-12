import React from 'react'
import arrow from "../images/Vec.png";
import profile from "../images/profile.png";
import edit from "../images/edit.png";
import location from "../images/location.png";
import currency from "../images/currency.png";
import  language from "../images/language.png";
import toy from "../images/toy.png";


function Home() {

  const settingsArray = [
  'Clinic settings',
  'Appointment slots',
  'Payments settings',
  'Notifications settings',
  'Support',

];
  return (
    <div className='pt-1'>
        <hr className="my-6 ml-12 w-[972px] max-sm:w-[360px] max-sm:ml-0" />
         <div className=" flex flex-row  max-sm:flex-col max-sm:px-0 ">
          <div className="flex flex-row ml-12 max-sm:mx-4">
            <span  className='max-sm:text-sm'  style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >Dashboard</span>
            <div className="p-[5px] max-sm:p-1"><img src={arrow} alt="Arrow" width={7} /></div>
            <span className='max-sm:text-sm'style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >My Profile</span>
          </div>
    
                    
     </div>

            <hr className="ml-12 w-[972px] max-sm:w-[346px] max-sm:ml-3 max-sm:mt-2" />
      
           <div className='flex flex-row gap-[60px] max-sm:flex-col max-sm:gap-[30px]'>
            <div className='w-[22.5rem] ml-12 mt-[30px] max-sm:ml-4  max-sm:mt-2'>
           <div className='flex flex-row gap-[1rem] items-center w-[22.31rem] h-[10.5rem] max-sm:w-[20.5rem] border-b border-[#D9D9D9]'>
            
             <img src={profile} alt="" width={120} height={120} />
                <div className='flex flex-col '>
                  <div>
                       <button className="[font-family:'Arimo'] mt-[1px] w-[5.43rem] h-[2.125rem] text-[#FFF] bg-[#740AC7] justify-center gap-[1rem]  px-[0.275rem] py-[0.5rem] rounded-lg  text-center text-[0.75rem] text-normal leading-[1.125rem] pointer hover:shadow-md">
                        Super Admin
                       </button>
                  </div>

                  <div className="[font-family:'Arimo'] text-[#000] text-[1.5rem] font-bold mt-[0.75rem]">
                      Dr. Kim Jones
                  </div>

                  <div className="[font-family:'Arimo'] text-[#000] text-[0.875rem] font-semibold tracking-[-0.00875rem]">
                   MBBS, DLO, MS(ENT)
                  </div>
                  <div className="[font-family:'Arimo'] text-[#740AC7] text-[0.75rem] font-semibold tracking-[-0.0075rem]">
                     ENT specialist
                  </div>
                </div>
           </div>

            <div className='flex gap-[0.6rem] flex-col mt-[0.6rem]'>
              {
                settingsArray.map((data,index)=>{
                      return(
                         <div className="[font-family:'Arimo']  w-[22.375rem] h-[3.75rem] justify-center items-center bg-[#EEE] color-[#040404] text-[1rem] font-normal px-[0.75rem] py-[1rem] rounded-md leading-[1.2rem]  hover:bg-gray-200 transition duration-300 ease-in-out hover:shadow-xl pointer max-sm:w-[20.5rem] " key={index}>
                   {data}
                 </div>
                      )
                })
              }
            </div>
            </div>

            <div className='w-[34.6875rem] bg-[#F5F5F5] flex flex-col  pt-[2.625rem] pr-[3rem] pb-[19.625rem] pl-[3rem] gap-[0.56rem] max-sm:m-4  max-sm:w-[20.5rem] max-sm:pt-[2rem] max-sm:pr-[1rem] max-sm:pl-[1rem]'>
              <div className="[font-family:'Arimo'] text-[#1F1F1F] text-[1.25rem] font-[600] tracking-[-0.0125rem] leading-[1.28125rem]">
                 Clinic settings
              </div>
              <div className="[font-family:'Poppins'] text-[#000] leading-[1.563rem] font-medium text-[1.125rem] ">
                Add Clinic
              </div>
                <div className='w-[3.685rem] h-[0.125rem] bg-[#03BF9C]'>
                  
                </div>
               <div className='border-b border-[#E7E7E7] h-[6.3rem] max-sm:h-[7rem]'>
                 <div className="[font-family:'Inter'] text-[#353535] text-[0.8rem] font-medium leading-[1.3125rem] max-sm:mb-3">
                 Transform your Clinic into a Digital Hub Enhance Efficiency by Adding Staff Members. 
              </div>
              <div className='flex flex-row gap-[0.56rem]items-center'>
                <div  className="[font-family:'Inter'] text-[#353535] text-[0.8rem] font-medium leading-[1.3125rem] mt-[6px] max-sm:mt-[1px]">
                  Click on 'Add Clinic' to Expand Your Team.
                </div>
              
                <button className="px-[1.1875rem] py-[1rem] bg-[#009394] text-center w-[14.0625rem] h-[3.1rem] rounded-md [font-family:'Arimo'] text-[1rem]  leading-[1.2rem] tracking-[0.02rem] font-medium text-[#FFF] hover:shadow-md pointer max-sm:w-[10rem] max-sm:h-[2.5rem] max-sm:text-[0.85rem] max-sm:px-[0.5rem]  max-sm:leading-[0.5rem] ">
                  Add New Clinic
                </button>
              </div>
               </div>
              <div className='w-[28.6rem] h-[18rem] bg-[#FFF] mt-[0.14rem] max-sm:w-[18.5rem] max-sm:h-[19rem]'>
                   <div className='flex flex-row gap-[0.5rem] m-[1rem]'>
                     <div className='w-[3.1rem] h-[3.1rem] bg-[#D9D9D9] max-sm:h-[2.5rem] max-sm:w-[4rem]'></div>
                     <div className='flex flex-col w-[17rem] h-[4.1rem] gap-[0.4rem] max-sm:gap-[0.05rem]'>
                      <div className="[font-family:'Inter'] text-[#000] text-[1.5rem] font-medium leading-[1.8rem] max-sm:text-[1.3rem]">
                        Jones Clinic
                      </div>
                      <button className="[font-family:'Inter'] text-[#FFF] text-[0.68rem] font-medium tracking-[0.075rem] bg-[#18A6A7] pointer w-[6.3rem] leading-[1.8rem] h-[1.8rem] text-center rounded-md hover:shadow-md max-sm:h-[1.5rem] max-sm:leading-[1rem] ">
                       Primary Clinic
                      </button>
                     </div>
                          <div className='bg-[#5351C7] w-[5.57rem] h-[2.68rem] flex flex-row justify-center items-center gap-[0.375rem] rounded-md max-sm:w-[7rem] max-sm:h-[2rem] ' >
                     <img src={edit} alt="edit" className='max-sm:w-[15px] w-[20px]'/>
                     <button  className="[font-family:'Inter'] text-[#FFF] text-[1rem] font-medium leading-[1.2rem] max-sm:text-[0.9rem] ">
                      Edit
                      </button>
                  </div>
                   </div>
             
                <div className='flex flex-col gap-[1rem] m-[1rem]'>
                    <div  className='flex flex-row gap-[0.62rem] '>
                     <div >
                         <img src={location} alt="location" className='w-[25px] max-sm:w-[33px] max-sm:mt-1'/>
                     </div>
                    <div className="[font-family:'Inter'] text-[#424146] text-[0.775rem] font-normal leading-[1.31rem]">
                   
                      Plot no 47-5/1, Madhavi Nagar, Opp. BHEL R&D gate, BalaNagar, Hyderabad, 500037
                    </div>
                  </div>
                     <div  className='flex flex-row gap-[0.62rem] '>
                     <div className='mt-[0.2rem]'>
                         <img src={language} alt="language" width={20} />
                     </div>
                    <div className='flex flex-row gap-[0.62rem]'>
                   <div className="gap-[1rem] rounded-sm [font-family:'Inter'] text-[#424146] text-[0.775rem] font-normal leading-[1.05rem] p-[0.25rem] " style={{ backgroundColor:"rgba(77, 168, 145, 0.10)"}}>
                    English
                   </div>
                     <div className="gap-[1rem] rounded-sm [font-family:'Inter'] text-[#424146] text-[0.775rem] font-normal leading-[1.05rem] p-[0.25rem] " style={{ backgroundColor:"rgba(77, 168, 145, 0.10)"}}>
                      Hindi
                     </div>
                     <div className="gap-[1rem] rounded-sm [font-family:'Inter'] text-[#424146] text-[0.775rem] font-normal leading-[1.05rem] p-[0.25rem] " style={{ backgroundColor:"rgba(77, 168, 145, 0.10)"}}>
                          Tamil
                     </div>
                    </div>
                  </div>
                    <div  className='flex flex-row gap-[0.62rem] '>
                     <div className='mt-[0.2rem]'>
                         <img src={currency} alt="currency" width={20}/>
                     </div>
                    <div className="[font-family:'Inter'] text-[#424146] text-[0.775rem] font-normal leading-[1.6rem]">
                   ₹ 200 ~ ₹ 400
                    </div>
                  </div>
                        <div  className='flex flex-row gap-[0.62rem]'>
                     <div className='mt-[0.2rem]'>
                         <img src={toy} alt="toy" className='max-sm:w-[17px] w-20px'/>
                     </div>
                    <div className="[font-family:'Inter'] text-[#424146] text-[0.775rem] font-normal leading-[1.6rem] w-[18.2rem] max-sm:w-[8rem]">
                   11 members
                    </div>
                    <button className="[font-family:'Inter'] font-medium text-[#FFF] text-[0.78rem] text-center bg-[#18A6A7] rounded-md p-[0.3rem] pointer hover:shadow-md max-sm: max-sm:h-[1.7rem] max-sm:text-[0.8rem]">
                      Add members
                    </button>
                  </div>
                </div>
              </div>
              <div className="[font-family:'Inter'] text-[#353535] text-[0.8rem] font-medium leading-[1.05rem] ">
               No other available clinics found.
              </div>
            </div>
           </div>

    </div>
  )
}

export default Home
 