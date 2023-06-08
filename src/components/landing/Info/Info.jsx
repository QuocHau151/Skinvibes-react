import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? 'https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1'
    : '';
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <img
                src='/level/level.jpeg'
                className='js-img'
                alt=''
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>Level Serum</span>
              <h3>Serum ngăn ngừa tăng sắc tố, phục hồi và làm mịn màng làn da</h3>
              <span className='info-blocks__item-descr'>
              MẪU MỚI 100% 
Công thức sản phẩm, thử nghiệm và việc sản xuất được thực hiện tại Canada bởi Phòng thí nghiệm Regimen
Dành cho mọi loại da, đặc biệt là da có nếp nhăn, lão hóa, tăng sắc tố, da có bề mặt sần sùi, kém mịn màng.
              </span>
              
              <Link href='/shop'>
                <a className='btn'>
                  Shop now
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className='info-blocks__item info-blocks__item-reverse js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <PromoVideo
                videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image='/assets/img/info-item-img2.jpg'
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>Level Serum</h2>
              <span className='info-blocks__item-descr'>
              CÔNG DỤNG:
Làm mịn màng, săn chắc làn da, đồng thời giảm viêm và tổn thương
Chống tăng sắc tố, mờ thâm mụn, làm trắng da
              </span>
              <p>
              NHẬN XÉT SẢN PHẨM:
Apply một cách rất dễ dàng và không hề gây bết dính cho da
Làm sáng da một cách rõ rệt, nâng tone da sau khi sử dụng, ngoài ra sản phẩm có hiệu quả cực kỳ tốt cho các làn da hay bị các vấn đề về viêm nhiễm hoặc mụn trứng cá.
Không cồn, hương liệu, chất bảo quản ẩn nên rất an toàn với da, thậm chí những làn da nhạy cảm
Chứa hoạt chất Tranexamic Acid nồng độ cao tuy nhiên không gây kích ứng và giá thành phải chăng
              </p>
              <Link href='/about'>
                <a className='info-blocks__item-link'>
                  <i className='icon-video'></i>
                  Watch video about us
                  <i className='icon-arrow-lg'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
