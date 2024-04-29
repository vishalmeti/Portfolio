import Constants from '@/Data/Constants';
import  Form  from '@/components/Form';
import {MailIcon, HomeIcon, PhoneCall} from 'lucide-react';

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            
              Say Hello 👋
            
            </div>
            <h1 className='h1 max-w-md mb-8' >Let's Work Together.</h1>
            <p className='subtitle max-w-[400px]' >Please feel welcome to connect with me by completing the form below.</p>
          </div>

          {/* illustration  */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat">
          </div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
              {/* mail  */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className='text-primary'/>
              <div className="">{Constants.email}</div>
            </div>
              {/* addr  */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className='text-primary'/>
              <div className="">{Constants.address}</div>
            </div>
              {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className='text-primary'/>
              <div className="">{Constants.phone}</div>
            </div>
            
          </div>

          <Form/>
        </div>
      </div>
    </section>
  )
}

export default Contact