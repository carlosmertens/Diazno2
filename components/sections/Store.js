import { SideHeading } from '../util/SideHeading';

export const Store = () => {
  return (
    <section
      id='store-section'
      className='min-h-screen grid grid-cols-section gap-0 bg-dusty-gray'>
      <div className=''>
        <SideHeading title='Store' textColor='black' barsColor='green-400' />
      </div>
      <div className='grid grid-row-6 gap-4 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 p-4'>
        <div className='bg-green-50'>1</div>
        <div className='bg-green-200'>2</div>
        <div className='bg-green-300'>3</div>
        <div className='bg-green-400'>4</div>
        <div className='bg-green-500'>5</div>
        <div className='bg-green-600'>6</div>
      </div>
    </section>
  );
};
