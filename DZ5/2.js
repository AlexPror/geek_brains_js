"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
  show() {
    console.log(
      `${this.author}, ${this.comments[0].rating.dislikes}, ${this.comments[1].userId}, ${this.comments[1].text}`
    );
  },
};

post.show();

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

function showInfo() {
  console.log(
    `${post.author}, ${post.comments[0].rating.dislikes}, ${post.comments[1].userId}, ${post.comments[1].text}`
  );
}
showInfo();
