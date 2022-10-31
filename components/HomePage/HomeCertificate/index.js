/* eslint-disable @next/next/no-img-element */
import React from 'react'

function HomeCertificate() {
  return (
    <section className='flex flex-col justify-center items-center mt-5 border-b border-slate-600/10 -py-4'>
      <div className='flex flex-col'>
        <h1 className='text-black/70 text-2xl font-semibold text-center md:text-3xl'>Claim NEAR certificate</h1>
        <p className='font-normal text-black/80 text-center text-base'>Upon course completion, receive the NEAR dev 101<br />
          certificate as an NFT on your NEAR wallet.</p>
        <img src='certificate.png' alt='certificate image' className='h-[13.149rem] w-[23.375rem] mt-10 md:h-[25rem] md:w-[45rem] md:mt-20 bg-gradient-logo-right' />
      </div>

      <div className='flex flex-col justify-center items-center gap-3 mt-40 md:flex-row md:justify-between'>
        <div className='flex flex-col justify-center items-center gap-3 md:items-start'>
          <img src='certificateLogo.png' alt='logo' className='h-[11.25rem] w-[11.25rem] md:hidden ' />
          <p className='text-black/70 text-3xl font-semibold text-center md:text-4xl'>NEAR development 101</p>
          <button className='md:w-40 md:h-10 border border-slate-600/20 rounded-3xl text-black/80 text-xl h-[3rem] w-[13rem] md:p-2 md:text-base -mb-3'>
            Start The Course</button>
        </div>
        <div className='md:ml-80'>
          <img src='certificateLogo.png' alt='logo' className='h-[11.25rem] w-[11.25rem] hidden md:block md:h-80 md:w-80' />
        </div>
      </div>

    </section>
  )
}

export default HomeCertificate