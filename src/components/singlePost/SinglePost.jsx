import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
          <div className="singlePostWrapper">
              <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" 
              className="singlePostImg" />
              <h1 className="singlePostTitle">
                  Lorem, ipsum dolor.
                  <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
                  </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Dazzy</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Recusandae tempore non aliquid nesciunt minus
                      error voluptatum sunt sed et? Eius?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Recusandae tempore non aliquid nesciunt minus
                      error voluptatum sunt sed et? Eius?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Recusandae tempore non aliquid nesciunt minus
                      error voluptatum sunt sed et? Eius?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Recusandae tempore non aliquid nesciunt minus
                      error voluptatum sunt sed et? Eius?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Recusandae tempore non aliquid nesciunt minus
                      error voluptatum sunt sed et? Eius?
                    Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Recusandae tempore non aliquid nesciunt minus
                      error voluptatum sunt sed et? Eius?
                </p>
          </div>
        </div>
    )
}
