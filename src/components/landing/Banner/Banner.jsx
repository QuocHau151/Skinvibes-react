import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text'>Skinvibes</span>
            <h1 className='main-text'>Beauty &amp; Care</h1>
            <p>
             
            </p>

            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
        
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
