export const Content = ({ title, description, children }) => {
  return <section className='grid grid-rows-[auto_auto] bg-gradient-to-r from-[#3741513d] to-[#ffffff01] bg-opacity-30 p-4 justify-items-center'>

    <div className='grid grid-rows-[auto_auto] gap-8 w-full px-4 lg:w-4/5'>

      <div>
        <div className='text-white text-lg'>{title}</div>
        <div className='italic text-white text-sm'>{description}</div>
      </div>

      {children}
    </div>
  </section>;

};
