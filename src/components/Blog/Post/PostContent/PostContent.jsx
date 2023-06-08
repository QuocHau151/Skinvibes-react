import Link from 'next/link';

export const PostContent = ({ blog }) => {
  return (
    <>
      <div className='post-top'>
        <h2>{blog.title}</h2>
        <p>{blog.subTitle}</p>
        <img src={blog.image} className='js-img' alt='' />
        <ul className='post-top__info'>
          <li className='post-top__date'>
            <i className='icon-date'></i>
            {blog.date?.month} {blog.date.date}, {blog.date.year}
          </li>
          <li className='post-top__user'>
            <i className='icon-user2'></i>
            <a href='#/'>by {blog.authorName}</a>
          </li>
          <li className='post-top__watch'>
            <i className='icon-eye'></i>
            {blog.totalWatchCount}
          </li>
          <li className='post-top__comment'>
            <i className='icon-comment'></i>
            {blog.totalCommentCount}
          </li>
        </ul>
      </div>
      <div className='post-content'>
        <p>{blog.content1}</p>
        <p>{blog.content2}</p>
        <p>{blog.content3}</p>
        <p>{blog.content4}</p>
        <p>{blog.content5}</p>
        <p>{blog.content6}</p>

        <h6>{blog.titleTwo}</h6>
        <p>{blog.contentTwo}</p>
        <blockquote className='blockquote'>
          “{blog.quote.content}”
          <span className='blockquote-author'>{blog.quote.author}</span>
        </blockquote>
        <ul className='post-list'>
          {blog.postList.map((list, index) => (
            <li key={index}>
              <span>{list.title}</span>
              {list.content}
            </li>
          ))}
        </ul>
        <p>{blog.contentThree}</p>
      </div>
      <div className='post-bottom'>
        <div className='post-bottom__info'>
          <div className='post-bottom__tags'>
            <span>Tags:</span>
            <ul>
              {blog.tags.map((tag, index) => (
                <li key={index}>
                  <Link href='#/'>
                    <a>{tag.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='contacts-info__social'>
            <span>Share:</span>
            <ul>
              <li>
                <a href='#/'>
                  <i className='icon-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-insta'></i>
                </a>
              </li>
              <li>
                <a href='#/'>
                  <i className='icon-in'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='post-bottom__nav'>
          <a href='#/'>
            <i className='icon-arrow'></i>previous post
          </a>
          <a href='#/'>
            next post<i className='icon-arrow'></i>
          </a>
        </div>
      </div>
    </>
  );
};
