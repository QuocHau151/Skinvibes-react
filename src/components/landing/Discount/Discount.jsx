import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/discount.jpeg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <Link href='/product/12132klj2322'>
              <a className='btn'>Buy now!</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
