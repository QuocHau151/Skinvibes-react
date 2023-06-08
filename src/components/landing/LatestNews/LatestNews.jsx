import Link from 'next/link';
import { Blogs } from 'components/Blog/Blogs/Blogs';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import blogData from 'data/blog/blog';

export const LatestNews = () => {
  const blogs = [...blogData].slice(0, 2);
  return (
    <>
      {/* <!-- BEGIN LATEST NEWS --> */}
      <section className='latest-news'>
        <div className='wrapper'>
          <SectionTitle
            subTitle='Our Blog'
            title='The Latest News At Skinvibes'
            body='Fanpage: Da Mình Ảo Thật Đấy'
          />
          <Blogs blogs={blogs} />
        </div>
        <div className='latest-news__btn'>
          <Link href='/blog'>
            <a className='btn'>Read blog</a>
          </Link>
        </div>
      </section>
      {/* <!-- LATEST NEWS EOF --> */}
    </>
  );
};
