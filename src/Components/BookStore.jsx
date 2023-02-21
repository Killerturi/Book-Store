import React from "react";
import BookDataBase from "../BookDataBase";

function BookStore() {
  return (
    <div className="container">
      <h1>
        <u>Book Store</u>
      </h1>
      <marquee>
        <p>
          "The power to be found between the pages of a book is formidable,
          indeed. And these 50 inspiring quotes about books and reading are here
          to remind you of that. For, as author Anna Quindlen says, "Books are
          the plane, and the train, and the road. They are the destination, and
          the journey. They are home.".....
        </p>
      </marquee>
      <div className="cards">
        {BookDataBase.map((value) => {
          const { url, name } = value;
          return (
            <div className="card">
              <a
                href="https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_nxqtetlae_e&adgrpid=60571832564&hvpone=&hvptwo=&hvadid=486387378181&hvpos=&hvnetw=g&hvrand=17457572565332360992&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9298963&hvtargid=kwd-296458789801&hydadcr=14452_2154371&gclid=Cj0KCQiAg_KbBhDLARIsANx7wAwL0Y6UAk7RYNKRjDjWLJfFFGO6VxCXULzyjR8aiMw5SloxoUTHbfMaAkXyEALw_wcB"
                target="_blank"
              >
                <img src={url} />
              </a>
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>

      <div className="footer">
        <h2>Thanks for visiting our Store</h2>
      </div>
    </div>
  );
}

export default BookStore;
